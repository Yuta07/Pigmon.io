import React, { Fragment } from 'react';
import styled from 'styled-components';

type LogoProps = {
  width: number;
};

const Logo = (props: LogoProps) => {
  return (
    <Fragment>
      <AppLogo src="/pigmon.svg" alt="pigmon-image" width={props.width} />
    </Fragment>
  );
};

// Logo style
const AppLogo = styled.img<{ width: number }>`
  width: ${props => `${props.width}px`};
  vertical-align: bottom;
`;

export default Logo;
