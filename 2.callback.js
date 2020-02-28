/**
 * Son funciones que se pasan como parámetros de otras funciones y que se ejecutan dentro de éstas.
 */
function getReceta(){
    
    setTimeout(()=>{
        const recetaId = [23,34,53,66];
        console.log(recetaId)

        setTimeout((id)=>{
            const receta = {
                titulo: 'Salsa de tomate',
                publicador: 'Omar'
            };
            console.log(`${id}`);

            setTimeout((publicador)=>{
                const receta = {
                    titulo: 'Pizza Italiana',
                    publicador: 'Jhon'
                };
                console.log(receta)
            },1500,receta.publicador);

        },1500,recetaId[2]);

    },1500);
}

getReceta();