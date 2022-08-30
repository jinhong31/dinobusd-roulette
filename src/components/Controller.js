import React, { Component } from 'react';
// import '../components/Cell.css';
class Controller extends Component {
    constructor() {
        super();
        this.senddata = this.senddata.bind(this);
    }
    state = {
        cell_data: 0,
        cell_key: 0,
        cell_id: "",
        cell_class: "",
        cell_num: 0,
        cell_type: 0
    }
    componentDidMount() {
        this.setState((prevstate, props) => {
            return {
                cell_data: this.props.cell_data,
                cell_key: this.props.Key,
                cell_id: this.props.cell_id,
                cell_class: this.props.cell_class,
                cell_num: this.props.cell_num,
                cell_type: this.props.cell_type
                // hoverd:"Yes"
            }

        })
    }
    senddata = () => {
        this.props.getdata(this.state);
    }

    render() {
        return (
            <div className={this.props.cell_class} key={this.props.Key} id={this.props.cell_id} onClick={this.senddata} >
                <h4>{this.props.cell_data}</h4>
            </div>
        );
    }
}

export default Controller;