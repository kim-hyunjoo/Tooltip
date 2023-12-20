import { ReactNode, Ref, RefObject } from "react";
import { Style } from "util";

export type Direction = {
    direction: 'left' | 'right' | 'top' | 'bottom';
}

export interface ToolTip extends Direction{
    children?: ReactNode | null;
    message: string;
    ref?: any;//Ref | null;
    style?: any;//Style;
    //direction: 'left' | 'right' | 'top' | 'bottom';
}