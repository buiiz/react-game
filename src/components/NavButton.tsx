import React from "react";
import { Button, PropTypes } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface NavButtonProps {
  children: string;
  to: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  color?: PropTypes.Color;
}

const NavButton = (props: NavButtonProps) => {
  const { children, to, variant = 'text', size = 'medium', color = 'primary' } = props

  const renderLink = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />
  );

  return (
    <Button
      component={renderLink}
      variant={variant}
      size={size}
      color={color}
    >
      {children}
    </Button>
  );
}

export default NavButton;