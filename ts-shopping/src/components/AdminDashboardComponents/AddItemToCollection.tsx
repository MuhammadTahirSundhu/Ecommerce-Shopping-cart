import * as React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from 'react-redux';
import { AddItem, setIsdelete, setIsUpdate } from '../../features/itemSlice';
import { nanoid } from '@reduxjs/toolkit';

import "./AddItemToCollection.css";
import {
  Box,
  Button,
} from "@mui/material";
import AllItems from "../AllItems";
import Alert from "../Alert";



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

type AddItemToCollectionProps = {
  open: boolean;
};

function AddItemToCollection(props: AddItemToCollectionProps) {
  const { open } = props;
  const dispatch = useDispatch();


  //states for form data
  const [Name, setName] = React.useState('');
  const [Description, setDescription] = React.useState('');
  const [Catagory, setCatagory] = React.useState('');
  const [Price, setPrice] = React.useState('');
  const [Quantity, setQuantity] = React.useState('');
  const [Discount, setDiscount] = React.useState('');
  const [Company, setCompany] = React.useState('');
  const [Review, setReview] = React.useState('');
  const [Img, setImg] = React.useState('');
  const [fieldWidth, setfieldWidth] = React.useState("40ch");
  const [AddItemAlert,setAddItemAlert] = React.useState(false);

  React.useEffect(() => {
    open ? setfieldWidth("40ch") : setfieldWidth("50ch")
    dispatch(setIsdelete(false));
    dispatch(setIsUpdate(false));
  
  }, [open,dispatch])

  const previewItem: Item = {
    id: nanoid(),
    name: Name,
    description: Description,
    catagory: Catagory,
    price: Price,
    quantity: Quantity,
    isAvailable: true,
    discount: Discount,
    company: Company,
    reviews: Review,
    img: Img
  };
  const prevItem: Item[] = [];
  prevItem.push(previewItem);

  // console.log(fieldWidth);
  function additionofItem() {
 


    const newItem: Item = {
      id: nanoid(),
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



    dispatch(AddItem(newItem));
    setAddItemAlert(true);
    setTimeout(() => setAddItemAlert(false), 3000);

    setName('');
    setDescription('');
    setCatagory('');
    setPrice('');
    setQuantity('');
    setDiscount('');
    setCompany('');
    setReview('');
    setImg('');

  }


  return (
    <>
          {AddItemAlert && <Alert Description={"Item Added Successfully"}/>}

      <div className="ParentContainer">
        <div className="container">
          <div>

            <h1>Add Item Details</h1>
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
            <Button variant="contained" endIcon={<SendIcon />} onClick={additionofItem}>
              Add item
            </Button>
          </div>

        </div>
        <div className="PreviewContainer">
          <h1> Preview </h1>
          <div>
          <AllItems items={prevItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItemToCollection;
