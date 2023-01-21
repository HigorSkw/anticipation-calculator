import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  padding: 3rem;

  h1 {
    color: var(--color-gray);
    font-weight: 500;
    font-size: 1.8rem;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    font-size: 1rem;
    color: var(--color-gray);
    min-width: 200px;
    margin-top: 10px;
  }

  input {
    height: 37px;
    width: 100%;
    border: 1px solid var(--color-gray-ligth);
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  span {
    opacity: 0.7;
    font-size: 0.7rem;
    width: 100%;
    display: flex;
  }
`;
