{/*IMPORTANDO DA PASTA SRC*/}
import { useState } from 'react'
import City from './assets/city.jpg'
{/*importando hook*/}
import Hooks_useState from './components/Hooks_useState'
import List_Render from './components/List_Render'
import Previous_State from './components/Previous_State'
import Props from './components/Props'
import Render_conditional from './components/Render_conditional'
import Desestruturando_props from './components/Desestruturando_props'
import Varias_props_map from './components/Varias_props_map'
import Children_props from './components/Children_props'
import Function_props from './components/Function_props'
import State_lift from './components/State_lift'
import State_lift_change from './components/State_lift_change'
import UserDetails from './components/UserDetails'


function App() {

  const name = 'joaquim';
  const [usuario] = useState("leandro");

  const magic = [
    {id:1, mana:'black', deck:'commander', cards: 99, validate: true},
    {id:2, mana:'red', deck:'pionner', cards: 40, validate:false},
    {id:3, mana:'white', deck:'brawl', cards: 60, validate:true}
]
/*FUNCAO EM PROPS*/
function funcaoProps(){
  alert('FUNÇÃO PROPS DISPARADA');
}

/*STATE LIFT*/
const [message, setMessage] = useState('');
const handleMessage = (msg)=>{
  setMessage(msg);
};

/*DESAFIO 4 USERDETAILS*/
    const details = [
        {id:'1', name:'Fulano', age:30, profession:'Dentista'},
        {id:'2', name:'Ciclano', age:17, profession:'Menor-Aprendiz'}
    ]


  return (
    <>
    <div>
      <h1>Imagem em React</h1>
        {/*IMAGEM EM PUBLIC*/}
        <img src="img1.jpg" alt="" />
    </div>
        {/*IMAGEM EM ASSTES*/}
    <div>
      <img src={City} alt="" />
    </div>

    {/*MOSTRANDO O HOOKS STATE NA TELA*/}
    <div>
      <Hooks_useState/>
    </div>

    {/*RENDERIZANDO LISTAS EM ARRAYS COM MAP*/}
    <div>
      <List_Render/>
    </div>
    {/*MUDANDO O ESTADO PRÉVIO/ORIGINAL DE UM ELEMENTO*/}
    <div>
      <Previous_State/>
    </div>
    {/* CONDICIONAIS EM REACT*/}
    <div>
      <Render_conditional/>
    </div>
    {/*PROPS*/}
    <div>
      <Props titulo='marlus' ident={name} user={usuario}/>
    </div>

    {/*DESTRUCTURING PROPS*/}
    <div>
    <Desestruturando_props brand='volks' color='black' km={100000}/>
    </div>

    {/*RENDERIZANDO LISTAS E PERCORRENDO COM MAP*/}
    <div>
      {magic.map((game)=> (
        <Varias_props_map
        key={game.id}
        manaColor={game.mana}
        deckSelect={game.deck}
        totalCards={game.cards}
        judge={game.validate}
        />
      ))}
    </div>

    {/*CHILDREN PROPS*/}
    <div>
    <Children_props>
      <p>conteúdo incluído pelo app jsx como children props do H1 e H2 do arquivo children props jsx</p>
    </Children_props>
    </div>

    {/*FUNÇÕES COMO PROPS*/}
    <div>
      <Function_props startFunction={funcaoProps}/>
    </div>

    {/*STATE LIFT*/}
    <div>
      <State_lift msg={message}/>
      <State_lift_change handleMsg={handleMessage}/>
    </div>

    {/*DESAFIO 4 USERDETAILS*/}
    <div>
      {details.map((inf)=> (
        <UserDetails
        key={inf.id}
        name={inf.name}
        age={inf.age}
        job={inf.profession}
        />
      ))}
    </div>
    </>
  )
}

export default App