import React, { Component } from 'react';
// import '../components/Cell.css';
class Cell extends Component {
    constructor() {
        super();
        this.senddata = this.senddata.bind(this);
    }
    state = {
        cell_data: 0,
        cell_key: 0,
        cell_id: "",
        cell_class: ""
    }
    componentDidMount() {
        this.setState((prevstate, props) => {
            return {
                cell_data: this.props.cell_data,
                cell_key: this.props.cell_key,
                cell_id: this.props.cell_id,
                cell_class: this.props.cell_class,
                bet_type: 5
            }
        })
    }
    senddata = () => {
        this.props.getdata(this.state);

    }
    render() {

        return (

            <div className={this.props.cell_class} key={this.props.cell_key} id={this.props.cell_id} onClick={this.senddata}>
                <span className='data-store'>{this.props.cell_data}</span>
            </div>

        );
    }

}
export default Cell;