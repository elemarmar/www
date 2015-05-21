import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Sizes, Links } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: 'url(assets/img/SLCBackground.png)',
    position: 'relative',
    minHeight: 390,
    color: '#fff'
  },
  container: {
    position: 'relative'
  },
  h2: {
    color: Styles.FONT_COLOR_TICKETS
  },
  p: {
    marginRight: 500
  },
  a: {
    background: 'transparent',
    border: '1px solid #fff',
    borderRadius: 5,
    color: '#fff',
    display: 'inline-block',
    fontSize: 20,
    padding: '10px 35px',
    margin: '25px 0 0 350px',
    textDecoration: 'none'
  },
  img: {
    position: 'absolute',
    top: -150,
    right: 50
  }
});

export default class Tickets extends Component {
  render() {
    return (
      <section id="tickets" style={STYLES.section}>
        <img src="assets/img/robot_withLaser.png" style={STYLES.img}/>
        <div style={STYLES.container}>
          <h2 style={STYLES.h2}>Tickets</h2>
          <p style={STYLES.p}>
          The Golden Ticket. Super Bowl tickets. Backstage passes to T Swizzle. React Rally tickets. High demand, limited supply.
          </p>
          <p style={STYLES.p}>
          Early Bird tickets go on sale soon.
          </p>
          <a href={Links.TICKET_SALES} target="_blank" style={STYLES.a}>Buy Tickets</a>
        </div>
      </section>
    );
  }
}