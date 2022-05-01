import { ButtonHTMLAttributes } from "react";

export type buttonProps = {
  onClick?: any;
  children: React.ReactNode;
  disabled?: boolean;
  theme?: 'dark' | 'light';
  link?: string;
  type?: 'submit' | 'button' | 'reset';
  fullWidth?: boolean;
}
