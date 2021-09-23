import styled from 'styled-components';
import { CtaButton } from '../styledElements/Buttons';
import { textStyles } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledCta = styled.form`
  position: relative;
  width: 100%;
  margin: 2rem 0;

  .input {
    ${textStyles}
    width: 100%;
    border: 0;
    font-size: 1.5rem;
    font-weight: bold;
    display: inline-block;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    color: var(--sanJuanBlue);
    background-color: var(--white);
    box-shadow: var(--mainShadow);
    border-radius: var(--btnRadius);
  }

  .message {
    ${textStyles}
    font-size: 1.1rem;
    display: inline-block;
    margin: 0 0 1rem 2rem;
    color: var(--error);

    ${Responsive.md`
      margin-left: 0;
    `}

    &.success {
      color: green;
    }
  }
`;

const Cta = () => {
  const { ctaInputMessage, validateEmail } = useGlobalContext();

  return (
    <StyledCta onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        placeholder='Enter email address'
        className='input'
        autoComplete='off'
        onChange={(e) => validateEmail(e)}
      />
      <span
        className={`message ${ctaInputMessage === 'Looks good!' && 'success'}`}
      >
        {ctaInputMessage}
      </span>
      <CtaButton type='submit' value='Schedule a Demo' />
    </StyledCta>
  );
};

export default Cta;
