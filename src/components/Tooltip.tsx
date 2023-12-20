import styled from '@emotion/styled';
import { css } from '@emotion/react'
import React from 'react';
import { Direction, ToolTip } from '../interfaces/interfaces'

const commonTip = css`
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
`;

const calculatePosition = (position: Direction['direction']) => {
  switch (position) {
    case 'left':
      return css`
        //left: 10px;
        //top: 50%;
        //left: calc(50% - 150px);
        right: 100%;//calc(50%-20px);
        //left: calc(100% + 20px);
        margin-right: 10px;
        &::after {
          ${commonTip}
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-color: transparent transparent transparent black;
        }
      `;
    case 'right':
      return css`
        //top: 30%;
        left: 100%;//calc(50% + 150px);
        //bottom: calc(50% + 20px);
        margin-left: 10px;
        &::after {
          ${commonTip}
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-color: transparent black transparent transparent;
        }
      `;

    case 'top':
      return css`
        bottom: 100%;//calc(50% + 20px);
        right: 30%;
        //margin-left: -60px;
        margin-bottom: 10px;
        &::after {
          ${commonTip}
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-color: black transparent transparent transparent;
        }
      `;

    case 'bottom':
      return css`
        top: 100%;//calc(50% + 20px);
        right: 30%;
        //margin-left: -60px;
        margin-top: 10px;
        &::after {
          ${commonTip}
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-color: transparent transparent black transparent;
        }
      `;

    default:
      return css``;
  }
};

const Content = styled.span<Direction>`
  width: 120px;
  background-color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  color: white;
  position: absolute;
  z-index: 1;

  ${({ direction }) => calculatePosition(direction)};
`;

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const Tooltip: React.FC<ToolTip> = ({ children, message, direction }) => {
  return (
    /*<Container>
      {children}*/
      <Content className="tooltip" direction={direction}>{message}</Content>
    /*</Container>*/
    
  );
};

export default Tooltip;