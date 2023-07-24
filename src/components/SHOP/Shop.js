import React,{useState , useEffect, useContext } from 'react';
//component
import CoinCart from './CoinCart';
//icon 
import { BsSearch } from "react-icons/bs";
//style 
import style from "../../styles/Shop.module.css"
//context
import { backContext } from '../../context/Reducer';
import { DataContext } from '../../context/DataCoinApi';

//SHOP component
const Shop = () => {
    //state
    const [input , newInput] = useState("");
    //context
    const [statee , dispatchh] = useContext(backContext);
    const [data] = useContext(DataContext)
    const keyUpHandeler = event => {
        newInput(event.target.value);
    }
    const newData = data.filter(item=> item.name.toLowerCase().includes(input.toLowerCase()));
    return (
        <div className={style.box}>
            <div className={style.inputdiv}>
                <BsSearch className={style.icon}/>
              <input className={style.input} placeholder='Search' type="text" onKeyUp={keyUpHandeler} />
            </div>
            {newData.map(item => <CoinCart key={item.id} data={item} />)}
        </div>
    );
};

export default React.memo(Shop);