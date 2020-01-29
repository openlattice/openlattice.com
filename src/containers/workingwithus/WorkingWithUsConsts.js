// @flow

import DataSharingSVG from '../../assets/svg/working-with-us-data-sharing.svg';
import DeploySVG from '../../assets/svg/working-with-us-deploy.svg';
import PipelinesSVG from '../../assets/svg/working-with-us-pipelines.svg';
import ProblemDefinitionSVG from '../../assets/svg/working-with-us-problem-definition.svg';

const WORKING_WITH_US_GRAPHICS :Object = {
  PROBLEM_DEFINITION: ProblemDefinitionSVG,
  DATA_SHARING_AGREEMENTS: DataSharingSVG,
  DATA_PIPELINES: PipelinesSVG,
  DEPLOY_APPS: DeploySVG
};

const WORKING_WITH_US_STEPS :Object = {
  PROBLEM_DEFINITION: 'Problem definition',
  DATA_SHARING_AGREEMENTS: 'Data sharing agreements',
  DATA_PIPELINES: 'Integrate data pipelines',
  DEPLOY_APPS: 'Deploy applications'
};

const WORKING_WITH_US_DESCRIPTIONS :Object = {
  PROBLEM_DEFINITION: (`Identify a clear problem, determine the stakeholders, and envision your
    ideal solution. Whether it is countering a sudden rise in drug overdoses, reducing overcrowding
    in county jails, or the need for a shared case management interface across behavioral health
    agencies, we'll help you get there.`),
  DATA_SHARING_AGREEMENTS: (`We recognize the challenges of establishing data sharing agreements among
    stakeholders, adhering to various laws and regulations, and navigating through data infrastructures.
    We gather data sharing agreements progressively, using a “Hub-Spoke-Wheel” model.`),
  DATA_PIPELINES: (`We have created standardized data models for most key database types (e.g., RMS, SQL)
  to alleviate the challenges associated with bespoke data integrations. We reduce cost and complexity by
  letting users simply map fields onto the OpenLattice schema.`),
  DEPLOY_APPS: (`Customers leverage one or more of our existing solutions, or develop their own on top of
    our open APIs, to intelligently link entities across their previously siloed datasets.`)
};

export {
  WORKING_WITH_US_DESCRIPTIONS,
  WORKING_WITH_US_GRAPHICS,
  WORKING_WITH_US_STEPS
};
