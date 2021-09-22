import styled from 'styled-components';
import { SectionHeading, PricingHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import checkmarkIcon from '../../assets/shared/desktop/icon-check.svg';
import { textStyles } from '../../abstracts/Mixins';
import { Button } from '../styledElements/Buttons';

const Plan = styled.article`
  .info {
    padding-bottom: 2rem;
  }

  .features {
    border-top: 0.1rem solid #f2f2f2;
    border-bottom: 0.1rem solid #f2f2f2;
    padding: 2rem 0;
    margin-bottom: 2rem;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .feature-name {
    ${textStyles}
    color: var(--sanJuanBlue);
    font-size: 1.6rem;

    &.unavailable {
      opacity: 0.6;
      margin-left: 3.5rem;
    }
  }

  .checkmark {
    width: 1.5rem;
  }
`;

const PricingPlan = ({ title, description, cost, features }) => {
  return (
    <Plan>
      <div className='info'>
        <PricingHeading>{title}</PricingHeading>
        <Paragraph>{description}</Paragraph>
        <SectionHeading lg>{cost}</SectionHeading>
      </div>
      <ul className='features'>
        {features.map((feat) => (
          <li className='feature' key={feat.id}>
            {feat.isAvailable && (
              <img
                src={checkmarkIcon}
                alt='checkmark icon'
                className='checkmark'
              />
            )}
            <span
              className={`feature-name ${!feat.isAvailable && 'unavailable'}`}
            >
              {feat.feature}
            </span>
          </li>
        ))}
      </ul>
      <Button to='/Contact' tertiary={+true}>
        Request Access
      </Button>
    </Plan>
  );
};

export default PricingPlan;
