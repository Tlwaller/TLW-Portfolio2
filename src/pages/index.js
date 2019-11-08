import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import sf from '../Images/sf.png';
import cq from '../Images/cq.png'
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About me
            <br />
          </h2>
          <p>
            I am a passionate programmer and web designer.
            <br />
            The things I enjoy most in life are creating beautiful websites, solving complex 
            <br />
            programming problems, skateboarding and playing video games.
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={sf} alt="" />
        </div>
        <div className="content">
          <h2>
            Spot Fiend
          </h2>
            <br />
          <h2>
            Find local skate spots
          </h2>
          <p>
            A personal project which was completed in two weeks and served as a fantastic opportunity
            to learn new technologies on my own such as Sass for styling and a few Google API's including
            Google Maps and Geocoding.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={cq} alt="" />
        </div>
        <div className="content">
          <h2>
            Concert Quest
          </h2>
            <br />
          <h2>
            Track your favorite artists' shows
          </h2>
          <p>
            A project completed by two other teammates and myself in a matter of two weeks. Many issues arose as we were using
            a fairly new API, but were overcome in a timely manner.
          </p>
        </div>
      </section>
      <section className="spotlight">
      </section>
    </section>
  </Layout>
);

export default IndexPage;