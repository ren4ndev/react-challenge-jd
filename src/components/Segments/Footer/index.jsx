import React from 'react';
import { colors } from '../../../styles/variables';
import Typography from '../../Atoms/Typography';
import LinkText from '../../Atoms/LinkText';
import Schedule from '../../../lib/icons/Schedule';
import Logo from '../../../lib/icons/Logo';
import Facebook from '../../../lib/icons/Facebook';
import Twitter from '../../../lib/icons/Twitter';
import Instagram from '../../../lib/icons/Instagram';
import {
  FooterContainer,
  FooterGrid,
  CtaContainer,
  ScheduleButton,
  ButtonText,
  ContactContainer,
  MenuNav,
  NavItem,
  Social,
  SocialItem,
  Divider,
  Line,
  Copyright,
} from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <CtaContainer>
          <Typography
            type="heading3"
            fontColor={colors.grey}
            fontWeight="500"
          >
            Become a nanny share host
          </Typography>
          <Typography
            type="body"
            fontColor={colors.grey}
            fontWeight="400"
          >
            Takes less than 5 minutes to get started
          </Typography>
          <ScheduleButton>
            <Schedule />
            <ButtonText>
              <Typography
                type="body"
                fontColor={colors.white}
                fontWeight="400"
              >
                Create Your Nanny Share
              </Typography>
              <Typography
                type="bodySmall"
                fontColor={colors.white}
                fontWeight="400"
              >
                Takes less than 5 minutes
              </Typography>
            </ButtonText>
          </ScheduleButton>
          <LinkText
            fontColor={colors.secondary}
            margin="0"
          >
            Or browse local nanny-shares
          </LinkText>
        </CtaContainer>
        <ContactContainer>
          <Logo />
          <MenuNav>
            <NavItem href="">
              <Typography
                type="heading5"
                fontColor={colors.grey}
                fontWeight="400"
              >
                Share Your Nanny
              </Typography>
            </NavItem>
            <NavItem href="">
              <Typography
                type="heading5"
                fontColor={colors.grey}
                fontWeight="400"
              >
                Our Story
              </Typography>
            </NavItem>
            <NavItem href="">
              <Typography
                type="heading5"
                fontColor={colors.grey}
                fontWeight="400"
              >
                Blog
              </Typography>
            </NavItem>
            <NavItem href="">
              <Typography
                type="heading5"
                fontColor={colors.grey}
                fontWeight="400"
              >
                Terms & Privacy
              </Typography>
            </NavItem>
          </MenuNav>
          <Social>
            <SocialItem href="">
              <Facebook />
            </SocialItem>
            <SocialItem href="">
              <Twitter />
            </SocialItem>
            <SocialItem href="">
              <Instagram />
            </SocialItem>
          </Social>
        </ContactContainer>
        <Divider><Line /></Divider>
        <Copyright>
          <Typography
            type="bodySmall"
            fontColor={colors.grey}
            fontWeight="400"
          >
            Copyright © 2017 Hapu PTY Limited All rights reserved
          </Typography>
        </Copyright>
      </FooterGrid>
    </FooterContainer>
  );
}
