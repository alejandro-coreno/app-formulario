import styled from "styled-components";
import { useState } from "react";

const Formulario = () => {
    return(
       <form action="">
            <Input 
                type="text"
                name="nombre"
                value={1}
                onChange={1}
            />
       </form>
    );
}


const Input = styled.input`
    background: blue
`

export default Formulario;