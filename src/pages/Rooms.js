import React from 'react'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomsContainer from '../components/RoomsContainer';

import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  )
}

export default Rooms
