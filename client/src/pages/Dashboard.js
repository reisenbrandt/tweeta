import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Tweet from '../components/Tweet'

function Dashboard() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('/api/v1/tweets')
      .then(res => res.json())
      .then(data => {
        setTweets(data)
      })
  }, [])

  return (
    <Container>
      <NavBar />
      {tweets.map((tweet) => {
        return (
          <Tweet key={tweet.id} tweet={tweet} />
        )
      })}
    </Container>
  )
}

export default Dashboard