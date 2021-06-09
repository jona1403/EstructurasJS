//Variable auxiliar global
let valor = 0

//Clase nodo del arbol binario de busqueda
class Nodo{
    constructor(dato){
        this.dato = dato
        this.izq = null
        this.der = null
    }
}

//Clase Arbol binario de busqueda
class ArbolBB{
    constructor(){
        this.repetidos = false
        this.raiz = null
    }
    //Método de sobrecarga para ingresar valores al arbol
    agregar(dato){
        if(!this.repetidos && this.buscar(dato,  this.raiz)){
            alert("Este dato ya existe, por favor habilite los datos repetidos")
        }else{
            this.raiz = this._agregar(dato, this.raiz)
        }
    }

    //Método recursivo para agregar valores al arbol 
    _agregar(dato, temp){
        if(temp == null){
            return temp = new Nodo(dato)
        }
        if(dato < temp.dato){
            temp.izq = this._agregar(dato, temp.izq) 
        }else{
            temp.der = this._agregar(dato, temp.der)
        }
        return temp
    }

    //Metodo de busqueda dentro del arbol, devuelve un valor booleano
    buscar(dato, temp){
        if(temp != null){
            if(dato == temp.dato){
                return true
            }else if(dato < temp.dato){
                return this.buscar(dato, temp.izq)
            }else{
                return this.buscar(dato, temp.der)
            }
        }
        return false
    }

    //Método de sobrecarga para eliminar
    eliminar(dato){
        this.raiz = this._eliminar(dato, this.raiz)
    }

    //Método recursivo para eliminar
    _eliminar(dato, temp){
        if(temp != null){
            if(dato == temp.dato){
                if(temp.izq == null && temp.der == null){
                    return temp = null
                }else if(temp.izq != null){
                    temp.izq = this.buscarIzquierda(temp.izq)
                    temp.dato = valor
                }else{
                    temp.der = this.buscarDerecha(temp.der)
                    temp.dato = valor
                }
            }else if(dato < temp.dato){
                temp.izq = this._eliminar(dato, temp.izq)
            }else{
                temp.der = this._eliminar(dato, temp.der)
            }
            return temp
        }
    }

    //Este método buscar el valor mas a la derecha del nodo izquierdo, se utiliza para el método eliminar
    buscarIzquierda(temp){
        if(temp.der == null){
            valor = temp.dato
            return temp.izq
        }
        temp.der = this.buscarIzquierda(temp.der)
        return temp
    }

    //Este método buscar el valor mas a la izquierda del nodo derecho, se utiliza para el método eliminar
    buscarDerecha(temp){
        if(temp.izq == null){
            valor = temp.dato
            return temp.der
        }
        temp.izq = this.buscarDerecha(temp.izq)
        return temp
    }

    
    actualizar(dato, datoNuevo){
        
    }

    _actualizar(dato, datoNuevo,temp){
        
    }

    //Imprime los valores en pre orden
    enPreOrden(temp){
        if(temp != null){
            console.log(temp.dato)
            this.enOrden(temp.izq)
            this.enOrden(temp.der)
        }
    }

    //Imprime los valores en orden
    enOrden(temp){
        if(temp != null){
            this.enOrden(temp.izq)
            console.log(temp.dato)
            this.enOrden(temp.der)
        }
    }

    //Imprime los valores en post orden
    enPostOrden(temp){
        if(temp != null){
            this.enOrden(temp.izq)
            this.enOrden(temp.der)
            console.log(temp.dato)
        }
    }
}

a = new ArbolBB()

a.agregar(50)
a.agregar(25)
a.agregar(20)
a.agregar(40)
a.agregar(75)
a.agregar(60)
a.agregar(80)

a.enOrden(a.raiz)