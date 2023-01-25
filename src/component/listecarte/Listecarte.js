import React from 'react'
import { Carte } from '../carte/Carte'
import './listecarte.css'


export const Listecarte = ({lis,hello}) => {
    return (
        <div className="ligne">
           {lis.map(el=>
            
            <Carte key={el.id} el={el} hello={hello}/>
            )} 
        </div>
    )
}
