
const Props = (props) => {

  let {user, ident, titulo} = props;

    return (
      <div>
        <h2>Nome com useState {props.user}, 
        nome com variável {props.ident},
        nome com template {props.titulo}
        </h2>
        
      </div>
    )
  }

export default Props