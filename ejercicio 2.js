let inicio=["unacadena",3,9,1,10,500,1,10,true]
let arr2 = [78, 55, 'a', 1, 'b', 4, 99, 3, 'c']

function soloNumeros(arr){
    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== 'number') {
            arr.splice(i, 1)
        }        
    }    
}

function ordenar(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                //variable auxiliar
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux 
            }
        
        }        
    }
    console.log(arr)
}
 
soloNumeros(arrreglo)
ordenar(arrreglo)