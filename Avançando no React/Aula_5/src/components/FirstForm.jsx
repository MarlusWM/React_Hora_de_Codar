import { useState } from 'react'
import './FirstForm.css'

const FirstForm = () => {

  const [name, setName] = useState();

  const handleName = (e)=> {
    setName(e.target.value);
  };
  /*console.log(name);*/

  const handleSubmit = (event)=> {
        event.preventDefault();  
    console.log(name);
    console.log('enviando');

  };

  return (
    <>
{/*CRIANDO UM FORMULARIO*/}
    <div>
      <form>
          <label htmlFor="name1">Nome:</label>
          <input type="text" name='name1' placeholder='Digite seu nome' />  
        <input type="button" value="Enviar" />
      </form>
    </div>

{/*MAIS USADO E DE ACORDO COM A DOCUMENTAÇÃO*/}
    <div>
      <label>
        <p>E-mail:</p>
        <input type='email' name='email' placeholder='Digite seu email' />
      </label>
      <input type="button" value="Enviar" />
    </div>

{/*MANIPULANDO PROPRIEDADES INPUTS*/}
    <div>
      <form>
        <label>
          <p>Nome com manipulação de Inputs</p>
          <input type="name" name="name"  placeholder='Digite seu nome' onChange={handleName}/>
          {/*poderia fazer da seguinte forma:
            <input type="name" name="name"  placeholder='Digite seu nome' onChange={(e)=> setName(e.target.value)}/>*/ }
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>

{/* ENVIO DE FORMULÁRIO*/}
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Com submit para envio de dados</p>
          <input type="text" name="name" onChange={handleName} placeholder='Seu nome'/>
        </label>
        <input type="submit" value="Submeter" />
      </form>
    </div>
    </>
  )
}

export default FirstForm