import styled from "styled-components";
// Importamos la conexion de la bd para poder realizar operaciones
import db from "../firebase/firebaseConfig";
import { useState } from "react";
import Contacto from "./Contacto";

const ListaContactos = () => {

    {/* Creamos el  estado el cual guardara los usuarios registrados con useState*/}

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nombre: 'Alejandro',
            correo: 'correo@correo.com'
        },

        {
            id: 2,
            nombre: 'Alex',
            correo: 'correo2@correo.com'
        }
    ]);

    return(
        //Validamos si el usuario tiene contenido
        usuarios.length > 0 &&
        <ContenedorContactos>
            {usuarios.map((usuario) => (
                <Contacto 
                    key={usuario.id}
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