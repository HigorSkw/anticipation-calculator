import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 60%;

  background-color: var(--white);
  border: 1px solid black;

  display: flex;
  justify-content: space-between;

  /* :nth-child(2) {
    background-color: #d2edec;
  } */

  .preview--div {
    background-color: var(--color-gray-ligth);
    min-width: 38%;
  }
`;
