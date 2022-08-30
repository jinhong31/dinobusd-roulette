import React, { Component } from 'react';
// import './Bets.css';
// import 'bootstrap/dist/css/bootstrap.css';
class Bets extends Component {

    showbet = () => {
        return (
            <>
                <h3>Your Bets</h3>
                <ul>
                    {
                        this.props.userbets.map((eachbet) => {
                            return <li key={eachbet} id="userlist">{`You Bets On ${eachbet}`}</li>
                        })
                    }
                </ul>
            </>
        );
    }

    render() {
        return (
            <div className='container-fluid' id="Userinfo">
                <div className='row'>
                    {
                        this.props.userbets.length > 0 ? this.showbet() : <h1>No Bets Are Placed Yet</h1>
                    }
                    {
                        this.props.userbets.length > 0 ? <button type="button" class="btn btn-warning" onClick={this.props.resetHandler}>Reset </button> : ""
                    }

                </div>
            </div>
        );
    }
}

export default Bets;