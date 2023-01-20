import { ContainerPreview } from "./styles";
import { useContext } from "react";
import { PreviewContext } from "../../contexts/PreviewContext";

export const ResultDiv = () => {
  const { previewResult } = useContext(PreviewContext);

  return (
    <ContainerPreview>
      <h2>Você receberá</h2>
      <p>Amanhã:</p>
      <span>
        R$
        {previewResult["1"] ? previewResult["1"] : 0.0}
      </span>
      <p>Em 15 dias:</p>
      <span>
        R$
        {previewResult["15"] ? previewResult["15"] : 0.0}
      </span>
      <p>Em 30 dias:</p>
      <span>
        R$
        {previewResult["30"] ? previewResult["30"] : 0.0}
      </span>
      <p>Em 90 dias:</p>
      <span>
        R$
        {previewResult["90"] ? previewResult["90"] : 0.0}
      </span>
    </ContainerPreview>
  );
};
