import React from 'react'
import TransformUnitArea from '../TransformUnitArea/TransformUnitArea'

function Card() {
    return (
        <div id='card'>
            <TransformUnitArea text='Text'/>
            <TransformUnitArea text='Line Height'/>
            <TransformUnitArea text='Letter Spacing'/>
            <TransformUnitArea text='Width'/>
            <TransformUnitArea text='Height'/>
            <TransformUnitArea text='Border radius'/>
        </div>
    )
}

export default Card
