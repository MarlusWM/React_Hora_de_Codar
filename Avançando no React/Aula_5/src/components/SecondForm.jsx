import { useState } from "react"


const SecondForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('admin');

    const handleNam = (event)=> {
        setName(event.target.value);
    };
    const handleEmail = (obj)=> {
        setEmail(obj.target.value);
    };
    const handleBio = (b)=> {
        setBio(b.target.value);
    };
    const handleRole = (r)=> {
        setRole(r.target.value);
    };

    const handleSend = (e)=> {
        e.preventDefault();
        console.log('enviado');
        console.log(name, email, bio, role);

        /*LIMPAR FORMULÁRIO*/
        setName('');
        setEmail('');
        setBio('');
        setRole('');
    };
  return (
    <>
    {/*CONTROLANDO INPUTS E SEUS ESTADOS DO BD (começa no app.jsx)*/}
    <div>
        <form onSubmit={handleSend}>
            <label htmlFor="name">
                <p>CONTROLANDO INPUT E SEU ESTADO EM DB</p>
                <input type="text" name="nome" placeholder="Seu nome" onChange={handleNam} value={name}/>
            </label>
            <input type="email" name="email" onChange={handleEmail} value={email} />
            <label>
                <textarea name="bio" placeholder="Uma descrição" onChange={handleBio}></textarea>
            </label>
            <br />
            <span>FUNÇÃO: </span>        
            <select name="role" onChange={handleRole} value={role}>
                <option value="admin">admin</option>
                <option value="user">usuário</option>
                <option value="editor">editor</option>
            </select>
            <br />
            <input type="submit"  onChange={handleBio} value="Submeter" />
            
        </form>
    </div>
    </>
  )
}

export default SecondForm