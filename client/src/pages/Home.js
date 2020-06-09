import './style.css';
import React from 'react';
import { Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="container">
      <Segment>
        {/* <Image className="img-responsive" src={Chicago} alt="logo" floated='right' /> */}
        <p>
          Cheap Flights and Travel Journal is your first and last stop for getting to your dream destination at the lowest possible price, and then sharing your adventures with those who also dream.
    </p>
        {/* <Image className="img-responsive" src={island} alt="logo" floated='left' /> */}
        <p>
          Check out the over to the Cheap Flights page to find the best prices on flights to your dream destination, or maybe just a weekend getaway.
          
          Arriving home after a getaway and want to tell everyone about it? Hop over to the Travel Journal and share your story!
    </p>
      </Segment>
    </div>
  )
}
export default Home;