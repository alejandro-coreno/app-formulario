import { useState } from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
//Importamos los metodos de firebase para poder actualizar y borrar un documento
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const Contacto = ({id, nombre, correo}) => {

    const [tarea, setTarea] = useState(false);

    //Estado para los inputs del formulario
    const[nuevoNombre, setNuevoNombre] = useState(nombre);
    const[nuevoCorreo, setNuevoCorreo] = useState(correo);

    // Funcion para actualizar usuarios
    const updateUser = async (e) => {
        e.preventDefault();
        
        //Controlamos el error en un try al momento de actualizar
        try {
            // actualizar los valores con el metodo doc , solicita tres parametros la bd, la colleccion y el nuevo objeto con los valores
            await updateDoc(doc(db,'usuarios', id), {
                nombre: nuevoNombre,
                correo: nuevoCorreo
            });
            
        } catch (error) {
            console.log('Se presento un error en la actualizacion de usuario', error);
        }

        setTarea(false);
    }


    // Funcion para eliminar el usuario con el metodo deleteDoc
    const eliminarUsuario = async (id) => {

        try {
            await deleteDoc(doc(db, 'usuarios', id));
        }
        catch(error) {
            console.log('Hubo un error en eliminar al usuarios');
            console.log(error);
        }
    }

    return(
        <ContenedorContacto>
            {/* Se muestra el formulario cuando se cambia el estado para renderizar */}
            {
                tarea 
                ? 
                   <form action="" onSubmit={updateUser}>
                        <Input 
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                        />

                        <Input 
                            type="text"
                            name="nombre"
                            placeholder="Correo"
                            value={nuevoCorreo}
                            onChange={(e) => setNuevoCorreo(e.target.value)}
                        />

                        <Boton type="submit">Actualizar</Boton>
                        <Boton type="button" onClick={() => setTarea(!tarea)}>Cerrar</Boton>
                   </form>
                :
                <>
                    {/* Si no se actualiza muestra los usuarios*/}
                    <Nombre>{nombre}</Nombre>
                    <Correo>{correo}</Correo>
                    <Boton onClick={() => setTarea(!tarea)}>Editar</Boton>
                    <Boton onClick={() => eliminarUsuario(id)}>Borrar</Boton>
                </>
            }  
        </ContenedorContacto>
    )
}

const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

export default Contacto;