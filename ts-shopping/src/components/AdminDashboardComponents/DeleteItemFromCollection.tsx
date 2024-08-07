import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsdelete, setIsUpdate } from '../../features/itemSlice';
import { RootState } from '../../store/store';
import './AddItemToCollection.css'
import AllItems from '../AllItems';



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AddItem , setIsdelete, setIsUpdate } from '../features/itemSlice';
// import { RootState } from '../store/store';
// import { nanoid } from '@reduxjs/toolkit';

// interface Item {
//   id: string;
//   name: string;
//   description: string;
//   catagory:string;
//   price: number;
//   quantity: number;
//   isAvailable: boolean;
//   discount: string;
//   company:string;
//   reviews?: number;
//   img:string;
// }

// function AdminDashBoard() {
//   const dispatch = useDispatch();
//   const items = useSelector((state: RootState) => state.items.items);
//   // const isdelete = useSelector((state:RootState)=>state.items.isdelete);

//   function addItem() {
//     dispatch(setIsdelete(false));
//     dispatch(setIsUpdate(false));

//     const newItem: Item = {
//       id: nanoid(),
//       name: 'Shoes',
//       description: 'Adidas is the best shoes compnay in the world right now you should try it oncde and if you will not satisfy the company will pay you back!.',
//       catagory:'shoes',
//       price: 5500,
//       quantity: 100,
//       isAvailable: true,
//       discount: '10',
//       company:"Addidas",
//       reviews: 5,
//       img:"../assets/shoes.jpg"
//     };
//     dispatch(AddItem(newItem));
//   }

//   function deleteItem(){
//     dispatch(setIsUpdate(false));
//     dispatch(setIsdelete(true));
//   }

//   function displayItems() {
//     console.log('all items are: ', items);
//   }

//   function update(){
//     dispatch(setIsUpdate(true));
//     dispatch(setIsdelete(false));
//   }
//   return (
//     <>
//       <button onClick={addItem}>Add</button>
//       <button onClick={deleteItem}>delete</button>
//       <button type="button" onClick={displayItems}>Display</button>
//       <button onClick={update}>Update</button>
//     </>
//   );
// }

// export default AdminDashBoard;



function DeleteItemFromCollection() {
      const dispatch = useDispatch();
      const items = useSelector((state:RootState)=>state.items.items);
        useEffect(()=>{
            dispatch(setIsUpdate(false));
            dispatch(setIsdelete(true));            
        },[])
  return (
    <>
    <div className="deleteContainer">
     <AllItems items={items}/>
    </div>
    </>
  )
}

export default DeleteItemFromCollection