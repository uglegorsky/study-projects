import React, { Component } from 'react'
import './AddItem.css'

export default class AddItem extends  Component {
    render() {
        return (
            <div className="add-item">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Hello, World')}
                >Add Item</button>
            </div>
        )
    }
}