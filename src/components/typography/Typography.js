/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Typography as LUKTypography } from 'lattice-ui-kit';

const styles = {
  h1: {
    fontSize: '3.5rem', // 56px
    fontWeight: 700,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  h2: {
    fontSize: '2.25rem', // 36px
    fontWeight: 600,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  h3: {
    fontSize: '2rem', // 32px
    fontWeight: 500,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  h4: {
    fontSize: '1.75rem', // 28px
    fontWeight: 500,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  h5: {
    fontSize: '1.5rem', // 24px
    fontWeight: 500,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '1.125rem', // 18px
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.5,
  },
  underline: {
    textDecoration: 'underline',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
};

const OLTypography = withStyles(styles)(LUKTypography);
const StyledTypography = styled(OLTypography)`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => (fontWeight || undefined)};
  max-width: ${({ maxwidth }) => (maxwidth ? `${maxwidth}px` : undefined)};
`;

const Typography = ({
  children,
  className,
  color,
  component,
  fontWeight,
  maxWidth,
  textAlign,
  variant,
} :{|
  children :any;
  className ?:string;
  color ?:string;
  component ?:string;
  fontWeight ?:100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  maxWidth ?:number;
  textAlign ?:'left' | 'center' | 'right';
  variant ?:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'tag' | 'underline';
|}) => (
  // NOTE: "maxwidth" to avoid this error:
  //   React does not recognize the `maxWidth` prop on a DOM element
  <StyledTypography
      align={textAlign}
      className={className}
      color={color}
      component={component}
      fontWeight={fontWeight}
      maxwidth={maxWidth}
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
  variant: undefined,
};

export default Typography;
