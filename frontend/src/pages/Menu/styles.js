import styled from 'styled-components';

export const DishesGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  grid-gap: 24px;

  margin: 16px auto;
  padding: 8px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 128px;
      object-fit: cover;

      display: block;
      border-radius: 16px;

      align-self: center;
    }
  }

  @media (max-width: 397px) {
    grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 8px 0 4px;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #fff;
    border: none;

    color: #999;

    transition: color 0.2s;

    &:hover {
      color: #f7b90f;
    }

    svg {
      margin-left: 2px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    margin-top: 4px;

    svg {
      margin-right: 4px;
    }

    small {
      margin-left: 4px;
      color: #999;
      position: relative;

      padding-left: 14px;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin-left: 5px;
        background: #999;
        position: absolute;
        left: 0px;
        top: 6px;
      }
    }
  }

  strong {
    color: #f7b90f;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
