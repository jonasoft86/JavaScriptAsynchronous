/**
 * Es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. 
 * 
 * Callback a Promesa
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


 getIds
 .then(Ids=>{
    console.log(Ids)
    return getReceta(Ids[2])
 })
 .then(receta=>{
    console.log(receta)
    return getRelacionado('Jonathan');
 })
 .then(receta=>{
    console.log(receta)
 })
 .catch(error => {
    console.log('Error!!');
});