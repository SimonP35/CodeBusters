import React from 'react';
import Ano from 'src/assets/images/ano.svg';

import './about.scss';

const About = () => (

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
    <div className="about-profil">
      <article className="about-profil-article">
        <img src={Ano} alt="" />
        <p>Simon Product Owner</p>
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
      </article>

      <article className="about-profil-article">
        <img src={Ano} alt="" />
        <p>Sacha Lead Dev Back</p>
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
      </article>

      <article className="about-profil-article">
        <img src={Ano} alt="" />
        <p>Geoffrey Lead Dev Front</p>
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
      </article>

      <article className="about-profil-article">
        <img src={Ano} alt="" />
        <p>Valentin Git Master</p>
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
        <img src={Ano} alt="" />
      </article>

      <article className="about-profil-article">
        <img src={Ano} alt="" />
        <p>Elena Scrum Master</p>
          <img src={Ano} alt="" />
          <img src={Ano} alt="" />
          <img src={Ano} alt="" />
      </article>
    </div>
  </div>
);

export default About;
