import React from 'react';
import Header from '../Header';
import ImageSet from '../../Molecules/ImageSet';
import Typography from '../../Atoms/Typography';
import hero from '../../../assets/images/hero.webp';
import {
  HeroContainer,
  HeroGrid,
  Title,
  Description,
} from './styles';
import { colors } from '../../../styles/variables';

const title = 'Easily create or join a local nanny share with Hapu';
const desc = 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,affordable solutions in childcare.';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroGrid>
        <Header />
        <ImageSet
          src={hero}
          alt=""
          gradient="linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%)"
          mix="overlay"
        />
        <Title>
          <Typography
            type="heading1"
            fontColor={colors.white}
            fontWeight="500"
            textAlign="center"
          >
            {title}
          </Typography>
        </Title>
        <Description>
          <Typography
            type="body"
            fontColor={colors.white}
            fontWeight="400"
          >
            {desc}
          </Typography>
        </Description>
      </HeroGrid>
    </HeroContainer>
  );
}
