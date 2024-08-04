import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwipeSlideItems.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { DeleteItem } from '../features/itemSlice';
import { ContextStates } from './UseContextStates';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import shoes from '../assets/shoes.webp'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
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

interface SwipeSlideProps {
    items: Item[];
}

function SwipeSlide({ items }: SwipeSlideProps) {
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
        if (isUpdate && UpdateContext) {
            UpdateContext.setUpdateIndex(index);
        } else {
            if (UpdateContext) {
                UpdateContext.setUpdateIndex(UpdateContext.updateIndex);
            }
        }
    };

    const handleDeletion = (id: string) => {
        dispatch(DeleteItem(id));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <>
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                freeMode={true}
                navigation
                modules={[Pagination,Navigation,FreeMode]}
                className="mySwiper swiperOut1"
                breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                  }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className='swiper-slideIn1'>
                        <Card className="item-basic1"sx={{ color:"white",maxWidth: 280, background: 'rgba(104,107,166,0.5)', backdropFilter: 'blur(6px)', boxShadow: '0 3px 5px lightblue', borderRadius: 5, border: 'rgba(104,107,166,0.35)',  webkitBackdropFilter: 'blur(6px)' }}>
                            <CardHeader style={{height:"50px", color:"white"}}
                                avatar={
                                    <Avatar sx={{ bgcolor: red[400] }} aria-label="Shoes">
                                        {item.company.charAt(0)}
                                    </Avatar>
                                }
                                action={
                                    <>
                                        {isdelete ? (
                                            <IconButton aria-label="delete" onClick={() => handleDeletion(item.id)}>
                                                <DeleteIcon style={{ color: 'red' }} />
                                            </IconButton>
                                        ) : (
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        )}
                                    </>
                                }
                                title={item.name}
                                subheader={<div style={{color:"white", fontSize:"80%"}}>{item.company}</div>}
                            />
                            <CardMedia
                                component="img"
                                height="150"
                                image={shoes}
                                loading='lazy'
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="white">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing className='cardfooter'>
                                <div className="addon1">
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon className='addonIcon' />
                                </IconButton>
                                <Badge badgeContent={`${item.discount}% off`} color="success">
                                    <LocalOfferIcon />
                                </Badge>
                                <ExpandMore
                                    expand={expanded === index}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expanded === index}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon className='addonIcon' />
                                </ExpandMore>
                                </div>
                                <ColorButton style={{width:"100%"}} variant="contained" endIcon={!isUpdate ? <AddShoppingCartIcon /> : ""} onClick={() => handleUpdateClick(index)}>
                                    {!isUpdate ? "Buy" : "Update"}
                                </ColorButton>
                               
                            </CardActions>
                            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Quantity: <b>{item.quantity}</b> pieces are available</Typography>
                                    <Typography paragraph>Availability: <b>{item.isAvailable ? 'inStock' : 'outOfStock'}</b></Typography>
                                    <Typography paragraph>Price: <b>{item.price}</b> / only</Typography>
                                    <Typography paragraph>Discount: <b>{item.discount}</b>% OFF</Typography>
                                    <Typography paragraph><br />Reviews</Typography>
                                    <Rating
                                        name="hover-feedback"
                                        value={Number(item.reviews)}
                                        precision={0.5}
                                        readOnly
                                        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                                    />
                                </CardContent>
                            </Collapse>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SwipeSlide;
