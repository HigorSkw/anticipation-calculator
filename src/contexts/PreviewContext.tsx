import { api } from "../services";

import {
  SetStateAction,
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
} from "react";

interface IPreviewResult {
  1: string;
  15: string;
  30: string;
  90: string;
}

interface IAntecipationProviderData {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  installments: string;
  setInstallments: Dispatch<SetStateAction<string>>;
  percent: string;
  setPercent: Dispatch<SetStateAction<string>>;
  days?: Array<string>;
  setDays: Dispatch<SetStateAction<Array<string>>>;
  previewResult: IPreviewResult;
}

interface IPreviewProviderProps {
  children: ReactNode;
}

export const PreviewContext = createContext<IAntecipationProviderData>(
  {} as IAntecipationProviderData
);

const PreviewProvider = ({ children }: IPreviewProviderProps) => {
  const [value, setValue] = useState("");
  const [installments, setInstallments] = useState("");
  const [percent, setPercent] = useState("");
  const [days, setDays] = useState([] as Array<string>);
  const [previewResult, setPreviewResult] = useState({} as IPreviewResult);

  useEffect(() => {
    const data = {
      amount: value,
      installments: installments,
      mdr: percent,
    };

    if (value && installments && percent) {
      const consult = async () => {
        try {
          const res = await api.post("", data);
          setPreviewResult(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      consult();
    }
  }, [installments, value, percent]);

  return (
    <PreviewContext.Provider
      value={{
        value,
        setValue,
        installments,
        setInstallments,
        percent,
        setPercent,
        days,
        setDays,
        previewResult,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewProvider;
