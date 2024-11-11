import React, { useContext } from 'react'
import { contextdata } from './HomeComponent'

import productdata from '../loaders/curcartdata'



export const CardComponent = ({data}) => {

    let tempval={};
    const {cardcount,setcardCount}=useContext(contextdata)
    
    function remvebtnstatus(id)
    {
        let val=[...cardcount]
        val=val.filter((element)=>element.id===id)
        // console.log("status val:",val)
        return val[0].removebtn
    }

    function singlecountstatus(id)
    {
        let val=[...cardcount]
        val=val.filter((element)=>element.id===id)
        return val[0].count
    }

    const addelementtocart=(id)=>{
        
        let values=[...cardcount];
        values=values.map((element)=>{
            if(element.id===id){
                element.count+=1;
                element.removebtn=true;
                return element;
            }else{
                return element
            }

        })
        
        productdata.productdata=[...values];
        setcardCount(values);
        console.log(values,productdata.productdata)
    }
    
    const removeelementtocart=(id)=>{
        
        let values=[...cardcount];
        values=values.map((element)=>{
            if(element.id===id && element.count>0){
                element.count-=1;
                element.removebtn=element.count===0?false:true
                return element;
            }else{
                return element
            }

        })
        
        setcardCount(values);
        console.log(values)
    }

    const cardsetup=(element)=>
        {
            return(
            <div key={element.id} className="col mb-5">
                    <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute cardapperance" >Sale</div>
                        <img className="card-img-top imageclass" src={element.image} alt="..."/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{element.title}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>

                                {/* <span className="text-muted text-decoration-line-through">{element.price}</span> */}

                                <span className="text-muted">Price:{element.price}$</span>
    
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                             onClick={()=>{addelementtocart(element.id)}}>Add to cart</a>
                            </div>
        

                            <div className = {`removebtn${remvebtnstatus(element.id)}`}>
                                <a className='removebtnelement' onClick={()=>{removeelementtocart(element.id)}}>Remove</a>
                                <div className='countext'>Count: {`${singlecountstatus(element.id)}`}</div>
                            </div>
                        </div>
                    </div>
            </div>
           
            )
            
    }
    const cards=data.map((e,index)=>{return cardsetup(e)})
    
    return(
        
        <section className='py-5'>
            <div className='container px-4 px-lg-5 mt-5'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    {cards}
                </div>
            </div>
        </section>
    )
}
