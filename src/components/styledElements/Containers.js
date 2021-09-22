import styled from 'styled-components';
import {
  maxWidthSm,
  maxWidthLg,
  sectionSpacingSm,
  sectionSpacingMd,
} from '../../abstracts/Mixins';

export const Flex = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  ${({ sm }) => sm && `${sectionSpacingSm}`}
  ${({ md }) => md && `${sectionSpacingMd}`};
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
`;

export const ThreeCol = styled(TwoCol)`
  grid-template-columns: repeat(3, 1fr);
`;
