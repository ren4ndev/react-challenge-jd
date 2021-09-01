import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../../Atoms/Button';
import Input from '../../../Atoms/Input';
import Typography from '../../../Atoms/Typography';
import {
  FormGrid,
  Content,
  Title,
  Desc,
  FormNews,
  Loader,
} from './styles';
import { colors } from '../../../../styles/variables';
import Popup from '../../../Atoms/Popup';

export default function Form({
  title,
  desc,
}) {
  const [name, setName] = useState('');
  function handleNameChange(event) {
    const { value } = event.target;
    setName(value);
  }

  const [email, setEmail] = useState('');
  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
  }

  const [loading, setLoading] = useState(false);
  const [showSuccesPopup, setShowSuccesPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      email,
    };

    setLoading(true);
    setShowSuccesPopup(false);
    setShowErrorPopup(false);

    axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', data)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setShowSuccesPopup(true);
          return;
        }
        setLoading(false);
        setShowErrorPopup(true);
      })
      .catch(() => {
        setLoading(false);
        setShowErrorPopup(true);
      });
  }

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
        <FormNews onSubmit={(e) => handleSubmit(e)}>
          <Input type="text" placeholder="Your name" value={name} onChange={(e) => handleNameChange(e)} />
          <Input type="text" placeholder="Your email" value={email} onChange={(e) => handleEmailChange(e)} />
          <Button width="328px" type="sumbit" margin="13px 0 0">Send</Button>
        </FormNews>
        {loading ? (
          <Loader />
        ) : null}
      </FormGrid>
      {showSuccesPopup ? (
        <Popup type="success" message="Success" />
      ) : null}
      {showErrorPopup ? (
        <Popup type="error" message="Error" />
      ) : null}
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
