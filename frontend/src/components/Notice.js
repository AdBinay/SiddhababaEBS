import React from 'react'
import { Card } from 'react-bootstrap'

export default function Notice({ notice }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/notice/${notice._id}`} >
            <Card.Img src={notice.image}></Card.Img>
        </a>

        <Card.Body>
            <a href={`/notice/${notice._id}`} >
                <Card.Title as= "div">
                    <strong>{ notice.title}</strong>
                </Card.Title>
            </a>

            <Card.Text as= "div">
                    <strong>{ notice.description}</strong>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
