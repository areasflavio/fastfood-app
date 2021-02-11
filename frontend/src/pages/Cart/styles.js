import styled from 'styled-components';
import { darken } from 'polished';

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #999;
    font-size: 64px;
  }

  strong {
    color: #999;
    font-size: 32px;
    margin: 8px 0;
  }

  a {
    background: #f7b90f;
    border: none;
    border-radius: 8px;

    text-decoration: none;
    font-weight: bold;
    color: #fff;
    padding: 16px 64px;

    margin-top: 32px;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.03, '#f7b90f')};
    }

    @media (max-width: 373px) {
      padding: 16px 48px;
    }
  }

  @media (max-width: 375px) {
    padding: 0px 22px;
  }
`;

export const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  svg {
    margin-right: 8px;
    color: #999;

    transition: color 0.2s;

    &:hover {
      color: #f7b90f;
    }
  }
`;

export const DishesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  list-style: none;

  margin: 8px 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 4px 8px;

    & + li {
      border-top: 4px dotted #f0f0f0;
    }

    section {
      display: flex;
      align-items: center;

      flex: 1;
      margin: 0 8px;

      h3 {
        font-size: 32px;
        color: #000;
      }

      small {
        color: #999;
        margin: 0 8px;
      }

      @media (max-width: 560px) {
        justify-content: center;
        width: 100%;
      }
    }

    > h3 {
      color: #999;
    }

    img {
      width: 128px;
      height: 64px;

      border-radius: 8px;
      object-fit: cover;

      @media (max-width: 560px) {
        width: 256px;
        height: 128px;
        margin: 8px 0;
      }

      @media (max-width: 374px) {
        width: 220px;
        height: 110px;
      }
    }

    @media (max-width: 560px) {
      flex-direction: column;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 16px;
  margin-right: 8px;

  button {
    background: #fff;
    border: none;
    color: #999;

    transition: color 0.2s;

    &:hover {
      color: #f7b90f;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  border-top: thick dashed #ebebea;

  padding: 8px 0;

  button {
    display: flex;
    justify-content: center;

    background: #0aaf60;
    border: none;
    border-radius: 8px;

    font-weight: bold;
    color: #fff;
    padding: 16px 64px;

    transition: all 0.2s;

    &:hover {
      background: ${darken(0.03, '#0aaf60')};
    }

    @media (max-width: 560px) {
      order: 1;
      width: 100%;
    }
  }

  div {
    display: flex;
    align-items: baseline;

    strong {
      color: #999;
      margin-right: 8px;
    }

    h2 {
      font-size: 32px;
    }

    @media (max-width: 560px) {
      margin: 8px 0;
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;
