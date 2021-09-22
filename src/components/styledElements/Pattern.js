import styled from 'styled-components';

export const MainBgPattern = styled.div`
  position: absolute;
  background-color: var(--lightSanJuanBlue);
  opacity: 0.1;
  clip-path: circle(25% at 100% 0);
  height: 100%;
  width: 100%;
`;

export const SecondaryBgPattern = styled(MainBgPattern)`
  clip-path: circle(30% at 0 50%);
  height: 200%;
`;
