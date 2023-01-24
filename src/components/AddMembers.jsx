// @ts-nocheck
import React, { useState } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { groupMembersState } from '../state/groupMembers';
import { groupNameState } from '../state/groupName';
import { CenteredOverlayForm } from './shared/CenteredOverlayForm';

export const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilValue(groupNameState);
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity()) {
    } else {
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CenteredOverlayForm
      title={`${groupName ?? ''} 그룹에 속한 사람들의 이름을 모두 적어주세요.`}
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <InputTags
        onTags={value => setGroupMembers(value.values)}
        placeholder="이름 간 띄어쓰기를 해주세요"
      />
      {validated && groupMembers.length === 0 && (
        <StyledErrorMessage>
          그룹 멤버들의 이름을 입력해 주세요.
        </StyledErrorMessage>
      )}
    </CenteredOverlayForm>
  );
};

const StyledErrorMessage = styled.span`
  color: red;
`;
