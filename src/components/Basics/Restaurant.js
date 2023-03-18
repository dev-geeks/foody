import React,{useState} from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import "./Restaurant.css"
const Restaurant = () =>{

    const [menuData, setmenuData] = useState(Menu);
    console.log(Menu);

    return(<>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item">Breakfast</button>
                <button className="btn-group__item">Lunch</button>
                <button className="btn-group__item">Evening</button>
                <button className="btn-group__item">Dinner</button>
                <button className="btn-group__item">All</button>
            </div>
        </nav>
        <MenuCard  menuData={menuData} />
    </>);
}

export default Restaurant;