import React from 'react';
import { Container, Button, Row, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { OverlayWrapper } from './OverlayWrapper';

export const CenteredOverlayForm = ({
  title,
  children,
  validated,
  handleSubmit,
}) => {
  return (
    <StyledCentralizedContainer>
      <StyledLogo>Dutch Pay</StyledLogo>

      <OverlayWrapper>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledCentralizedContents>
              <Row className="align-items-start">
                <StyledH2>{title}</StyledH2>
              </Row>
              <Row className="align-items-center">{children}</Row>
              <Row className="align-items-end">
                <StyledSubmitButton>저장</StyledSubmitButton>
              </Row>
            </StyledCentralizedContents>
          </Form>
        </Container>
      </OverlayWrapper>
    </StyledCentralizedContainer>
  );
};

const StyledLogo = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;

  letter-spacing: 10px;

  color: #7322f4;
  margin-bottom: 40px;
`;

const StyledCentralizedContainer = styled(Container)`
  width: 50vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

const StyledH2 = styled.h2`
  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;

  font-weight: 700;
  line-height: 35px;
`;

const StyledCentralizedContents = styled(Row)`
  height: 60vh;
  align-items: center;
  justify-content: center;
`;

const StyledSubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  background-color: #6610f2;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #6610f2;
    filter: brightness(80%);
  }
`;
