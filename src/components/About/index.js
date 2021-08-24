import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import utils from 'src/utils';

import './about.scss';

const people = utils[1].fivePeople;
console.log(people);
const About = () => (
  <>
    <Header />
    <div className="about-container">
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
      {people.map((fivep) => (
        <div className="about-profil" key={fivep.id}>
          <article className="about-profil-article">
            <img className="about-profil-image" src={fivep.image[0]} alt="" />
            <h4 className="about-profil-name">{fivep.name}</h4>
            <h5 className="about-profil-describe">{fivep.describe}</h5>
            <a href={fivep.contact[0]} className="about-profil-link">
              <img className="about-profil-image" src={fivep.image[1]} alt="git-profile" />
            </a>
            <a href={fivep.contact[1]} className="about-profil-link">
              <img className="about-profil-image" src={fivep.image[2]} alt="twitter-profile" />
            </a>
            <a href={fivep.contact[2]} className="about-profil-link">
              <img className="about-profil-image" src={fivep.image[3]} alt="linkedin-profile" />
            </a>
          </article>
        </div>
      ))}
    </div>
    <Footer />
  </>
);
// fivep fais référence à five people
export default About;
