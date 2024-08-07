import { useEffect } from 'react';
import * as React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from 'react-redux';
import { setIsdelete, setIsUpdate, UpdateItem } from '../../features/itemSlice';
import { RootState } from '../../store/store';
import './AddItemToCollection.css'
import AllItems from '../AllItems';
import { Box, Button } from '@mui/material';
import { ContextStates } from '../UseContextStates';
import Alert from '../Alert';



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
function UpdateItemInYourCollection() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  const [Name, setName] = React.useState('');
  const [Description, setDescription] = React.useState('');
  const [Catagory, setCatagory] = React.useState('');
  const [Price, setPrice] = React.useState('');
  const [Quantity, setQuantity] = React.useState('');
  const [Discount, setDiscount] = React.useState('');
  const [Company, setCompany] = React.useState('');
  const [Review, setReview] = React.useState('');
  const [Img, setImg] = React.useState('');
  const [fieldWidth] = React.useState("20ch");
  const [updateAlert,setupdateAlert] = React.useState(false);
  const UpdateContext = React.useContext(ContextStates);



  useEffect(() => {
    dispatch(setIsUpdate(true));
    dispatch(setIsdelete(false));
  }, [])


  function DisplayCurrentItem() {

    if (UpdateContext && items.length > 0) {
      const currItem: Item = items[UpdateContext.updateIndex];

      setName(currItem.name);
      setDescription(currItem.description);
      setCatagory(currItem.catagory);
      setPrice(currItem.price);
      setQuantity(currItem.quantity);
      setDiscount(currItem.discount);
      setCompany(currItem.company);
      setReview(String(currItem.reviews));
      setImg(currItem.img);
    }

  }

  useEffect(() => {
    if (UpdateContext) {
      DisplayCurrentItem();
    }
  }, [UpdateContext?.updateIndex]);

  const UpdateCurrentItem = () => {
    if (UpdateContext) {
      const updatedItem: Item = {
        id: items[UpdateContext.updateIndex].id, // retain the original id
        name: Name,
        description: Description,
        catagory: Catagory.toLowerCase(),
        price: Price,
        quantity: Quantity,
        isAvailable: true,
        discount: Discount,
        company: Company,
        reviews: Review,
        img: Img
      };
      dispatch(UpdateItem(updatedItem));
      setupdateAlert(true);
      setTimeout(() => setupdateAlert(false), 3000);

    }
  };

  return (
    <>
      {updateAlert && <Alert Description={"Item Updated Successfully"}/>}
      <div className="updateContainer">
        <div className="updateLeftContainer">
          <h1 color='white'>Select Item</h1>
          <AllItems items={items} />
        </div>
        <div className="updateRightContainer">
          <h1>Update Item</h1>
          <Box
            component="form"
            style={{ display: "flex", justifyContent: "space-around" }}
            sx={{
              "& .MuiTextField-root": {
                mx: 1,
                width: fieldWidth,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="name"
                label="Item Name"
                variant="filled"
                className="inputField"
                sx={{ m: 1 }}
                value={Name}
                onChange={(e) => { setName(e.target.value) }}
              />
              <TextField
                required
                id="catagory"
                label="Catagory"
                variant="filled"
                sx={{ m: 1 }}
                value={Catagory}
                onChange={(e) => { setCatagory(e.target.value) }}
              />
              <TextField
                required
                id="company"
                label="Company"
                variant="filled"
                sx={{ m: 1 }}
                value={Company}
                onChange={(e) => { setCompany(e.target.value) }}
              />
              <TextField
                required
                id="price"
                label="Price"
                variant="filled"
                sx={{ m: 1 }}
                value={Price}
                onChange={(e) => { setPrice(e.target.value) }}
              />
              <TextField
                required
                id="quantity"
                label="Quantity"
                variant="filled"
                sx={{ m: 1 }}
                value={Quantity}
                onChange={(e) => { setQuantity(e.target.value) }}
              />
              <TextField
                required
                id="discount"
                label="Discount %"
                variant="filled"
                sx={{ m: 1 }}
                value={Discount}
                onChange={(e) => { setDiscount(e.target.value) }}
              />
              <TextField
                required
                id="review"
                label="Review (?/5)"
                variant="filled"
                sx={{ m: 1 }}
                value={Review}
                onChange={(e) => { setReview(e.target.value) }}
              />
              <TextField
                required
                id="img"
                label="Img path"
                variant="filled"
                sx={{ m: 1 }}
                value={Img}
                onChange={(e) => { setImg(e.target.value) }}
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rows={2}
                variant="filled"
                sx={{ m: 1 }}
                value={Description}
                onChange={(e) => { setDescription(e.target.value) }}
              />
            </div>
          </Box>
          <Button variant="contained" endIcon={<SendIcon />} onClick={UpdateCurrentItem} >
            Update
          </Button>
        </div>
      </div>
    </>
  )
}

export default UpdateItemInYourCollection

