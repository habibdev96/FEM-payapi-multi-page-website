import styled from 'styled-components';
import { AboutHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';

const Article = styled.article`
  margin: 3rem 0;
`;

const AboutCompany = ({ title, description }) => {
  return (
    <Article>
      <AboutHeading>{title}</AboutHeading>
      <Paragraph>{description}</Paragraph>
    </Article>
  );
};

export default AboutCompany;
