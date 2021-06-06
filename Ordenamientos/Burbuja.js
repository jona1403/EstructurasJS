function burbuja(arreglo){
    var aux = 0
    for(i=0; i< arreglo.length-1; i++){
        for(j=i+1; j<arreglo.length; j++){
            if(arreglo[i] > arreglo[j]){
                aux = arreglo[i]
                arreglo[i] = arreglo[j]
                arreglo[j] = aux
            }
        }
    }
    return arreglo
}