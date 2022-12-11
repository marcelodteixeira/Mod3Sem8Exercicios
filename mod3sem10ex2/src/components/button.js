function botaoContador(param){
    const {classe,funcao,onclick,simbolo} = param;
    return <button className = {classe} onClick={()=>{onclick({funcao})}}>{simbolo}</button>
}

export default botaoContador;