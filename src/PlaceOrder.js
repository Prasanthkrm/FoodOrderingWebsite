import React from 'react'
import './PlaceOrder.css'
import { useLocation } from 'react-router-dom';


export const PlaceOrder = () => {
  const location = useLocation();
  const total = location.state?.total;
  let fee =total/10;
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-6 mt-5">
              <h1 className='fs-3 mb-4 text-center'>Delivery Information</h1>
                <div className="row g-2">
                  <div className="col-sm-6">
                    <input type="text" class="form-control" id="exampleInput" placeholder="First Name"/>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" class="form-control" id="exampleInput" placeholder="Last Name"/>
                  </div>
                  <div className="col-sm-12 mt-3">
                    <input type="email" class="form-control" id="exampleInput" placeholder="Email Address"/>
                  </div>
                  <div className="col-12 mt-3">
                    <input type="text" class="form-control" id="exampleInput" placeholder="Street"/>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <input type="text" class="form-control" id="exampleInput" placeholder="city"/>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <input type="text" class="form-control" id="exampleInput" placeholder="State"/>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <input type="text" class="form-control" id="exampleInput" placeholder="Country"/>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <input type="number" class="form-control" id="exampleInput" placeholder="Zip Code"/>
                  </div>
                  <div className="col-sm-12 mt-3">
                    <input type="number" class="form-control" id="exampleInput" placeholder="Phone Number"/>
                  </div>
                </div>
            </div>
            <div className=" col-4 offset-2 mt-5 ">
              <div className="row ">
              <h1 className='fs-3 mb-4 text-center '>Cart Total</h1>
                <div className="col-sm-6 text-md-start border-bottom border-3 mb-3 fs-4">Sub Total</div>
                <div className="col-sm-6 text-end text-md-start border-bottom border-3 mb-3 fs-4 text-sm-end">{total}</div>  
                <div className="col-sm-6 text-md-start border-bottom border-3 mb-3 fs-4">Delivery Fee</div>
                <div className="col-sm-6 text-end text-md-start border-bottom border-3 mb-3 fs-4 text-sm-end">{fee}</div>  
                <div className="col-sm-6 text-md-start border-bottom border-3 mb-3 fs-4">Total</div>
                <div className="col-sm-6 text-end text-md-start border-bottom border-3 mb-3 fs-4 text-sm-end">{fee+total}</div> 
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
