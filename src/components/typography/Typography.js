/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';
import { Typography as MUITypography } from '@material-ui/core';

const getMaxWidthStyles = ({ $maxWidth, theme }) => {

  if ($maxWidth && theme) {

    let lgMaxWidth;
    if ($maxWidth && $maxWidth.lg) {
      lgMaxWidth = `${$maxWidth.lg}px`;
    }

    let mdMaxWidth = lgMaxWidth;
    if ($maxWidth && $maxWidth.md) {
      mdMaxWidth = `${$maxWidth.md}px`;
    }

    let smMaxWidth = mdMaxWidth;
    if ($maxWidth && $maxWidth.sm) {
      smMaxWidth = `${$maxWidth.sm}px`;
    }

    let xsMaxWidth = smMaxWidth;
    if ($maxWidth && $maxWidth.xs) {
      xsMaxWidth = `${$maxWidth.xs}px`;
    }

    return css`
      ${theme.breakpoints.up('xs')} {
        max-width: ${xsMaxWidth};
      }
      ${theme.breakpoints.up('sm')} {
        max-width: ${smMaxWidth};
      }
      ${theme.breakpoints.up('md')} {
        max-width: ${mdMaxWidth};
      }
      ${theme.breakpoints.up('lg')} {
        max-width: ${lgMaxWidth};
      }
    `;
  }

  return null;
};

const StyledTypography = styled(MUITypography)`
  color: ${({ $color }) => $color};
  font-weight: ${({ $fontWeight }) => ($fontWeight || undefined)};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : undefined)};
  text-transform: ${({ $uppercase }) => ($uppercase ? 'uppercase' : undefined)};
  ${getMaxWidthStyles}
`;

const Typography = ({
  children,
  className,
  color,
  component,
  fontWeight,
  maxWidth,
  textAlign,
  underline,
  uppercase,
  variant,
} :{|
  children :any;
  className ?:string;
  color ?:string;
  component ?:string;
  fontWeight ?:100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  maxWidth ?:{|
    xs ?:number;
    sm ?:number;
    md ?:number;
    lg ?:number;
  |};
  textAlign ?:'left' | 'center' | 'right';
  underline ?:boolean;
  uppercase ?:boolean;
  variant ?:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
|}) => (
  <StyledTypography
      $color={color}
      $fontWeight={fontWeight}
      $maxWidth={maxWidth}
      $underline={underline}
      $uppercase={uppercase}
      align={textAlign}
      className={className}
      component={component}
      variant={variant}>
    {children}
  </StyledTypography>
);

Typography.defaultProps = {
  className: undefined,
  color: undefined,
  component: undefined,
  fontWeight: undefined,
  maxWidth: undefined,
  textAlign: undefined,
  underline: false,
  uppercase: false,
  variant: undefined,
};

export default Typography;
