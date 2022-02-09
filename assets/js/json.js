let personajesData = (async () =>{
    const resultado = await fetch("./dbz.json");
    const data = await resultado.json();
    console.log(data);
    return data
})();
