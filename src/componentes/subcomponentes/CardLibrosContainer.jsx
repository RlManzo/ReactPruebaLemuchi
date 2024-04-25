import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Libros from "../pages/Libros";
import data from "../data.json";

function CardLibrosContainer() {
      

    const [books, setBooks] = useState([]);
    const categoria = useParams().categoria //recibo el parametro que me llega desde la url y que envie desde el router
    
//En vez de utilizar un Fetch uso una funcion que ejecuta una promesa y recibe el json en resolve(data)   
    const pedirDatos = () => {
      return new Promise((resolve, reject) => {
          setTimeout( () => {
              resolve(data);
          }, 500)
      })
  }

//LLamo a la funcion dentro de useEffect y realizo el filtrado 
useEffect(() => {
  pedirDatos()
      .then((res) => {
          if (categoria){
            setBooks( res.filter((book) => book.categoria === categoria) );   //si estoy usando la barra de navegacion entonces filtro los productos
          //  setTitulo(categoria);
          } else {
            setBooks(res);  //en caso de que no estoy filtrando muestro todos los productos
           
          }
      })
}, [categoria])


return (

<> {books.map((libros) => {
      return <Libros key={libros.id} libros={libros} />
  })}
  </>
)}


export default CardLibrosContainer



