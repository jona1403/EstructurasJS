function Seleccion(arreglo){
    var minimo, aux
    for(i=0; i< arreglo.length; i++){
        minimo = i
        for(j = i+1; j<arreglo.length; j++){
            if(arreglo[minimo] > arreglo[j]){
                minimo = j
            }
        }
        aux = arreglo[i]
        arreglo[i] = arreglo[minimo]
        arreglo[minimo] = aux
    }
    return arreglo
}