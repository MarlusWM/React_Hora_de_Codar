

const UserDetails = ({name, age, job}) => {
    const cnh = age >= 18 ? (<p>Habilitado para dirigir</p>) : (<p>Menor de idade</p>)
  return (
    <div>
        <p>O {name} possui {age} e sua ocupação é {job}. Obs: {cnh}</p>
    </div>
  )
}

export default UserDetails