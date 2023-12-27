import {useState} from 'react'

const List_Render = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Otavio']);
    const [user] = useState([
        {id:1, name: 'Marlus', age:34},
        {id:2, name:'Leandro', age:33}
]);

return (
    <div>
        <ul>
            {list.map((item, i)=> (
            <li key={i}> {item} </li>
            ))}
        </ul>
        {/*usando os id de objetos*/}
        <div>
            {user.map((objetos)=>(
                <li key={objetos.id}>
                    O nome é {objetos.name} - a idade é {objetos.age}
                </li>
            ))}
        </div>
    </div>

)
}

export default List_Render