import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  background: #ffffff;
  max-width: 96%;
  margin: 32px auto 8px;

  border-radius: 16px;
`;

export const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 24px;

  svg {
    margin-right: 16px;
  }

  strong {
    margin-right: 4px;
  }
`;

export const SearchInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fafaf7;
  padding: 16px;
  border-radius: 16px;

  flex: 1;
  margin: 0 64px;

  input {
    flex: 1;
    border: none;
    background: #fafaf7;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;

  a {
    background: #fef5da;
    margin: 8px;
    padding: 16px;
    border-radius: 8px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#fef5da')};
    }

    span {
      text-decoration: none;
      position: absolute;

      background: #0aaf60;
      color: #fff;
      font-size: 12px;
      font-weight: bold;

      padding: 4px 8px;
      border-radius: 8px;

      text-align: center;
      top: 0;
      right: 4px;
    }
  }
`;
