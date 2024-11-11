import React, { useContext } from 'react'
import { contextdata } from './HomeComponent'
import { useLoaderData } from 'react-router-dom';
import { NavbarComponent } from './NavbarComponent';
import { CartNavBarComponent } from './CartNavBarComponent';
import { Footercomponent } from './Footercomponent';



export const CartPageComponent = () => {

    const productdata=useLoaderData();
    // const loaderdat=[...productdata];
    const spliteddata=[...productdata.products];

    const {cardcount,setcardCount} = useContext(contextdata)
    
    // const itemsincart=cardcount.filter((element)=>element.count>0).map((e)=>{e.id,e.count})

    console.log("card status:",cardcount);

  return (
    <div className='shopcontainer'>
        {/* <CartNavBarComponent/> */}
        <div className='card'>
            <div className='mycartcontainer'>
                    <div className='iconcontainer'>
                    <div className='testimage'>
                        <svg className="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
                        </div>

                        <div className="headtext"> 
                        <h3>Title.</h3>
                        <h5>categorey.</h5>
                        <p className='lead'>This is a lead paragraph. It stands out from regular paragraphs.</p>
                        <p>starcount.</p>
                        </div>
                    </div>  

                    <div className='countset'>
                


                    <div className="countbox">
                        <div className="headtext"> 
                                <div className='countcontrol'>
                                    <button type="button" className="cusbtn spacer btn btn-light">-</button>
                                    <h1 className='ptext'>10</h1>
                                    <button type="button" className="cusbtn spacer btn btn-light">+</button>
                                </div>
                            </div>

                            <div className="headtext"> 
                                <div className='countcontrol'>
                                    <h4 className='spacer'>10</h4>
                                </div>
                            </div>
                    </div>
                    

                        <div className="headtext"> 
                            <div className='countcontrol'>
                            <button type="button" className="btn btn-light">Remove Item</button>
                            </div>
                        </div>
                        
                        
                    </div>  

            </div>

            <div className='mytotal'>

            <div className="bd-example m-0 border-0"><hr/></div>
                <div className='displayspacetext'>
                    <p>total</p>
                    <p>price</p>
                </div>

                <div className='displayspacetext'>
                    <p>total</p>
                    <p>price</p>
                </div>

                <div className="bd-example m-0 border-0"><hr/></div>
                <div className='displayspacetext'>
                    <p>total</p>
                    <p>price</p>
                </div>
            </div>
        </div>
        {/* <Footercomponent/> */}
    </div>
   
)
}
