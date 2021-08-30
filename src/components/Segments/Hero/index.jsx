import React from 'react';
import Header from '../Header';
import ImageSet from '../../Molecules/ImageSet';
import Typography from '../../Atoms/Typography';
import LinkText from '../../Atoms/LinkText';
import Image from '../../Atoms/Image';
import hero from '../../../assets/images/hero.webp';
import heroMob from '../../../assets/images/hero-mob.webp';
import avatar from '../../../assets/images/avatar.png';
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
const linkDownbar = 'Sarah’s day care available now in North Sydney';
const date = 'Wednesday, Thursday, Friday - 7:30 - 5:30';

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
            fontColor={colors.white}
          >
            {buttonText}
          </LinkText>
        </LinkWrapper>
        <Downbar>
          <Image src={avatar} height="56px" width="56px" />
          <LinkText
            fontColor={colors.secondary}
            margin="6px 0"
          >
            {linkDownbar}
          </LinkText>
          <Typography
            type="heading5"
            fontWeight="500"
            textAlign="center"
          >
            {date}
          </Typography>
        </Downbar>
      </HeroGrid>
    </HeroContainer>
  );
}
