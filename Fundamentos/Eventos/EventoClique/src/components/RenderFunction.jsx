//FUNÇÕES DE RENDERIZAÇÃO (FORA DO RETURN)
const RenderFunction = ()=> {
    const renderFunction = (x)=> {
        if(x){
            return <h1>if com x, é verdadeiro</h1>
        } else{
            return <h1>mostre o falso que é else</h1>
        }
    }

    return(
        <div>
            {renderFunction(true)}
            {renderFunction(false)}
        </div>
    )
}
export default RenderFunction