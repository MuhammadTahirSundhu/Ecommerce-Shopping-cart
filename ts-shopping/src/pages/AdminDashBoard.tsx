import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../features/itemSlice';
import { RootState } from '../store/store';
import { nanoid } from '@reduxjs/toolkit';

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  discount: string;
  company:string;
  reviews?: number;
}

function AdminDashBoard() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  function addItem() {
    const newItem: Item = {
      id: nanoid(),
      name: 'Shoes',
      description: 'Adidas is the best shoes compnay in the world right now you should try it oncde and if you will not satisfy the company will pay you back!.',
      price: 5500,
      quantity: 100,
      isAvailable: true,
      discount: '10',
      company:"Addidas",
      reviews: 5,
    };
    dispatch(AddItem(newItem));
  }

  function deleteItem(){

  }

  function displayItems() {
    console.log('all items are: ', items);
  }

  return (
    <>
      <button onClick={addItem}>Add</button>
      <button onClick={deleteItem}>delete</button>
      <button type="button" onClick={displayItems}>Display</button>

    </>
  );
}

export default AdminDashBoard;
