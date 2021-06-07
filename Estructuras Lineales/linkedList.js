class Nodo{
    constructor(dato){
        this.dato = dato
        this.siguiente = null
    }
}

class listaEnlazada{
    constructor(){
        this.primero = this.ultimo = null
        this.tamanio = 0
    }

    insertarAlInicio(dato){
        var nuevo = new Nodo(dato)
        nuevo.siguiente = null
        if(this.primero == null){
            this.primero = nuevo
            this.ultimo = this.primero
        }else{

            nuevo.siguiente = this.primero
            this.primero = nuevo
        }
        this.tamanio++
    }

    insertarAlFinal(dato){
        var nuevo = new Nodo(dato)
        nuevo.siguiente = null
        if(this.primero == null){
            this.primero = nuevo
            this.ultimo = this.primero
        }else{
            this.ultimo.siguiente = nuevo
            this.ultimo = nuevo
        }
        this.tamanio++
    }

    insertarEnOrden(dato){
        if(this.primero == null){
            var nuevo = new Nodo(dato)
            nuevo.siguiente = null
            this.primero = nuevo
            this.ultimo = this.primero
            this.tamanio++
        }else if(dato < this.primero.dato || dato == this.primero.dato){
            this.insertarAlInicio(dato)
        }else if(dato > this.ultimo.dato|| dato == this.ultimo.dato){
            this.insertarAlFinal(dato)
        }else{
            this.primero = this._insertarEnOrden(dato, this.primero)
        }
    }

    _insertarEnOrden(dato, temp){
        if(dato<temp.siguiente.dato){
            nuevo = new Nodo(dato)
            nuevo.siguiente = temp.siguiente
            temp.siguiente = nuevo
            this.tamanio++
        }else{
            temp.siguiente = this._insertarEnOrden(dato, temp.siguiente)
        }
        return temp
    }

    eliminar(dato){
        if(this.tamanio == 1 && dato == this.primero.dato){
            this.primero = this.ultimo = null
            this.tamanio--
        }else if(this.primero.dato == dato){
            this.primero = this.primero.siguiente
            this.tamanio--
        }else{
            this.primero = this._eliminar(dato, this.primero)
        }
    }

    _eliminar(dato, temp){
        if(dato = temp.siguiente.dato){
            if(temp.siguiente == this.ultimo){
                temp.siguiente = null
                this.ultimo = temp
            }else{
                temp.siguiente = temp.siguiente.siguiente
            }
            this.tamanio--
        }else{
            temp.siguiente =  this._eliminar(dato, temp.siguiente)
        }
        return temp
    }

    actualizar(datoActual, datoNuevo){}

    _actualizar(datoActual, datoNuevo, temp){
        return temp
    }

    buscar(dato){
        if(this.primero.dato != dato && this.ultimo.dato != dato){
            var aux = this.primero;
            while(aux.siguiente.dato != dato){
                aux = aux.siguiente;
                if(aux.siguiente == null){
                    return false;
                }
            }
        }
        return true
    }
}