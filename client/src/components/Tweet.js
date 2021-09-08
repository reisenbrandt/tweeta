import React from 'react'
import { Card } from 'react-bootstrap'
import RelativeTime from './RelativeTime';

function Tweet(props) {
  const { User, content, createdAt } = props.tweet;
  return (
    <Card className="mb-3">
      <Card.Header>{User.username}</Card.Header>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <RelativeTime time={createdAt} />
      </Card.Footer>
    </Card>
  )
}

export default Tweet
