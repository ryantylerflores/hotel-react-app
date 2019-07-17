import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.id,
      defaultBcg
    }
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if(!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;
    console.log(breakfast)
    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">Back To Rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            { defaultImg.map((image,index) => {
              return <img key={index} src={image} alt={`image ${index}`}/>
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>
                { description }
              </p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${ price }</h6>
              <h6>size: { size } SQFT</h6>
              <h6>Max Capacity: { capacity > 1 ? `${capacity} People` : `${capacity} Person`}</h6>
              <h6>{ pets ? 'Pets Allowed' : 'No Pets Allowed' }</h6>
              <h6>{ breakfast && 'free breakfast included' }</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            { extras.map((item,index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

export default SingleRoom;
