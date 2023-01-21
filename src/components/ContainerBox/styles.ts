import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 70%;

  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 17px -13px 15px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  /* :nth-child(2) {
    background-color: #d2edec;
  } */

  .preview--div {
    background-color: #d1dce32e;
    min-width: 38%;
  }
`;
