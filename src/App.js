import './App.css';
import Home from './Pages';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter basename={'/resume'}>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
