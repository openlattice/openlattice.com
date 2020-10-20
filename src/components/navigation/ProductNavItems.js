/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import NavLink from './NavLink';

import { OpenLatticeCircleIcon } from '../../assets/svg/circle-icons';
import { CAREIcon, PCMIcon } from '../../assets/svg/icons';
import { Routes } from '../../core/router';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';

const ProductNavItem = styled.div`
  align-items: center;
  color: ${NEUTRALS.GRAY_07} !important;
  display: flex;
  line-height: ${({ inPortal }) => (inPortal ? '1.5' : '2.5')};
  padding: ${({ inPortal }) => (inPortal ? '16px 32px' : '0 32px')};
  text-decoration: none;

  &:hover {
    background-color: ${PURPLES.PP12};
  }

  .product-name-blurb-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: ${({ inPortal }) => (inPortal ? '16px' : '8px')};
  }

  .product-name {
    font-weight: ${({ inPortal }) => (inPortal ? '600' : '500')};
  }

  .product-blurb {
    color: ${NEUTRALS.GRAY_08};
    display: ${({ inPortal }) => (inPortal ? 'block' : 'none')};
  }
`;

// const Divider = styled.div`
//   background-color: ${NEUTRALS.GRAY_09};
//   height: 1px;
//   margin: 16px 0;
//   width: 100%;
// `;

type Props = {
  inPortal ?:boolean;
};

const ProductNavItems = ({ inPortal } :Props) => (
  <>
    <NavLink to={Routes.PRODUCTS_CARE}>
      <ProductNavItem inPortal={inPortal}>
        <CAREIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">CARE</span>
          <span className="product-blurb">Collect and utilize behavioral health data</span>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_PCM}>
      <ProductNavItem inPortal={inPortal}>
        <PCMIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">Pretrial Case Management</span>
          <span className="product-blurb">Manage a person moving through pretrial system</span>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PRODUCTS_CHRONICLE}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">Chronicle</span>
          <span className="product-blurb">Collaborative human-centered research tool</span>
        </div>
      </ProductNavItem>
    </NavLink>
  </>
);

ProductNavItems.defaultProps = {
  inPortal: false,
};

export default ProductNavItems;
