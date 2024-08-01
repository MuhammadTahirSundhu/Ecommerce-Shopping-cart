import * as React from 'react';
import './item.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import shoes from '../assets/shoes.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteItem, UpdateItem } from '../features/itemSlice';
import AlertUI from '@mui/material/Alert';
import Alert from './Alert';
import { ContextStates } from './UseContextStates';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface Item {
    id: string;
    name: string;
    description: string;
    catagory: string;
    price: string;
    quantity: string;
    isAvailable: boolean;
    discount: string;
    company: string;
    reviews?: string;
    img: string;
}

// Define the props interface
interface AllItemsProps {
    items: Item[];
}

// Define the AllItems component using traditional JavaScript function style
function AllItems({ items }: AllItemsProps) {

    const UpdateContext = React.useContext(ContextStates);
    
    const isdelete = useSelector((state: RootState) => state.items.isdelete);
    const isUpdate = useSelector((state: RootState) => state.items.isUpdate);
    const [showAlert, setShowAlert] = React.useState(false);

    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState<number | null>(null);

    const handleExpandClick = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleUpdateClick = (index: number) => {        
        if(isUpdate && UpdateContext){
            UpdateContext.setUpdateIndex(index);
        }
        else{
            if(UpdateContext){
                UpdateContext.setUpdateIndex(UpdateContext.updateIndex);
            }
        }
    };
    

    function Deletion(id: string) {
        dispatch(DeleteItem(id));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    }

    return (
        <>
            <div>
                {showAlert && <Alert Description="Item is Successfully Deleted!!!" />}
            </div>
            <div className="itemContainer">
                {items.map((item, index) => (
                    <Card className="item-basic" key={index} sx={{ color:"white",maxWidth: 280, background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(0px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', borderRadius: 2, border: ' 1px solid rgba(255,255,255,0.1)',  webkitBackdropFilter: 'blur(0px)' }}  >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[400] }} aria-label="Shoes">
                                    {`${item.company.charAt(0)}`}
                                </Avatar>
                            }
                            action={
                                <>
                                    {isdelete ? (
                                        <IconButton aria-label="delete" onClick={() => { Deletion(item.id) }}>
                                            <DeleteIcon style={{ color: 'red' }} />
                                        </IconButton>
                                    ) : (
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    )}
                                </>
                            }
                            title={`${item.name}`}
                            subheader={`${item.company}`}
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={`${shoes}`}
                            alt="shoes"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {`${item.description}`}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon className="favico" />
                            </IconButton>
                            <Badge badgeContent={`${item.discount}% off`} color="success">
                                <LocalOfferIcon />
                            </Badge>
                            <ColorButton variant="contained" endIcon={!isUpdate ? <AddShoppingCartIcon /> : ""} onClick={()=>{handleUpdateClick(index)}}>{!isUpdate ? "Add to cart" : "Update"}</ColorButton>
                            <ExpandMore
                                expand={expanded === index}
                                onClick={() => handleExpandClick(index)}
                                aria-expanded={expanded === index}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Quantity: <b>{`${item.quantity}`}</b> pieces are available</Typography>
                                <Typography paragraph>Availability: <b>{`${item.isAvailable ? 'inStock' : 'outOfStock'}`}</b></Typography>
                                <Typography paragraph>Price: <b>{`${item.price}`}</b>./only</Typography>
                                <Typography paragraph>Discount: <b>{`${item.discount}`}</b>%OFF</Typography>
                                <Typography paragraph><br />Reviews</Typography>
                                <Rating name="hover-feedback" value={Number(item.reviews)} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />} />
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default AllItems;
