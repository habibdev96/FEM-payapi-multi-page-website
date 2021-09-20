import styled from 'styled-components';
import { SubHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';

const Article = styled.article`
  text-align: center;

  .icon {
    width: 10rem;
    margin-bottom: 2rem;
  }
`;

const HomeFeatureCard = ({ icon, title, description }) => {
  return (
    <Article>
      <img src={icon} alt={title} className='icon' />
      <SubHeading>{title}</SubHeading>
      <Paragraph>{description}</Paragraph>
    </Article>
  );
};

export default HomeFeatureCard;
