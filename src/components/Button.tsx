import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Tooltip from './Tooltip';
import { Direction } from '../interfaces/interfaces'
import useHover from '../hooks/useHover'
import useClickAway from '../hooks/useClickAway'

const StyledButton = styled.button`
  position: relative;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  background-color: pink;
  color: white;
  cursor: pointer;
`;


const Button: React.FC<Direction> = ({ direction }) => {
  const [ref, hover] = useHover();
  //const [ref, click] = useClickAway();

  //클릭했을 때 툴팁이 보였다가, 
  return (
    <StyledButton 
      ref={ref}
      >
      {hover && <Tooltip direction={direction} message={'hover'}></Tooltip>}
      {/* {click && <Tooltip direction={direction} message={'click'}></Tooltip>} */}
      {`${direction} example`}
    </StyledButton>
  )
  
  
};



export default Button;