import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import BannerImage from 'components/BannerImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
  background-color: #282c34;
  color: white;
`;

const CurrentEventPanel = ({ event: { name, banner } }) => (
  <Container>
    <h1><FormattedMessage id="TOC.current.event" /></h1>
    <BannerImage src={banner} alt={name} />
  </Container>
);

CurrentEventPanel.propTypes = {
  event: PropTypes.object,
};

CurrentEventPanel.defaultProps = {
  event: {},
};

export default CurrentEventPanel;
