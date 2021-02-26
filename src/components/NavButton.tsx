import React from "react";
import { Button } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface NavButtonProps {
  text: string;
  to: string;
  variant?: 'text' | 'outlined' | 'contained'
}

const NavButton = ({ text, to, variant = 'text' }: NavButtonProps) => {
  const renderLink = React.useMemo(
    () => React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
      (itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <Button
      component={renderLink}
      variant={variant}
      size='large'
      color="primary">
      {text}
    </Button>
  );
}

export default NavButton;