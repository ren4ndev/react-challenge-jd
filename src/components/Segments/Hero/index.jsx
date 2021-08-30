import React from 'react';
import Header from '../Header';
import ImageSet from '../../Molecules/ImageSet';
import Typography from '../../Atoms/Typography';
import LinkText from '../../Atoms/LinkText';
import hero from '../../../assets/images/hero.webp';
import heroMob from '../../../assets/images/hero-mob.webp';
import PlayButton from '../../Atoms/PlayButton';
import {
  HeroContainer,
  HeroGrid,
  Title,
  Description,
  LinkWrapper,
  Downbar,
} from './styles';
import { colors } from '../../../styles/variables';

const title = 'Easily create or join a local nanny share with Hapu';
const desc = 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,affordable solutions in childcare.';
const buttonText = 'See hapu in action (27 seconds)';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroGrid>
        <Header />
        <ImageSet
          srcDesk={hero}
          srcMob={heroMob}
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
            textAlign="center"
          >
            {desc}
          </Typography>
        </Description>
        <LinkWrapper>
          <PlayButton />
          <LinkText
            margin="0 0 0 16px"
          >
            {buttonText}
          </LinkText>
        </LinkWrapper>
        <Downbar />
      </HeroGrid>
    </HeroContainer>
  );
}
