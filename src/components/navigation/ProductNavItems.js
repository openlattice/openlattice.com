/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors } from 'lattice-ui-kit';

import NavLink from './NavLink';

import { OpenLatticeCircleIcon } from '../../assets/svg/circle-icons';
import {
  AstrometricsIcon,
  CAREIcon,
  CWPIcon,
  PCMIcon,
  SteppingUpIcon,
} from '../../assets/svg/icons';
import { Routes } from '../../core/router';
import { Typography } from '../typography';

const { NEUTRAL } = Colors;

const ProductNavItem = styled.div`
  align-items: center;
  display: flex;
  padding: ${({ inPortal }) => (inPortal ? '16px 32px' : '0 32px')};
  text-decoration: none;

  &:hover {
    background-color: ${NEUTRAL.N00};
  }

  span {
    color: ${NEUTRAL.N800};
    line-height: ${({ inPortal }) => (inPortal ? '1.5' : '2.5')};
  }

  .product-name-blurb-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: ${({ inPortal }) => (inPortal ? '16px' : '8px')};
  }

  .product-name {
    font-weight: ${({ inPortal }) => (inPortal ? '600' : '500')};
  }
`;

const ProductNavHeader = styled.div`
  color: ${NEUTRAL.N800};
  line-height: 3.5;
  padding: 0 24px;
`;

const Divider = styled.div`
  background-color: ${NEUTRAL.N100};
  height: 1px;
  margin: 16px 0;
  width: 100%;
`;

type Props = {
  inPortal ?:boolean;
};

const ProductNavItems = ({ inPortal } :Props) => (
  <>
    <ProductNavHeader inPortal={inPortal}>
      <Typography component="span" variant="body1">
        {
          inPortal ? 'Research' : 'Products - Research'
        }
      </Typography>
    </ProductNavHeader>
    <NavLink to={Routes.PLATFORM_RESEARCH}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Platform
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_CHRONICLE}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Chronicle
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    {
      inPortal && <Divider />
    }
    <ProductNavHeader inPortal={inPortal}>
      <Typography component="span" variant="body1">
        {
          inPortal ? 'Government' : 'Products - Government'
        }
      </Typography>
    </ProductNavHeader>
    <NavLink to={Routes.PLATFORM_GOVERNMENT}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Platform
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_CARE}>
      <ProductNavItem inPortal={inPortal}>
        <CAREIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Care
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_PCM}>
      <ProductNavItem inPortal={inPortal}>
        <PCMIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Pretrial Case Management
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_ASTROMETRICS}>
      <ProductNavItem inPortal={inPortal}>
        <AstrometricsIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Astrometrics
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_CWP}>
      <ProductNavItem inPortal={inPortal}>
        <CWPIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Community Work Program
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_REFERRALS}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Referrals
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_STEPPING_UP}>
      <ProductNavItem inPortal={inPortal}>
        <SteppingUpIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <Typography component="span" variant="body1">
            Stepping Up
          </Typography>
        </div>
      </ProductNavItem>
    </NavLink>
  </>
);

ProductNavItems.defaultProps = {
  inPortal: false,
};

export default ProductNavItems;
