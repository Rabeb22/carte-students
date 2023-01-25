import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Carte = ({el,hello}) => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} style={{ height: '18rem' }}/>
        <Card.Body>
          <Card.Title>{el.nom}</Card.Title>
          <Card.Text>
          {el.course}
          </Card.Text>
          <Button onClick={()=>hello(el.nom)} variant="primary">Greet</Button>
        </Card.Body>
      </Card>
        </div>
    )
}
