import React, { Fragment } from 'react';
import styled from 'styled-components';
// import assets
import PigmonLogo from '../assets/pigmon.svg';

type LogoProps = {
  width: number;
};

const Logo = (props: LogoProps) => {
  return (
    <Fragment>
      <AppLogo src={PigmonLogo} alt="pigmon-image" width={props.width} />
    </Fragment>
  );
};

// Logo style
const AppLogo = styled.img<{ width: number }>`
  width: ${props => `${props.width}px`};
  vertical-align: bottom;
`;

export default Logo;
