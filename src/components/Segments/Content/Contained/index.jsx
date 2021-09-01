import React from 'react';
import PropTypes from 'prop-types';
import ImageSet from '../../../Molecules/ImageSet';
import Typography from '../../../Atoms/Typography';
import {
  ContainedGrid,
  Image,
  Content,
  Title,
  Desc,
  LinkWrapper,
} from './styles';
import { colors } from '../../../../styles/variables';

export default function Contained({
  imageSrcDesk,
  imageSrcMob,
  title,
  desc,
  link,
  contentPosition,
}) {
  return (
    <>
      <ContainedGrid>
        <Image contentPosition={contentPosition}>
          <ImageSet srcDesk={imageSrcDesk} srcMob={imageSrcMob} fit="contain" alt="" width="100%" />
        </Image>
        <Content contentPosition={contentPosition}>
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
          <LinkWrapper href={link.href}>
            <Typography
              type="link"
              fontColor={colors.secondary}
              fontWeight="500"
            >
              {link.text}
            </Typography>
          </LinkWrapper>
        </Content>
      </ContainedGrid>
    </>
  );
}

Contained.propTypes = {
  imageSrcDesk: PropTypes.string,
  imageSrcMob: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.objectOf(PropTypes.string),
  contentPosition: PropTypes.string,
};

Contained.defaultProps = {
  imageSrcDesk: null,
  imageSrcMob: null,
  title: null,
  desc: null,
  link: null,
  contentPosition: 'left',
};
