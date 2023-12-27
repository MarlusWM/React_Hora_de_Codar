import {useState} from 'react'

const Previous_State = () => {

    const [usuario, setUsuario] = useState([
        {id:1, name: 'Marlus', age:34},
        {id:2, name:'Leandro', age:33}
    ]);

    const deleteRandom = ()=> {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsuario((prevUsuario)=>{
            return prevUsuario.filter((objeto)=> randomNumber !== objeto.id);
        });
    };
return (
    <div>
        {usuario.map((objetos)=>(
            <li key={objetos.id}>
                {objetos.name} - {objetos.age}
            </li>
        ))}
        <button onClick={deleteRandom}>Deletar nome</button>
    </div>
)
}

export default Previous_State