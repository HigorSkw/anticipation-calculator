import { Form } from "../Form";
import { ResultDiv } from "../ResultDiv";
import { Container } from "./styles";

export const ContainerBox = () => {
  return (
    <Container>
      <div>
        <Form />
      </div>
      <div className="preview--div">
        <ResultDiv />
      </div>
    </Container>
  );
};
