import styled from 'styled-components';
import { CtaButton } from '../styledElements/Buttons';
import { textStyles } from '../../abstracts/Mixins';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 2rem 0;

  .input {
    ${textStyles}
    width: 100%;
    border: 0;
    font-size: 1.5rem;
    font-weight: bold;
    display: inline-block;
    padding: 1.5rem 2rem;
    color: var(--sanJuanBlue);
    background-color: var(--white);
    box-shadow: var(--mainShadow);
    border-radius: var(--btnRadius);
  }
`;

const Cta = () => {
  return (
    <Wrapper>
      <input type='text' placeholder='Enter email address' className='input' />
      <CtaButton type='submit' value='Schedule a Demo' />
    </Wrapper>
  );
};

export default Cta;
