import React, { MouseEventHandler } from "react";
import { Button, ButtonProps, PropTypes } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface NavButtonProps extends ButtonProps {
  children: string;
  to: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  color?: PropTypes.Color;
  onClick?: MouseEventHandler
}

const NavButton = (props: NavButtonProps) => {
  const { children, to, variant = 'text', size = 'medium', color = 'primary', onClick } = props

  // eslint-disable-next-line react/display-name
  const renderLink = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />
  );

  return (
    <Button
      component={renderLink}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default NavButton;