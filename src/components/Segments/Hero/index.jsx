import React from 'react';
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from '@marvelapp/react-ab-test';
import Header from '../Header';
import ImageSet from '../../Molecules/ImageSet';
import Typography from '../../Atoms/Typography';
import LinkText from '../../Atoms/LinkText';
import Image from '../../Atoms/Image';
import hero from '../../../assets/images/hero.webp';
import heroMob from '../../../assets/images/hero-mob.webp';
import avatar from '../../../assets/images/avatar.png';
import heroAppDemo from '../../../assets/images/hero-app-demo.png';
import PlayButton from '../../Atoms/PlayButton';
import {
  HeroContainer,
  HeroGrid,
  HeroContent,
  Title,
  Description,
  LinkWrapper,
  ContentImage,
  Downbar,
} from './styles';
import { colors } from '../../../styles/variables';

const title = 'Easily create or join a local nanny share with Hapu';
const titleVariant = 'Create the childcare you need at a price you can afford';
const desc = 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,affordable solutions in childcare.';
const descVariant = 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.';
const buttonText = 'See hapu in action (27 seconds)';
const linkDownbar = 'Sarah’s day care available now in North Sydney';
const date = 'Wednesday, Thursday, Friday - 7:30 - 5:30';
experimentDebugger.enable();
emitter.defineVariants('heroContent', ['a-variant', 'b-variant'], [50, 50]);

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
        <HeroContent>
          <Experiment name="heroContent">
            <Variant name="a-variant">
              <Title>
                <Typography
                  type="heading1"
                  fontColor={colors.white}
                  fontWeight="500"
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
            </Variant>
            <Variant name="b-variant">
              <Title>
                <Typography
                  type="heading1"
                  fontColor={colors.white}
                  fontWeight="500"
                >
                  {titleVariant}
                </Typography>
              </Title>
              <Description>
                <Typography
                  type="body"
                  fontColor={colors.white}
                  fontWeight="400"
                >
                  {descVariant}
                </Typography>
              </Description>
            </Variant>
          </Experiment>
          <LinkWrapper>
            <PlayButton />
            <LinkText
              margin="0 0 0 16px"
              fontColor={colors.white}
            >
              {buttonText}
            </LinkText>
          </LinkWrapper>
        </HeroContent>

        <ContentImage>
          <Image src={heroAppDemo} alt="" width="100%" />
        </ContentImage>

        <Downbar>
          <Image src={avatar} alt="" height="56px" width="56px" />
          <LinkText
            fontColor={colors.secondary}
            margin="0"
            marginDesk="0 2px 0 32px"
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
