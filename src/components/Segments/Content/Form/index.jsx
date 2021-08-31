import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Atoms/Button';
import Input from '../../../Atoms/Input';
import Typography from '../../../Atoms/Typography';
import {
  FormGrid,
  Content,
  Title,
  Desc,
  FormNews,
} from './styles';
import { colors } from '../../../../styles/variables';

export default function Form({
  title,
  desc,
}) {
  return (
    <>
      <FormGrid>
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
        <FormNews>
          <Input type="text" placeholder="Your name" />
          <Input type="text" placeholder="Your email" />
          <Button width="328px" type="sumbit" margin="13px 0 0">Send</Button>
        </FormNews>
      </FormGrid>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

Form.defaultProps = {
  title: null,
  desc: null,
};
