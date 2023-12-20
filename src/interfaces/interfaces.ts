export type Direction = {
    direction: 'left' | 'right' | 'top' | 'bottom';
}
export interface ToolTip extends Direction{
    message?: string;
    show?: boolean;
}

export interface InputProps extends Direction{
    label?: string,
    block?: boolean,
  }