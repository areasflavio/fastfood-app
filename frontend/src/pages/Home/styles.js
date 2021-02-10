import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 256px;

  background: rgb(205, 238, 222);
  background: linear-gradient(
    45deg,
    rgba(205, 238, 222, 1) 0%,
    rgba(235, 248, 242, 1) 50%,
    rgba(226, 245, 236, 1) 100%
  );

  border-radius: 8px;
  margin-bottom: 24px;

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
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style: none;

  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    img {
      width: 192px;
      height: 128px;
      object-fit: cover;

      display: block;
      border-radius: 16px;

      align-self: center;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  color: #999;

  small {
    position: relative;
  }

  small:last-child {
    padding-left: 14px;
  }

  small:last-child::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-left: 5px;
    background: #999;
    position: absolute;
    right: 21px;
    top: 5px;
  }
`;
