import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 16px;

  background: #ffffff;
  max-width: 96%;
  margin: 8px auto;

  border-radius: 16px;

  h2 {
    align-self: flex-start;
  }
`;

export default Container;
