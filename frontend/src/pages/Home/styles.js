import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 256px;

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;

  background: rgb(205, 238, 222);
  background: linear-gradient(
    45deg,
    rgba(205, 238, 222, 1) 0%,
    rgba(235, 248, 242, 1) 50%,
    rgba(226, 245, 236, 1) 100%
  );

  h1 {
    color: #303e5c;
  }

  p {
    color: #8e9ba7;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const PopularRestaurants = styled.ul`
  width: 100%;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  grid-gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    flex: 1;

    img {
      width: 100%;
      min-width: 192px;
      height: 128px;
      object-fit: cover;

      display: block;
      border-radius: 16px;

      align-self: center;
    }
  }

  @media (max-width: 964px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  @media (max-width: 362px) {
    grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  color: #999;

  small {
    position: relative;

    &:last-child {
      padding-left: 14px;
    }

    &:last-child::before {
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
`;
