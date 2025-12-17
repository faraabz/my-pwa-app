import './App.css'
import MainPage from "./MainPage.tsx";
import DocPage from "./DocPage.tsx";
import {useState} from "react";

function App() {
  const [currentPage, setCurrentPage] = useState< 'main' | 'doc' >('main');

  return (
    <>
      {currentPage === 'main' && <MainPage onOpenDoc={() => setCurrentPage('doc')} />}
      {currentPage === 'doc' && <DocPage />}
    </>
  )
}

export default App
