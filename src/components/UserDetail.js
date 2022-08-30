import React from 'react';
// import './Userdetail.css';
const Detail = (props) => {
    return (
        <>
            <div className="main-content">
                <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                    <div className="container-fluid">

                        <div className="header-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="card card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase  mb-0">Balace</h6>
                                                    <span className="h4 font-weight-bold mb-0">{Number(props.balance).toFixed(4)} BUSD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase  mb-0">Total Buy</h6>
                                                    <span className="h4 font-weight-bold mb-0">{props.tbuy} BUSD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-sm-3">
                                    <div className="card card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase  mb-0">Status</h6>
                                                    <span className="h4 font-weight-bold mb-0">Live</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h6 className="card-title text-uppercase  mb-0">Winner</h6>
                                                    <span className="h4 font-weight-bold mb-0">{props.winer} BUSD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
