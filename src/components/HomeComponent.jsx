import React, { createContext,useEffect,useState} from 'react'
import { Outlet, useLoaderData} from 'react-router-dom'
import { CardComponent } from './CardComponent';
import { NavbarComponent } from './NavbarComponent';
import { Footercomponent } from './Footercomponent';
import { CartPageComponent } from './CartPageComponent';
import { CartNavBarComponent } from './CartNavBarComponent';
import { JustCartPageComponet } from './JustCartPageComponet';


export const contextdata =createContext();


export const HomeComponent = () => {

    const[cardcount,setcardCount]=useState([
        {id:1,count:1,removebtn:false},
        {id:2,count:1,removebtn:false},
        {id:3,count:1,removebtn:false},
        {id:4,count:1,removebtn:false},
        {id:5,count:1,removebtn:false},
        {id:6,count:1,removebtn:false},
        {id:7,count:1,removebtn:false},
        {id:8,count:1,removebtn:false},
        {id:9,count:1,removebtn:false},
        {id:10,count:1,removebtn:false},
    ])



    const productdata=useLoaderData();
    const spliteddata=[...productdata.products];

    useEffect(()=>{},[cardcount])

  return (
    <div className='shopcontainer'>
    <contextdata.Provider value={{cardcount,setcardCount}}>
    <CartNavBarComponent/>
    <JustCartPageComponet/>
    <Footercomponent/>
    </contextdata.Provider>
    </div>
    )
}
