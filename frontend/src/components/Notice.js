import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Notice({ notice }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/notices/${notice._id}`} >
            <Card.Img src={notice.image}></Card.Img>
        </Link>

        <Card.Body>
            <Link to={`/notices/${notice._id}`} >
                <Card.Title as= "div">
                    <strong>{ notice.title}</strong>
                </Card.Title>
            </Link>

            <Card.Text as= "div">
                    <strong>{ notice.description}</strong>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
