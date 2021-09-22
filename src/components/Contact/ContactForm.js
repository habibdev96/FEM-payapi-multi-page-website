import styled from 'styled-components';
import Paragraph from '../styledElements/Paragraphs';
import { FormButton } from '../styledElements/Buttons';
import { textStyles } from '../../abstracts/Mixins';

const StyledForm = styled.form`
  .form-control {
    margin: 2rem 0;
    border-bottom: 0.1rem solid #f2f2f2;
  }

  .input,
  .textarea {
    ${textStyles}
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 1.5rem;
    padding: 1.5rem 0;
    width: 100%;
    resize: none;
    color: var(--mirageBlue);
  }

  .textarea {
    height: 20vh;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem 0;
  }
`;

const ContactForm = () => {
  return (
    <StyledForm>
      <div className='form-control'>
        <input type='text' className='input' placeholder='Name' />
      </div>
      <div className='form-control'>
        <input type='text' className='input' placeholder='Email' />
      </div>
      <div className='form-control'>
        <input type='text' className='input' placeholder='Company Name' />
      </div>
      <div className='form-control'>
        <input type='text' className='input' placeholder='Title' />
      </div>
      <div className='form-control'>
        <textarea className='textarea' placeholder='Message'></textarea>
      </div>
      <div className='checkbox-container'>
        <input type='checkbox' className='checkbox' />
        <Paragraph>
          Stay up-to-date with company announcements and updates to our API
        </Paragraph>
      </div>
      <FormButton type='submit' value='Submit' />
    </StyledForm>
  );
};

export default ContactForm;
