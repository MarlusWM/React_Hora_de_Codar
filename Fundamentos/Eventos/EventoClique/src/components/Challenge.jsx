const Challenge = ()=> {
    const a = 1
    const b = 2

    const somar = ()=> {
        var soma = a + b;
        alert(soma);
    }

    return(
    <div>
        <h1>a: {a}</h1>
        <h1>b: {b}</h1>
        <button onClick={somar}>Somar</button>
    </div>
    )
}

export default Challenge