import React, { useState } from 'react';
import Tooltip from 'components/Tooltip';
import { StyledButton } from 'components/Button/StyledButton'
import { Direction } from 'interfaces/interfaces'
import useClickAway from 'hooks/useClickAway'


const ClickButton: React.FC<Direction> = ({ direction }) => {
  const [show, setShow] = useState(false);
  const ref = useClickAway((e: Event) => {
        setShow(false);
    });
 
  return (
    <>
        <StyledButton ref={ref} onClick={()=>setShow(true)}>
          <Tooltip show={show} direction={direction} message={'click'}></Tooltip>
            {`${direction} click example`}
        </StyledButton>
    </>
  )
  
  
};



export default ClickButton;