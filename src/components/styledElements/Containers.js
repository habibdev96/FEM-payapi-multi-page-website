import styled from 'styled-components';
import {
  maxWidthSm,
  maxWidthLg,
  sectionSpacingSm,
  sectionSpacingMd,
} from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const Flex = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  ${({ sm }) => sm && `${sectionSpacingSm}`}
  ${({ md }) => md && `${sectionSpacingMd}`};

  ${Responsive.md`
    flex-direction: column;
  `}
`;

export const FlexSm = styled(Flex)`
  ${maxWidthSm}
  text-align: center;
  justify-content: space-around;
`;

export const TwoCol = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
  align-items: ${({ center }) => center && 'center'};
  ${({ sm }) => sm && `${sectionSpacingSm}`}
  ${({ md }) => md && `${sectionSpacingMd}`};

  ${Responsive.md`
    grid-template-columns: 1fr; 
    text-align: center;
  `}

  .info {
    ${Responsive.md`
      order: -1;
    `}
  }
`;

export const ThreeCol = styled(TwoCol)`
  grid-template-columns: repeat(3, 1fr);

  ${Responsive.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
`;
