const myArr = [
    {
        nombre: "juan carlos",
        apellido: "ramirez lopez",
        edad: 37
    },
    {
        nombre: "jorge alberto",
        apellido: "bedoya alvarez",
        edad: 24
    },
    {
        nombre: "Beatriz",
        apellido: "ruiz",
        edad: 35
    },
]

async function myfun (){
    setTimeout(()=>{
        const resultado = await  myArr;
        console.log(resultado)


    }, 1000)
}

    
 myfun();