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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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



function AllItems() {

    const items = useSelector((state: RootState) => state.items.items);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>

            <div className="itemContainer">

                {items.map((item, index) => (
                    <Card className="item-basic" key={index} >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="Shoes">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={`${item.name}`}
                            subheader={`${item.company}`}
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image="/static/images/cards/paella.jpg"
                            alt="Paella dish"
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
                                <LocalOfferIcon badge />
                            </Badge>
                            <ColorButton variant="contained" endIcon={<AddShoppingCartIcon />} >Add to cart</ColorButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Quantity:    <b>{`${item.quantity}`}</b> pieces are available</Typography>
                                <Typography paragraph>Availability:    <b>{`${item.isAvailable ? 'inStock' : 'outOfStock'}`}</b></Typography>
                                <Typography paragraph>Price:    <b>{`${item.price}`}</b>./only</Typography>
                                <Typography paragraph>Discount:    <b>{`${item.discount}`}</b>%OFF</Typography>
                                <Typography paragraph><br />Reviews</Typography>
                                <Rating name="hover-feedback" value={item.reviews} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />} />
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </div>

        </>
    );

}

export default AllItems