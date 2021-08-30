import React from 'react';
import Image from '../../Atoms/Image';
import logo from '../../../assets/images/logo.svg';
import {
  HeaderContainer,
  LeftMenu,
  MenuNav,
  RightMenu,
  SignInContainer,
} from './styles';
import ButtonBase from '../../Atoms/Button';

export default function Header() {
  return (
    <HeaderContainer>
      <LeftMenu>
        <Image src={logo} alt="" width="48px" />
        <MenuNav>
          <ButtonBase backgroundColor="transparent" width="fit-content" margin="0 16px 0 40px">
            Create Your Nanny Share
          </ButtonBase>
          <ButtonBase backgroundColor="transparent" width="fit-content" margin="0 16px">
            Browse Shares
          </ButtonBase>
          <ButtonBase backgroundColor="transparent" width="fit-content" margin="0 16px">
            Our Story
          </ButtonBase>
        </MenuNav>
      </LeftMenu>
      <RightMenu>
        <ButtonBase margin="0 0 4px 0" marginDesk="0">
          Become a Nanny Share Host
        </ButtonBase>
        <SignInContainer>
          <ButtonBase backgroundColor="transparent" width="fit-content" margin="0 0 0 23px">
            Sign In
          </ButtonBase>
        </SignInContainer>
      </RightMenu>
    </HeaderContainer>
  );
}
