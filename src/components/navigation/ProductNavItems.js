/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const ProductOverviewNavItem = styled(ProductNavItem)`
  font-weight: 600;
  padding: 16px 32px;
`;

const Divider = styled.div`
  background-color: ${NEUTRALS.GRAY_09};
  height: 1px;
  margin: 16px 0;
  width: 100%;
`;

type Props = {
  inPortal ?:boolean;
};

const ProductNavItems = ({ inPortal } :Props) => (
  <>
    {
      inPortal && (
        <>
          <NavLink to={Routes.PRODUCTS}>
            <ProductOverviewNavItem inPortal={inPortal}>
              <span>Product Overview</span>
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </ProductOverviewNavItem>
          </NavLink>
          <Divider />
        </>
      )
    }
    <NavLink to={Routes.CARE}>
      <ProductNavItem inPortal={inPortal}>
        <CAREIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">CARE</span>
          <span className="product-blurb">Collect and utilize behavioral health data</span>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.PCM}>
      <ProductNavItem inPortal={inPortal}>
        <PCMIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">Pretrial Case Management</span>
          <span className="product-blurb">Manage a person moving through pretrial system</span>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.CHRONICLE}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">Chronicle</span>
          <span className="product-blurb">Collaborative human-centered research tool</span>
        </div>
      </ProductNavItem>
    </NavLink>
    <NavLink to={Routes.RESEARCH_HUB}>
      <ProductNavItem inPortal={inPortal}>
        <OpenLatticeCircleIcon width={inPortal ? 36 : 20} />
        <div className="product-name-blurb-wrapper">
          <span className="product-name">Research Hub</span>
          <span className="product-blurb">Cloud-based Management Information System</span>
        </div>
      </ProductNavItem>
    </NavLink>
  </>
);

ProductNavItems.defaultProps = {
  inPortal: false,
};

export default ProductNavItems;
