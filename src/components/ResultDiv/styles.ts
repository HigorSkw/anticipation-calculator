import styled from "styled-components";

export const ContainerPreview = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  color: var(--color-text);
  height: 100%;

  h2 {
    font-size: 22px;
    font-style: italic;
    width: 75%;
  }

  h2:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1rem;
    border-top: 0.3px solid var(--color-text);
  }

  .preview-detail {
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;

    span {
      font-weight: 700;
    }
  }
`;
