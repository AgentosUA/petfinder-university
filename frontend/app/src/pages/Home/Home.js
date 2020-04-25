import React from 'react';
import Wrapper from '../../shared/components/Wrapper/Wrapper';

import SearchBlock from '../../shared/components/SearchBlock/SearchBlock';
import Section from '../../shared/components/Section/Section';
import CircleCard from '../../shared/components/UI/CircleCard/CircleCard';

const Home = () => {
  return (
    <main className="container">
      <SearchBlock />
      <Wrapper>
        <Section title="Досить зволікати, настав час шукати!" flex>
          <CircleCard title="1" text="Зареєструйся на сайті" />
          <CircleCard title="2" text="Створи оголошення" />
          <CircleCard title="3" text="Поверни улюбленця додому :)" />
        </Section>
      </Wrapper>
    </main>
  );
};

export default Home;
