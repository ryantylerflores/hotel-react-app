import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList'
import { RoomConsumer } from '../context';
import Loading from './Loading';
import Room from './Room';

const RoomsContainer = () => {
  return(
    <RoomConsumer>
      { 
        value => {
          const { loading, sortedRooms, rooms } = value;
          if(loading) {
            return <Loading />
          }

          return (
            <div>
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </div>
          )
        }
      
      }
    </RoomConsumer>
  )
}

export default RoomsContainer;
