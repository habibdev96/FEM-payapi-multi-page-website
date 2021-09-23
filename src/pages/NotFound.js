import styled from 'styled-components';
import { PricingHeading } from '../components/styledElements/Headings';
import { Button } from '../components/styledElements/Buttons';
import {
  NotFoundPatternTop,
  NotFoundPatternBottom,
} from '../components/styledElements/Pattern';
import { sectionSpacingSm } from '../abstracts/Mixins';

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  background-color: var(--mirageBlue);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 5000;
  text-align: center;
  overflow: hidden;

  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--gap);
    ${sectionSpacingSm}
  }
`;

const NotFound = () => {
  return (
    <StyledSection>
      <NotFoundPatternTop />
      <div className='info'>
        <PricingHeading>Sorry, this page does not exist :(</PricingHeading>
        <Button to='/' primary={+true}>
          Go Back Home
        </Button>
      </div>
      <NotFoundPatternBottom />
    </StyledSection>
  );
};

export default NotFound;
