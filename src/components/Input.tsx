import styled from "@emotion/styled";
import useFocus from '../hooks/useFocus'
import Tooltip from "./Tooltip";
import { Direction } from '../interfaces/interfaces'

type WrapperProps = {
    block: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  display: ${({ block }) => (block ? "block" : "inline-block")};
  position: relative;
  height: min-height;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

type InputProps ={
    label?: string,
    block?: boolean,
    invalid?: boolean,
    required?: boolean,
    disabled?: boolean,
    readonly?: boolean,
    direction: Direction['direction']
}

const StyledInput = styled.input<Partial<InputProps>>`
    position: relative;
    width: 100%;
    padding: 4px 8px;
    border: 1px solid ${({ invalid }) => (invalid ? "red" : "gray")};
    border-radius: 4px;
    box-sizing: border-box;
`;

const Input: React.FC<InputProps> = ({
  label = 'Input',
  block = true,
  invalid = false,
  required = false,
  disabled = false,
  readonly = false,
  direction,
  ...props
}) => {

    const [ref, focus] = useFocus();

  return (
    <Wrapper ref={ref} block={block}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        
        {...props}
      />
      {focus && <Tooltip direction={direction} message={'focus'}></Tooltip>}
      {focus && <Tooltip direction={direction} message={'focus'}></Tooltip>}
      {focus && <Tooltip direction={direction} message={'focus'}></Tooltip>}
      {focus && <Tooltip direction={direction} message={'focus'}></Tooltip>}
    </Wrapper>
  );
};

export default Input;
