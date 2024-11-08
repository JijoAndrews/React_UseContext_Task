import React, { createContext, useContext, useEffect, useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { CardComponent } from './CardComponent';
import { NavbarComponent } from './NavbarComponent';
import { Footercomponent } from './Footercomponent';


export const contextdata =createContext();

export const HomeComponent = () => {

    const[cardcount,setcardCount]=useState([
        {id:1,count:0,removebtn:false},
        {id:2,count:0,removebtn:false},
        {id:3,count:0,removebtn:false},
        {id:4,count:0,removebtn:false},
        {id:5,count:0,removebtn:false},
        {id:6,count:0,removebtn:false},
        {id:7,count:0,removebtn:false},
        {id:8,count:0,removebtn:false},
        {id:9,count:0,removebtn:false},
        {id:10,count:0,removebtn:false},
    ])

    const productdata=useLoaderData();
    const spliteddata=[...productdata.products];

    useEffect(()=>{console.log("cardcount:",cardcount)},[cardcount])

    // const cardsetup=(element)=>
    // {
    //     return(
    //     <div key={element.id} className="col mb-5">
    //             <div className="card h-100">
    //                 <div className="badge bg-dark text-white position-absolute cardapperance" >Sale</div>
    //                 <img className="card-img-top imageclass" src={element.image} alt="..."/>
    //                 <div className="card-body p-4">
    //                     <div className="text-center">
    //                         <h5 className="fw-bolder">{element.title}</h5>
    //                         <div className="d-flex justify-content-center small text-warning mb-2">
    //                             <div className="bi-star-fill"></div>
    //                             <div className="bi-star-fill"></div>
    //                             <div className="bi-star-fill"></div>
    //                             <div className="bi-star-fill"></div>
    //                             <div className="bi-star-fill"></div>
    //                         </div>
    //                         {/* <span className="text-muted text-decoration-line-through">{element.price}</span> */}
    //                         <span className="text-muted">Price:{element.price}$</span>

    //                     </div>
    //                 </div>
    //                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    //                     <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
    //                     </div>
    //                 </div>
    //             </div>
    //     </div>
       
    //     )
        
    // }

    // const cards=spliteddata.map((e,index)=>{return cardsetup(e)})

  return (
    <div className='shopcontainer'>
        <contextdata.Provider value={{cardcount,setcardCount}}>
        <NavbarComponent/>
        <CardComponent data={spliteddata}/>
        </contextdata.Provider>
        <Footercomponent/>
    </div>
    )
}
