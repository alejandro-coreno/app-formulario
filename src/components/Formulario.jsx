import styled from "styled-components";
import { useState } from "react";
// Traemos la variable de conexion para la bd
import db from "./../firebase/firebaseConfig"

//Agregamos las funciones de firebase para poder agregar nuevos usuarios dentro de la collecion
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
    {/* Creamos el estado para cada input del formulario */}
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    {/* Funcion que enviara la data a la bd */}
    const sendData = async (e) => {
        e.preventDefault();

        {/* Manejamos los errores con el try catch*/}
        try{
            {/* con el metodo addDoc permite agregar un documento en la colleccion de usuarios , solicita dos argumentos el primero la coleccion y el segundo el objeto de los datos añadir */}

            {/* Como es asincrono debemo esperar a que firebase guarde los datos y despues restablecera los valores de los inputs */}
            await addDoc(collection(db,'usuarios'), {
                correo: correo,
                nombre: nombre
            })
        }catch (error){
            console.log('Hubo un error al guardar el documento');
            console.log(error)
        }


        setNombre('');
        setCorreo('');
    }


    return(
       <form action="" onSubmit={sendData}>
            <Input 
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value) }
                placeholder="Nombre"
            />

            <Input 
                type="email"
                name="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value) }
                placeholder="Correo"
            />

            <Boton type="submit">Agregar</Boton>

       </form>
    );
}


const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;

    &:focus{
        border: 2px solid #3d76e9;
    }
`

const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #c4c4c4;
    color: #fff;
    font-size: 12px;

    &:hover{
        background: #3d76e9;
    }
`

export default Formulario;


