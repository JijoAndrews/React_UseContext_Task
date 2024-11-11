import React, { useContext } from 'react'
import { contextdata } from './HomeComponent'
import { useLoaderData } from 'react-router-dom';


export const JustCartPageComponet = () => {
    let tcount=0;
    const productdata=useLoaderData();
    let spliteddata=[...productdata.products];

    const {cardcount,setcardCount} = useContext(contextdata)
    

    function remvebtn(id)
    {
        // let val=[...cardcount]
        // val=val.filter((element)=>element.id!==id)
        // spliteddata=spliteddata.filter((e)=>e.id!==id)
        // setcardCount(val);
        // console.log("status val:",val,spliteddata)

        let values=[...cardcount];
        values=values.map((element)=>{
            if(element.id===id){
                element.count=0;
                element.removebtn=false;
                return element;
            }else{
                return element
            }

        })

        setcardCount(values);
        console.log("removed element:",values);
    }

    function singlecountstatus(id)
    {
        let val=[...cardcount]
        val=val.filter((element)=>element.id===id)
        return val[0].count
    }

    function elementprice(curprice){
        tcount+=curprice;
    //    console.log("tc:",tcount);
        return `$${curprice.toFixed(2)}`;
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
    
    const createcarddata=(element,index)=>
    {
        const test=cardcount[index].count;
          
        return(

            <div className='card' key={index}>
            <div className='mycartcontainer'>
                    <div className='iconcontainer'>
                    <div className='example example-contain'>
                    <img className="card-img-top imageclass" src={element.image} alt="..."/>

                        </div>
    
                        <div className="headtext"> 
                        <h3 className='headingtext'>{element.title}</h3>
                        <h5> {element.category}.</h5>
                        <p className='lead discriptext'>{element.description}</p>
                        <p>starcount.</p>
                        </div>
                    </div>  
    
                    <div className='countset'>
                
    
    
                    <div className="countbox">
                        <div className="headtext"> 
                                <div className='countcontrol'>
                                <i className="bi bi-dash-circle"  onClick={()=>{removeelementtocart(element.id)}}></i>
                                    {/* <button type="button" className="clickbutton" onClick={()=>{removeelementtocart(element.id)}}>{"-"}</button> */}
                                    <h1 className='ptext'>{`${singlecountstatus(element.id)}`}</h1>
                                    <i className="bi bi-plus-circle" onClick={()=>{addelementtocart(element.id)}}></i>
                                    {/* <button type="button" className="clickbutton" onClick={()=>{addelementtocart(element.id)}}>{"+"}</button> */}
                                </div>
                            </div>
    
                            <div className="headtext"> 
                                <div className='countcontrol'>
                                    <h4 className='spacer'>{elementprice(element.price * test)}</h4>

                                </div>
                            </div>
                    </div>
                    
    
                        <div className="headtext"> 
                            <div className='countcontrol'>
                            <button type="button" className="btn btn-light" onClick={()=>{remvebtn(element.id)}}>Remove Item</button>
                            </div>
                        </div>
                        
                        
                    </div>  
    
            </div>
    
        </div>
        )
 
    }


    const filteredcards=cardcount.map((e,index)=>{
        if(e.count>0)
        {
            return createcarddata(spliteddata[index],index);
        }
    })



    const Totalamoutcard=()=>{

        return(

             <div className='mytotal'>
    
                <div className="bd-example m-0 border-0"><hr/></div>
                <div className='displayspacetext'>
                    <p>subtotal</p>
                    <p>${tcount.toFixed(2)}</p>
                </div>
    
                <div className='displayspacetext'>
                    <p>shipping</p>
                    <p>Free</p>
                </div>
    
                <div className="bd-example m-0 border-0"><hr/></div>
                <div className='displayspacetext'>
                    <h1>Total</h1>
                    <h1>${tcount.toFixed(2)}</h1>
                </div>
            </div> 
        )
    }

  return (
    <div className='shopcontainer'>
        {filteredcards}
        <Totalamoutcard/>
    </div>
   
)
}
