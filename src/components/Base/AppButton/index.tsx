import React from 'react';
import { Button, ButtonProps } from 'antd';

export const AppButton = (props: ButtonProps) => {
  const {
    id,
    disabled,
    type,
    size,
    onClick,
    target,
    href,
    danger,
    htmlType,
    style,
    title,
    children,
    ...rest
  } = props;
  return (
    <Button
      id={id}
      type={type}
      size={size}
      href={href}
      target={target}
      danger={danger}
      htmlType={htmlType}
      disabled={disabled}
      style={style}
      title={title}
      onClick={onClick}
      {...rest}>
      {children}
    </Button>
  );
};
