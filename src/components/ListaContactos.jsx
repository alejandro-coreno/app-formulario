import { useState, useEffect } from "react";
import Contacto from "./Contacto";
import styled from "styled-components";
// Importamos la conexion de la bd para poder realizar operaciones
import db from "../firebase/firebaseConfig";
// collection permite ingresar a una coleccion y onsnapshot devulve los valores actualizados
import { collection, onSnapshot } from "firebase/firestore";

const ListaContactos = () => {

    {/* Creamos el  estado el cual guardara los usuarios registrados con useState*/}
    const [usuarios, setUsuarios] = useState([]);

    {/* useEffect permite cargar la informacion cuando se inicialice el componente*/}
    useEffect(() => {
        {/* Recibe 2 argumentos 
            1.- colleccion a la que va leer datos
            2.- Funcion que se ejecuta cada que se realiza un cambio
        */}
        onSnapshot(
            collection(db, 'usuarios'), 
            (snapshot) => {
                // console.log(snapshot.docs[0].data());

                {/* Se recorre cada  usuario y se agrega al arreglo */}
                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {
                        id: documento.id,
                        ...documento.data()
                    }
                })

                {/* Agregamos el arreglo de usuarios a nuestro estado */}
                setUsuarios( arregloUsuarios );
                
            }
        )
    },[])

    return(
        //Validamos si el usuario tiene contenido
        usuarios.length > 0 &&
        <ContenedorContactos>
            {usuarios.map((usuario) => (
                <Contacto 
                    key={usuario.id}
                    id={usuario.id}
                    nombre={usuario.nombre}
                    correo={usuario.correo}
                />
            ))}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`

export default ListaContactos;