import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function useAllCatagoriesOnly(){
    const items = useSelector((state: RootState) => state.items.items);
    const uniqueCategories = items.map(item => item.catagory).filter((value, index, self) => self.indexOf(value) === index);    
    return uniqueCategories;
}



export function useAllCatagoriesItems() {
    const items = useSelector((state: RootState) => state.items.items);
    const arr: any[] = [];
    const uniqueCategories =useAllCatagoriesOnly();
    uniqueCategories.forEach((catagory) => {
        const tempArr: any[] = items.filter(item => item.catagory == catagory);
        arr.push(tempArr);
    })
    return arr;
}
