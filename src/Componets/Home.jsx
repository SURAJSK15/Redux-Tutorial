import React from "react";
import img1 from "../Images/iphone.png";
import img2 from "../Images/redmi.png";

const Home = () => {

    return (
        <>
        <div className="mobile-section">
            <h2>Mobile App Store</h2>

            <div className="mobile-gallery">
                <div className="mobile-card">
                    <div className="mobile-img">
                        <img src={img1} className="img-fluid" />
                    </div>

                    <div className="mobile-content">
                        <h4>Iphone 14pro</h4>
                        <h5></h5>
                        <h6>20,000</h6>
                        <div className="add-cart-btn">
                            <button className="main-btn">Add To cart</button>
                        </div>
                    </div>
                </div>

                <div className="mobile-card">
                    <div className="mobile-img">
                        <img src={img2} className="img-fluid" />
                    </div>

                    <div className="mobile-content">
                        <h4>Iphone 14pro</h4>
                        <h5></h5>
                        <h6>20,000</h6>
                        <div className="add-cart-btn">
                            <button className="main-btn">Add To cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}


export default Home;