import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCrad from './MenuCrad'
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category
})),
    "All"];
console.log(uniqueList)

const Resturent = () => {
    const [menuData, SetMenuData] = useState(Menu);
    //yaha jo bhi data hoga wo current daat hoga

    const [menuList, setMenuList] = useState(uniqueList)
    const filterItem = (category) => {
        if (category === "All") {
            SetMenuData(Menu)
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        SetMenuData(updatedList);
        console.log(updatedList);

    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCrad menuData={menuData} />

        </>
    );
};

export default Resturent;
