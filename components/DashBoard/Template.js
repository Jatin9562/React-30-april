import React, { Component } from 'react'
import Card from '../Generic/Card/CardComponent'
import './CSS/CardGrid.css'


export class Template extends Component {

    cardArray = [
        { key: "k1", cardClass: 'grid1', cardColor: 'rgb(67, 104, 86)', cardText: "Your limitation it's only your imagination.", },
        { key: "k2", cardClass: 'grid2',  cardColor: 'rgb(47, 55, 120)', cardText: "Great things never come from comfort zones..", },
        { key: "k3", cardClass: "grid3", cardColor: 'rgb(232, 157, 200)', cardText: "Dream it. Wish it. Do it.", },
        { key: "k4", cardClass: "grid4", cardColor: 'rgb(142, 148, 146)', cardText: "Stay Focused.", },
    ]



    render() {
        return (

            <div className="grid-main">               
                    {
                        this.cardArray.map(card => {
                            return <Card key={card.key} cardClass={card.cardClass} cardText={card.cardText} cardColor={card.cardColor} />
                        })
                    }
                
            </div>
        )
    }
}

export default Template
