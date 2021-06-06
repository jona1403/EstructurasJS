function insercion(arreglo) {
  var j,aux
  for ( var i = 0; i < arreglo.length; i++ ) {   
    aux = arreglo[i]
    for ( j = i - 1; j >= 0 && arreglo[j] > aux; j-- ){
      arreglo[ j + 1 ] = arreglo[j]
    }
    arreglo[ j + 1 ] = aux
  }
  return arreglo
}