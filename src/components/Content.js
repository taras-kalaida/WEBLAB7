import React from "react";
import { Component } from "react";


class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="inputData">
                <h2>Введені дані</h2>
                <h3>{`П.І.Б.: `}<span>{this.props.name}</span></h3>
                <h3>{`Варіант: `}<span>{this.props.variant}</span></h3>
                <h3>{`Група: `}<span>{this.props.group}</span></h3>
                <h3>{`Телефон: `}<span>{this.props.tel}</span></h3>
                <h3>{`ID-card: `}<span>{this.props.card}</span></h3>
            </div>
        )
    }
}


export default Content;