import "./App.css";
import GlobalStyle from "./styles/global";
import { ContainerBox } from "./components/ContainerBox";
import PreviewProvider from "./contexts/PreviewContext";

function App() {
  return (
    <PreviewProvider>
      <div className="App">
        <GlobalStyle />
        <ContainerBox />
      </div>
    </PreviewProvider>
  );
}

export default App;
