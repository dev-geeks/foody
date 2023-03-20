import React,{useState} from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import "./Restaurant.css"
import NavBar from "./NavBar";

const uniqueList = [ ...new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    })
)];
console.log(uniqueList);

const Restaurant = () =>{

    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) =>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        })
        setmenuData(updatedList);
    }

    return(<>
        <NavBar filterItem={filterItem} menuList={menuList}/>
        <MenuCard  menuData={menuData} />
    </>);
}

export default Restaurant;