class Nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}
class Lista{
    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.tamanio = 0;
    }
    
    insertarAlInicio(dato){
        var nuevo = new Nodo(dato)
        nuevo.anterior = nuevo.siguiente = null;
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.tamanio++;
        }else{
            this.primero.anterior = nuevo;
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
            this.tamanio++;
        }
    }

    insertarAlFinal(dato){
        var nuevo = new Nodo(dato)
        nuevo.anterior = nuevo.siguiente = null;
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.tamanio++;
        }else{
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            this.tamanio++;
        }
    }

    insertarEnOrden(dato){
        var nuevo = new Nodo(dato)
        nuevo.anterior = nuevo.siguiente = null;
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.tamanio++;
        }else if(dato < this.primero.dato || dato == this.primero.dato){
            this.insertarAlInicio(dato)
        }else if(dato > this.ultimo.dato|| dato == this.ultimo.dato){
            this.insertarAlFinal(dato)
        }else{
            this.primero = this._insertarEnOrden(dato, this.primero);
        }
    }

    _insertarEnOrden(dato, temp){
        if(dato < temp.siguiente.dato){
            var nuevo = new Nodo(dato)
            nuevo.anterior = temp
            nuevo.siguiente = temp.siguiente
            temp.siguiente.anterior = nuevo
            temp.siguiente = nuevo
        }else{
            temp.siguiente =  this._insertarEnOrden(dato, temp.siguiente)
        }
        return temp
    }

    eliminar(dato){
        if(this.tamanio == 1 && this.primero.dato == dato){
            this.primero = this.ultimo = null;
        }else if(this.primero.dato == dato){
            this.primero = this.primero.siguiente;
            this.primero.anterior = null;
        }else if(this.ultimo.dato == dato){
            this.ultimo = this.ultimo.anterior;
            this.ultimo.siguiente = null;
        }
        else{
            var aux = this.primero;
            while(aux.siguiente.dato != dato){
                aux = aux.siguiente;
                if(aux.siguiente == null){
                    console.log("El valor a eliminar no existe");
                    return;
                }
            }
            aux.siguiente = aux.siguiente.siguiente;
            aux.siguiente.anterior = aux
        }
        this.tamanio--;
    }
    recorrer(){
        var aux = this.primero;
        if(this.tamanio!= 0){
            while(aux != null){
                console.log(aux.dato)
                aux = aux.siguiente;
            }
        }else{
            console.log("No hay datos que mostrar")
        }
    }
    
    buscarPosicion(posicion){
        var isEncontrado = false;
        if (this.tamanio == 0){
            console.log("No hay elementos en la lista")
        }else {
            if (posicion >= 0 && posicion < this.tamanio){
                let aux = this.primero
                for (let i=0; i<posicion; i++){
                    aux = aux.siguiente
                }
                isEncontrado = true
                return aux.dato
            } else {
                isEncontrado = false
                console.log("Indice no valido, esta fuera de rango.")
            }
        }
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