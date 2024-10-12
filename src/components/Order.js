import React, { Component } from 'react'
import { FaMinusCircle } from "react-icons/fa";

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <FaMinusCircle className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default Order