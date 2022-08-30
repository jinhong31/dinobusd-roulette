import React, { Component } from "react";
// import '../components/Table.css'
import Cell from "./Cell";
import Controller from "./Controller";
class Table extends Component {
    constructor() {
        super();
        this.datahandler = this.datahandler.bind(this);
        this.controllerdatahandle = this.controllerdatahandle.bind(this);
    }
    state = {
        redscheme: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
        hoverRed: "nhover"
    };

    datahandler = (celldata) => {
        this.props.getbets(celldata);
    }
    controllerdatahandle = (controllerdata) => {
        this.props.getbets(controllerdata);
    }
    render() {
        return (
            <div className="tabel-container">

                <div className="grid-container">
                    {/* <div className="item0">0</div> */}
                    <Controller cell_class={`cell controller-zero item0`} cell_data="0" Key="controller-0" cell_num={0} cell_type={5} getdata={this.controllerdatahandle}></Controller>
                    {
                        [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].map((item) => {
                            if (this.state.redscheme.includes(item)) {
                                // return <div key={`item${item}`} id='redCells'><span className={`cell cell-red`}>{item}</span></div>
                                return <Cell cell_class={`cell cell-red`} cell_data={item} key={`item${item}`} cell_id={this.state.hoverRed === "hover" ? "redcells" : "simple"} getdata={this.datahandler} />
                            }
                            else {
                                // return <div key={`item${item}`} id="blackcells"><span className={`cell cell-green `}>{item}</span></div>
                                return <Cell cell_class={`cell cell-green`} cell_data={item} key={`item${item}`} cell_id='blackcells' getdata={this.datahandler} />
                            }

                        })
                    }
                    {/* <div className="controller1">2 to 1</div> */}
                    <Controller cell_class={`cell controller`} cell_data="2 to 1" Key="controller-3" cell_num={3} cell_type={1} getdata={this.controllerdatahandle}></Controller>
                    {
                        [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].map((item) => {
                            if (this.state.redscheme.includes(item)) {
                                // return <div className={`item${item}`}><span className={`cell cell-red`}>{item}</span></div>
                                return <Cell cell_class={`cell cell-red`} cell_data={item} key={`item${item}`} cell_id={this.state.hoverRed === "hover" ? "redcells" : "simple"} getdata={this.datahandler} />
                            }
                            else {
                                // return <div className={`item${item}`}><span className={`cell cell-green `}>{item}</span></div>
                                return <Cell cell_class={`cell cell-green`} cell_data={item} key={`item${item}`} cell_id='blackcells' getdata={this.datahandler} />
                            }

                        })
                    }
                    {/* <div className="controller">2 to 1</div> */}
                    <Controller cell_class={`cell controller`} cell_data="2 to 1" key="controller-2" cell_num={2} cell_type={1} getdata={this.controllerdatahandle}></Controller>
                    {
                        [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].map((item) => {
                            if (this.state.redscheme.includes(item)) {
                                // return <div className={`item${item}`}><span className={`cell cell-red`}>{item}</span></div>
                                return <Cell cell_class={`cell cell-red`} cell_data={item} key={`item${item}`} cell_id={this.state.hoverRed === "hover" ? "redcells" : "simple"} getdata={this.datahandler} />
                            }
                            else {
                                // return <div className={`item${item}`}><span className={`cell cell-green `}>{item}</span></div>
                                return <Cell cell_class={`cell cell-green`} cell_data={item} key={`item${item}`} cell_id='blackcells' getdata={this.datahandler} />
                            }

                        })
                    }
                    {/* <div className="controller">2 to 1</div> */}
                    <Controller cell_class={`cell controller`} cell_data="2 to 1" Key="controller-1" cell_num={1} cell_type={1} getdata={this.controllerdatahandle}></Controller>

                </div>
                <div className="wrapper">
                    <Controller cell_class={`cell controller`} cell_data="1st 12" Key="controller-4" id="contr-4" cell_num={0} cell_type={2} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="2nd 12" Key="controller-5" id="contr-5" cell_num={1} cell_type={2} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="3rd 12" Key="controller-6" id="contr-6" cell_num={2} cell_type={2} getdata={this.controllerdatahandle}></Controller>
                </div>
                <div className="wrapper2">
                    <Controller cell_class={`cell controller`} cell_data="1 to 18" Key="controller-7" cell_num={0} cell_type={3} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="EVEN" Key="controller-8" cell_num={0} cell_type={4} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="RED" Key="controller-9" cell_num={1} cell_type={0} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="BLACK" Key="controller-10" cell_num={0} cell_type={0} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="ODD" Key="controller-11" cell_num={1} cell_type={4} getdata={this.controllerdatahandle}></Controller>
                    <Controller cell_class={`cell controller`} cell_data="9 to 36" Key="controller-12" cell_num={1} cell_type={3} getdata={this.controllerdatahandle}></Controller>
                </div>
            </div>


        );
    }
}

export default Table;
