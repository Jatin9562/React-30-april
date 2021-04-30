import React, { Children } from 'react'
import Card from './CardComponent'

export default{
    title:'Card',
    component:Card
}


const Template = args=><Card {...args}/>

export const CardA = Template.bind({})

CardA.args={
    cardClass:'Cardclass',
    cardColor:'rgb(67, 104, 86)',
    cardText:'Your limitation its only your imagination.'
}




