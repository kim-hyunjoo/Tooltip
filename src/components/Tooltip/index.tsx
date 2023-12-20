import styled from '@emotion/styled';
import { css } from '@emotion/react'
import React from 'react';
import { Direction, ToolTip } from 'interfaces/interfaces'

const Tip = css`
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
`;

const positionByDirection = (position: Direction['direction']) => {
  switch (position) {
    case 'left':
      return css`
        right: calc(100% + 10px);
        transform: translateY(-50%);
        &::after {
          ${Tip}
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-color: transparent transparent transparent black;
        }
      `;
    case 'right':
      return css`
        left: 100%;
        transform: translateY(-50%);
        margin-left: 10px;
        &::after {
          ${Tip}
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-color: transparent black transparent transparent;
        }
      `;

    case 'top':
      return css`
        bottom: 100%;
        margin-bottom: 10px;
        
        &::after {
          ${Tip}
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-color: black transparent transparent transparent;
        }
      `;

    case 'bottom':
      return css`
        top: 100%;
        margin-top: 10px;
        &::after {
          ${Tip}
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

const TooltipWrapper = styled.div<ToolTip>`
  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  width: fit-content;
  background-color: black;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  color: white;
  position: absolute;
  z-index: 1;

  ${({ direction }) => positionByDirection(direction)};
`;

const Tooltip: React.FC<ToolTip> = ({ show=false, message, direction }) => {
  return (
      <TooltipWrapper show={show} className="tooltip" direction={direction}>{message}</TooltipWrapper>   
  );
};

export default Tooltip;