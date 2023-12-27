
//no arquivo app.jsx é iniciado através de uma função. Mas no mercado de trabalho é usado normalmente uma constante com o nome do arquivo com o valor sendo uma arrow function

const FirstComponents = ()=> {
    return ( //padrão ter a função e o retorno
    <div>
        <h1>Meu primeiro Componente</h1>
    </div>
    )
}
//depois de tudo, preciso exportar o arquivo para leitura
export default FirstComponents;
//PRÓXIMO PASSO É A IMPORTAÇÃO NO ARQUIVO APP.JSX