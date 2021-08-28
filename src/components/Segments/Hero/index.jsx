import React from 'react';
import Header from '../Header';
import ImageSet from '../../Molecules/ImageSet';
import hero from '../../../assets/images/hero.webp';
import {
  HeroContainer,
  HeroGrid,
} from './styles';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroGrid>
        <Header />
        <ImageSet src={hero} alt="" gradient="linear-gradient(159deg, rgba(88,18,172,1) 0%, rgba(159,89,204,1) 100%)" />
      </HeroGrid>
    </HeroContainer>
  );
}
