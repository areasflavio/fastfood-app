import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 24px;

  background: #ffffff;
  max-width: 96%;
  margin: 8px auto;

  border-radius: 16px;

  h2 {
    align-self: flex-start;

    @media (max-width: 514px) {
      align-self: center;
    }
  }
`;

export default Container;
