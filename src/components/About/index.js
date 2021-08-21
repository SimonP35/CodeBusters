import React from 'react';

import { Link } from 'react-router-dom';
import utils from 'src/utils';

import './about.scss';

const people = utils[1].fivePeople;
// console.log(people);
const About = () => (
  <>
    <div className="about-container">
      <h2 className="about-title">A PROPOS</h2>
      <h3 className="about-subtitle">LE PROJET</h3>
      <section className="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </section>
      <h3 className="about-subtitle">L'EQUIPE</h3>
      {people.map((fivep) => (
        <div className="about-profil" key={fivep.id}>
          <article className="about-profil-article">
            <img className="about-profil-image" src={fivep.image[0]} alt="" />
            <h4 className="about-profil-name">{fivep.name}</h4>
            <h5 className="about-profil-describe">{fivep.describe}</h5>
            <Link className="about-profil-link" to="/">
              <img className="about-profil-image" src={fivep.image[1]} alt="" />
            </Link>
            <Link className="about-profil-link" to="/">
              <img className="about-profil-image" src={fivep.image[2]} alt="" />
            </Link>
            <Link className="about-profil-link" to="/">
              <img className="about-profil-image" src={fivep.image[3]} alt="" />
            </Link>
          </article>
        </div>
      ))}
    </div>
  </>
);

export default About;
