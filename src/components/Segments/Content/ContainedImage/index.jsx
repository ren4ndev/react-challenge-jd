import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../Atoms/Image';
import Typography from '../../../Atoms/Typography';
import {
  ContainedGrid,
  ImageContainer,
  Content,
  Title,
  Desc,
} from './styles';
import { colors } from '../../../../styles/variables';

export default function ContainedImage({
  imageSrcDesk,
  title,
  desc,
}) {
  return (
    <>
      <ContainedGrid>
        <ImageContainer>
          <Image src={imageSrcDesk} alt="" width="auto" />
        </ImageContainer>
        <Content>
          <Title>
            <Typography
              type="heading3"
              fontColor={colors.grey}
              fontWeight="500"
            >
              {title}
            </Typography>
          </Title>
          <Desc>
            <Typography
              type="body"
              fontColor={colors.grey}
              fontWeight="500"
            >
              {desc}
            </Typography>
          </Desc>
        </Content>
      </ContainedGrid>
    </>
  );
}

ContainedImage.propTypes = {
  imageSrcDesk: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

ContainedImage.defaultProps = {
  imageSrcDesk: null,
  title: null,
  desc: null,
};
