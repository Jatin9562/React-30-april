import React, { Component } from 'react'
import './Card.css'


export class CardComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>

                <div data-testid='card' className={this.props.cardClass} style={{ backgroundColor: this.props.cardColor }}>{this.props.cardText}</div>
            </>
        )
    }
}

export default CardComponent
