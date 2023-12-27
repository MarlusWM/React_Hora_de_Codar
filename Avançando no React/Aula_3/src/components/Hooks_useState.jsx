/* HOOK USESTATE MUDA O ESTADO DA VARIÁVEL, FAZ COM QUE RE-RENDERIZE A VARIÁVEL E ASSIM, ATUALIZANDO*/
import  { useState } from 'react'

const Hooks_useState = () => {

    const [numero, setNumero] = useState(15);

return (
    <div>
        <p>Valor: {numero}</p>
        <button onClick={()=> setNumero(25)}>Mudar número</button>
    </div>
)
}

export default Hooks_useState