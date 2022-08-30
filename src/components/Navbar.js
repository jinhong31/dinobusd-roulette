import React from "react";
// import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import InfoModel from "./BetsInfoModel";


const Navbar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg">
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <InfoModel />

                        </li>
                        <li className="nav-item">

                            <button className="btn btn-warning btn-lg" onClick={props.btnclick} >
                                {props.btntext}
                            </button>

                        </li>
                        <li className="nav-item">

                            <a href="https://dinobusd.finance"><button className="btn btn-warning btn-lg">Miner</button></a>
                        </li>
                        <li className="nav-item">

                            <a href="https://www.bscscan.com/address/0x5fCAE6A4a062BFBB9BBAF8c14f3a9f833020D683"><button className="btn btn-warning btn-lg">Bscscan</button></a>
                        </li>
                        {
                            props.connectStatus ? (
                                <li className="nav-item" style={{ color: "#fff" }}>

                                    <h6 className="card-title text-uppercase  mb-0">Liquidity</h6>
                                    <span className="h6 font-weight-bold mb-0">{props.liq} BUSD</span>
                                </li>


                            ) : ("")
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
