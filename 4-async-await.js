/**
 * Promesa a Async-Await
 */

const getIds = new Promise((resolver,rechazar)=>{

    setTimeout(()=>{
        resolver([23,34,53,66]);
    },1500)
 })

 const getReceta = recID => {
    return new Promise((resolver,rechazar)=>{
        setTimeout((ID)=>{
            const receta = {titulo: 'Salsa de Tomate',publicador: 'Jhon Connor'};
            resolver(`${ID}: ${receta.titulo}`);
        },1500, recID)
     })
 }

const getRelacionado = publicador => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const receta = {titulo: 'Pizza Italiana',publicador: 'Jhon'};
            resolve(`${pub}: ${receta.titulo}`);
        }, 1500, publicador);
    });
};

async function getRecetaMaker(){
    const iDs = await getIds;
    console.log(iDs)

    const receta = await getReceta(iDs[2]);
    console.log(receta)

    const relacionado = await getRelacionado('Jonathan');
    console.log(relacionado)

    return receta;
}

getRecetaMaker().then(resultado=>{
    console.log(`${resultado}`)
});