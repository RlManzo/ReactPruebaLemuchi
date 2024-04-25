import { BrowserRouter } from "react-router-dom"
import Header from "./componentes/Header.jsx"
import { Routes, Route} from "react-router-dom"
import Usuario from "./componentes/pages/Usuario.jsx"
import Main from "./componentes/Main.jsx"
import CardLibrosContainer from "./componentes/subcomponentes/CardLibrosContainer.jsx"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

                <Route path="/" element={<Main/>}/>

                <Route path="/Libros" element={<CardLibrosContainer/>}/> {/*Muesto todos los libros en esta ruta que responde al CardLibrosContainer porque no le estoy pasando ningun parametro */}

                <Route path="category/:categoria" element={<CardLibrosContainer/>}/>  {/**paso la categoria a filtrar en el componente CardLibrosContainer(en este componente es al que estoy indicando que enviar un parametro) */}

                <Route path="/Usuario" element={<Usuario/>}/>

              </Routes>
    </BrowserRouter>

  ) 
}

export default App
 