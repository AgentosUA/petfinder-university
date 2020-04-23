import React from 'react';
import Wrapper from '../../shared/components/Wrapper/Wrapper';

import SearchBlock from '../../shared/components/SearchBlock/SearchBlock';
import Section from '../../shared/components/Section/Section';

import './About.css'
import logo from '../../images/logo.png';

const About = () => {
  return (
    <main className="container">
      <SearchBlock />
      <Wrapper>
        <Section title="Про нас">
          <div className="center">
            <img src={logo} alt="logo" width="120px" className="about__logo" />
          </div>
          <div className="about__text">
            <p><b>Pet Finder Project</b> - це студентський проект, мета якого є реалізувати централізовану базу даних оголошень про зниклих тварин. <br />
            Проект включає у собі REST API, React App, а також GPS-нашийник на базі Arduino.</p>
          </div>
        </Section>
        <Section subtitle="Список технологій">
          <div className="about__text">
            <h3>Backend:</h3>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>SASS</li>
              <li>HTML5 (template)</li>
              <li>CSS3 (template)</li>
            </ul>
            <h3>Нашийник (в розробці)</h3>
            <ul>
              <li>Arduino</li>
              <li>GPS Module (NEO-7M GPS NEO7MV2)</li>
              <li>C</li>
            </ul>

          </div>
        </Section>
        <Section subtitle="Наша команда">
          <div className="about__text">
            <h3>Розробники</h3>
            <ul>
              <li>Олег Степанюк (Software) - REST API, React App</li>
              <li>Андрій Копер (Hardware) - Нашийник</li>
              <li>Денис Столярчук (Ментор)</li>
              <li>Володимир Шевчик (Ментор)</li>
            </ul>
          </div>
        </Section>
      </Wrapper>
    </main>
  );
};

export default About;
