import React, { useContext } from 'react'
import { contextdata } from './HomeComponent'
import { Coverimagecomponent } from './Coverimagecomponent'
import { Link, useNavigate } from 'react-router-dom'


export const NavbarComponent = () => {

    const {cardcount,setcardCount}=useContext(contextdata)

    function totalcountstatus()
    {
        const val=[...cardcount]
        const intialval=0
        const totalsum=val.map((e)=>e.count);
        const fv=totalsum.reduce((a,c)=>a+c,intialval,);
        return fv
    }

    

  return (
    <>
     <div className='topsection'>
        <nav className="navbar navbar-expand-sm navbar-light bg-light" aria-label="Third navbar example">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#">Shopify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                    <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                    <Link to='/' className='nav-link active' aria-current="page">Hopme</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">All</a></li>
                        <li><a className="dropdown-item" href="#">Popular Items</a></li>
                        <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                    </ul>

                    </li>
                </ul>

                <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{totalcountstatus()}</span>
                            </button>
                </form>

                </div>
            </div>
        </nav> 
    </div>
    <Coverimagecomponent/>
    </>
   
)
}
