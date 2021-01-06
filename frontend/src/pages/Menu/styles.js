import styled from 'styled-components';

export const DishesGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

  small {
    margin-left: 4px;
    color: #999;
  }
`;
