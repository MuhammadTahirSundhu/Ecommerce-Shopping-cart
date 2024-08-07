import { useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import SwipeSlide from '../SwipeSlideItems';
import { useAllCatagoriesItems } from '../customHooks';
function ItemCatagories() {


    const items = useSelector((state: RootState) => state.items.items);
    const [uniqueArr, setUniqueArr] = useState<any[]>([]);
    const categoriesItems = useAllCatagoriesItems();

    useEffect(() => {
        setUniqueArr(categoriesItems); 
    }, [items])



    return (
        <>
            <div className="catagoriesContainer">
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