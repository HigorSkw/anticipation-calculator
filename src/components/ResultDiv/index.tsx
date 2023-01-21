import { ContainerPreview } from "./styles";
import { useContext } from "react";
import { PreviewContext } from "../../contexts/PreviewContext";

export const ResultDiv = () => {
  const { previewResult } = useContext(PreviewContext);

  return (
    <ContainerPreview>
      <h2>Você receberá: </h2>
      <div className="preview-detail">
        <p>Amanhã:</p>
        <span>
          R$
          {previewResult["1"] ? Number(previewResult["1"]).toFixed(2) : 0.0}
        </span>
      </div>
      <div className="preview-detail">
        <p>Em 15 dias:</p>
        <span>
          R$
          {previewResult["15"] ? Number(previewResult["15"]).toFixed(2) : 0.0}
        </span>
      </div>
      <div className="preview-detail">
        <p>Em 30 dias:</p>
        <span>
          R$
          {previewResult["30"] ? Number(previewResult["30"]).toFixed(2) : 0.0}
        </span>
      </div>
      <div className="preview-detail">
        <p>Em 90 dias:</p>
        <span>
          R$
          {previewResult["90"] ? Number(previewResult["90"]).toFixed(2) : 0.0}
        </span>
      </div>
    </ContainerPreview>
  );
};
