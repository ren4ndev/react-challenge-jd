import React from 'react';
import Image from '../../Atoms/Image';
import logo from '../../../assets/images/logo.svg';
import {
  HeaderContainer,
} from './styles';
import ButtonBase from '../../Atoms/Button';

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" width="48px" />
      <ButtonBase margin="0 0 4px 0">Become a Nanny Share Host</ButtonBase>
    </HeaderContainer>
  );
}
