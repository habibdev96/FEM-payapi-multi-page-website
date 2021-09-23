import styled from 'styled-components';
import Responsive from '../../abstracts/Responsive';

export const MainBgPattern = styled.div`
  position: absolute;
  background-color: var(--lightSanJuanBlue);
  opacity: 0.1;
  clip-path: circle(25% at 100% 0);
  height: 100%;
  width: 100%;

  ${Responsive.lg`
    clip-path: circle(10% at 100% 0);
  `}

  ${Responsive.md`
    clip-path: circle(10% at 50% 0);
  `}
`;

export const SecondaryBgPattern = styled(MainBgPattern)`
  clip-path: circle(30% at 0 50%);
  height: 200%;
`;
