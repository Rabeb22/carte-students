import React from 'react'
import Child from '../child/Child'


const Parent = ({st}) => {
    return (
        <div style={{backgroundColor:"red", padding:'50px', border:'2px solid black'}}>
            <Child  rabeb={st} />
        </div>
    )
}

export default Parent
