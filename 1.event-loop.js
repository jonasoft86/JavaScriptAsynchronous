
const second = () => {

    setTimeout(()=>{
        console.log('Async code')
    },2000)

}

const first = () => {
    
    console.log('First');
    second();
    console.log('End')

}

first();