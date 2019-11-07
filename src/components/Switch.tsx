import React from 'react';
import styled from 'styled-components';
// import assets
import Light from '../assets/light.svg';
import Dark from '../assets/dark.svg';

type SwitchProps = {
  switchState: boolean;
  switchToggleStateClick: () => void;
};

const Switch = (props: SwitchProps) => {
  return (
    <ToggleSwitch onClick={props.switchToggleStateClick}>
      <DarkImg src={Dark} alt="dark-mode" />
      <LightImg src={Light} alt="light-mode" />
      <ToggleBall switch={props.switchState} />
    </ToggleSwitch>
  );
};

// Switch style
const ToggleSwitch = styled.button`
  background: #0f1114;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 64px;
  height: 28px;
  margin: 0;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const LightImg = styled.img`
  position: absolute;
  top: 4px;
  right: 6px;
  width: 1.2rem;
  height: auto;
`;

const DarkImg = styled.img`
  position: absolute;
  top: 4px;
  left: 5px;
  width: 1.2rem;
  height: auto;
`;

const ToggleBall = styled.div<{ switch: boolean }>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fefefe;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
  transform: ${props => (props.switch ? 'translateX(36px)' : 'translateX(0)')};
`;

export default Switch;
