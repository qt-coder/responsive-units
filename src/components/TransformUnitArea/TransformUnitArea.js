import React, {useState} from 'react'

function TransformUnitArea({text}) {

    const [currValue, setCurrValue] = useState(0)

    return (
        <div className='TransformUnitArea'>
            <input text={text} value={currValue} onChange={(e)=>{setCurrValue(e.target.value)}} type='number' data-testid='inputField'/>
            <h2>{currValue / 16}rem</h2>
        </div>
    )
}

export default TransformUnitArea
