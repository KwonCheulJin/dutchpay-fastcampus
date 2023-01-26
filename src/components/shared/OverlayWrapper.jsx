// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

export const OverlayWrapper = ({ children, padding, minHeight }) => {
  return (
    <StyledContainer
      padding={padding}
      minHeight={minHeight}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: ${props => props.padding || '5vw'};
  background: #fcfeff;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: ${props => props.minHeight || '0'};
`;
