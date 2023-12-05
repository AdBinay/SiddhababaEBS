import React from 'react'
import notices from '../notice'
import {Row, Col} from 'react-bootstrap'
import Notice  from '../components/Notice'

function HomeScreen() {
  return (
    <div>
        <h1>Latest Notice</h1> <hr/>
        <Row>
            {notices.map(notice => (
                <Col key={notice._id} sm={12} md={6} lg={4} xl={3}>
                    <h3>{notice.title}</h3>
                    <Notice notice={notice}/>
                </Col>
            ) )}
        </Row>
    </div>
  )
}

export default HomeScreen