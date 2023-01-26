import React from 'react';
import { Table } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { expensesState } from '../state/expenses';
import { OverlayWrapper } from './shared/OverlayWrapper';

const ExpenseTable = () => {
  const expenses = useRecoilValue(expensesState);

  return (
    <OverlayWrapper
      padding=""
      minHeight="73vh"
    >
      <StyledTable
        data-testid="expenseList"
        borderless
        hover
        responsive
      >
        <thead>
          <tr>
            <th>날짜</th>
            <th>내용</th>
            <th>결제자</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ date, desc, amount, payer }, index) => (
            <tr key={`expense-${index}`}>
              <td>{date}</td>
              <td>{desc}</td>
              <td>{payer}</td>
              <td>{amount}원</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </OverlayWrapper>
  );
};

export default ExpenseTable;

const StyledTable = styled(Table)`
  thead {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #6b3da6;
    text-align: center;
  }
  tbody {
    font-weight: 400;
    font-size: 24px;
    line-height: 59px;
    text-align: center;
  }
`;
