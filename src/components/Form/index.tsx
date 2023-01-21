import { ContainerForm } from "./styles";
import { useContext } from "react";
import { PreviewContext } from "../../contexts/PreviewContext";

export const Form = () => {
  const {
    value,
    setValue,
    installments,
    setInstallments,
    percent,
    setPercent,
  } = useContext(PreviewContext);

  return (
    <ContainerForm>
      <h1>Simule sua Antecipação</h1>

      <label>
        Informe o valor da venda *
        <input
          placeholder="Digite aqui"
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
      </label>

      <label>
        Em quantas parcelas *
        <input
          placeholder="Digite aqui"
          value={installments}
          onChange={(ev) => setInstallments(ev.target.value)}
        />
      </label>
      <span>Máximo de 12 parcelas</span>
      <label>
        Informe o percentual de MDR *
        <input
          placeholder="Digite aqui"
          value={percent}
          onChange={(ev) => setPercent(ev.target.value)}
        />
      </label>
    </ContainerForm>
  );
};
