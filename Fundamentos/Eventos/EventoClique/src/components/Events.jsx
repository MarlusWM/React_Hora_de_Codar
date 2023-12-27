//EVENTO DE CLIQUE
const Events = ()=> {
    const handleMyEvent = ()=> {
        alert('OLÁ');
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=> alert('OLÁ 2')}>Clique 2</button>
            </div>
        </div>
    )
}

export default Events