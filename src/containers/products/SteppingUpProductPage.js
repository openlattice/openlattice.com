// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
// import FeatureImg1 from '../../assets/images/pcm-feature-shot-1.png';
// import FeatureImg2 from '../../assets/images/pcm-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import SteppingUpIcon from '../../assets/logos/stepping-up-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
// import ProductImg from '../../assets/images/pcm-product-shot.png';
import PurpleOLIcon from '../../assets/images/purple-ol.svg';

import { menuStylesForProductPages } from './styled/MenuStyles';

import {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  FeaturesContent,
  HeaderContent,
  Icon,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
} from './styled/StyledProductComponents';

import { NEUTRALS } from '../../core/style/Colors';

const SteppingUpProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={SteppingUpIcon} />
          <div>SteppingUp Dashboard</div>
        </ProductStamp>
        <ProductIntro>Quantify how your mental health affected population interacts with social services</ProductIntro>
        <ProductDescription>
          {`Visualize and link data from across siloes to see how different subsets of individuals affected by
            mental illness interact across social services.`}
        </ProductDescription>
      </HeaderContent>
      {/* <ProductShot bgImage={ProductImg} /> */}
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Data Visualization</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`View metrics that update live to understand how your mental health affected population
              interacts with services.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Data Linking</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Create a unified profile of an individual across siloed datasets through OpenLattice’s
              linking algorithm.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Feature 3</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Placeholder text. Placeholder text. Placeholder text. Placeholder text. Placeholder text.
              Placeholder text. Placeholder text. Placeholder text. Placeholder text. `}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Data Linking</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Most current data systems operate in siloes while the constituents they serve often do not.
              In other words, those who consume one social service typically consume multiple social services.
              This is especially true for system high utilizers, and those who are affected by mental illness,
              two groups with high overlap.  With the OpenLAttice linking algorithm, you can de-duplicate profiles
              within datasets, and create a unified profile of an individual’s interactions with services in the
              community across datasets. `}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        {/* <FeatureShot bgImage={FeatureImg1} /> */}
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        {/* <FeatureShot bgImage={FeatureImg2} /> */}
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Visualizing Cross-Sectional Insights</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The OpenLattice linking technology can be deployed in a myriad of different ways, one of which is to
              power the StepipngUp Dashboard.  Once the segment of the jail population affected by mental illness has
              been quantified, communities can see exactly where they are succeeding in serving this population,
              and where they can improve across and between services.  Taking this more holistic view allows
              jurisdictions to identify problems closer to the root.  By amplifying success and improving upon
              less efficient programs, jurisdictions can provide better care to their community often at a lower cost.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default SteppingUpProductPage;
