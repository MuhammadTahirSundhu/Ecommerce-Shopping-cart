import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddItem, setIsdelete, setIsUpdate } from '../../features/itemSlice';
import { RootState } from '../../store/store';
import { nanoid } from '@reduxjs/toolkit';
import SwipeSlide from '../SwipeSlideItems';

function ItemCatagories() {


    const items = useSelector((state: RootState) => state.items.items);
    const [uniqueArr, setUniqueArr] = useState<any[]>([]);

    function getAllCatagoriesItems() {
        const arr: any[] = [];
        const uniqueCategories = items.map(item => item.catagory).filter((value, index, self) => self.indexOf(value) === index);
        uniqueCategories.forEach((catagory) => {
            const tempArr: any[] = items.filter(item => item.catagory == catagory);
            arr.push(tempArr);
        })

        setUniqueArr(arr);
    }

    useEffect(() => {
        getAllCatagoriesItems();
    }, [items])



    return (
        <>
            <div className="catagoriesContainer">
                <h1>Catagories</h1>
                {uniqueArr.map((arr, index) => (
                    <div className="eachCatagory" key={index}>
                       <h2>{arr[0].catagory.toUpperCase()}</h2>
                        <SwipeSlide items={arr}/>
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default ItemCatagories