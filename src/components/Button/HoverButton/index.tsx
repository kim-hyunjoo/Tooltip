import { StyledButton } from 'components/Button/StyledButton'
import React from 'react';
import Tooltip from 'components/Tooltip';
import { Direction } from 'interfaces/interfaces'
import useHover from 'hooks/useHover'

const HoverButton: React.FC<Direction> = ({ direction }) => {
  const [ref, hover] = useHover();
  
  return (
    <>
      <StyledButton ref={ref}>
        <Tooltip show={hover} direction={direction} message={'hover'}></Tooltip>
        {`${direction} hover example`}
      </StyledButton>
    </>
  )
  
  
};

export default HoverButton;