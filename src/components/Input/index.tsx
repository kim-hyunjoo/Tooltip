import styled from "@emotion/styled";
import useFocus from 'hooks/useFocus'
import Tooltip from "components/Tooltip";
import { InputProps } from 'interfaces/interfaces'

const Wrapper = styled.div<Partial<InputProps>>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
  position: relative;
  height: min-height;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
`;

const StyledInput = styled.input<Partial<InputProps>>`
  position: relative;
  width: 100%;
  padding: 4px 8px;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Input: React.FC<InputProps> = ({ label = 'Input', block = true, direction }) => {
  const [ref, focus] = useFocus();

  return (
    <Wrapper ref={ref} block={block}>
      <Label>{label}</Label>
      <StyledInput/>
      <Tooltip show={focus} direction={direction} message={'focus'}></Tooltip>
    </Wrapper>
  );
};

export default Input;
