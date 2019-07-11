import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaIntercom } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail/>,
          title: 'Free Cocktails',
          info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, omnis?'
        },
        {
          icon: <FaHiking/>,
          title: 'Endless Hiking',
          info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, omnis?'
        },
        {
          icon: <FaShuttleVan/>,
          title: 'Free Shuttle',
          info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, omnis?'
        },
        {
          icon: <FaBeer/>,
          title: 'Strongest Beer',
          info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, omnis?'
        }
      ]
    }
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return(
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services;
