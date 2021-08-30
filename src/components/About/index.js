import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import utils from 'src/utils';

import './about.scss';

const teamList = utils[1].teamList;

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h2 className="about-title">Le projet</h2>
      <section className="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.
      </section>
      <h2 className="about-title">L'équipe</h2>
      <section className="about-section">
        {teamList.map((teamMember) => (
          <div className="about-profil" key={teamMember.id}>
            <article className="about-profil-article">
              <img className="about-profil-image" src={teamMember.image[0]} alt="" />
              <h4 className="about-profil-name">{teamMember.name}</h4>
              <h5 className="about-profil-describe">{teamMember.describe}</h5>
              <a href={teamMember.contact[0]} className="about-profil-link">
                <img className="about-profil-image" src={teamMember.image[1]} alt="git-profile" />
              </a>
              <a href={teamMember.contact[1]} className="about-profil-link">
                <img className="about-profil-image" src={teamMember.image[2]} alt="twitter-profile" />
              </a>
              <a href={teamMember.contact[2]} className="about-profil-link">
                <img className="about-profil-image" src={teamMember.image[3]} alt="linkedin-profile" />
              </a>
            </article>
          </div>
        ))}
      </section>
    </div>
    <Footer />
  </>
);

export default About;
