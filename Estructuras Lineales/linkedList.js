class Nodo{
    constructor(dato){
        this.dato = dato
        this.siguiente = null
    }
}

class listaEnlazada{
    constructor(){
        this.repetidos = false
        this.primero = this.ultimo = null
        this.tamanio = 0
    }

    //Inserta datos al inicio de la lista
    insertarAlInicio(dato){
        if(!this.repetidos && this.buscar(dato)){
            alert("Este dato ya existe, por favor habilite los datos repetidos")
        }else{
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
    }

    //Inserta datos al final de la lista
    insertarAlFinal(dato){
        if(!this.repetidos && this.buscar(dato)){
            alert("Este dato ya existe, por favor habilite los datos repetidos")
        }else{
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
    }

    //Metodo de sobre carga para insertar datos en orden dentro de la lista
    insertarEnOrden(dato){
        if(!this.repetidos && this.buscar(dato)){
            alert("Este dato ya existe, por favor habilite los datos repetidos")
        }else{
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
    }

    //Metodo recursivo para insertar datos a la lista
    _insertarEnOrden(dato, temp){
        if(dato<temp.siguiente.dato){
            var nuevo = new Nodo(dato)
            nuevo.siguiente = temp.siguiente
            temp.siguiente = nuevo
            this.tamanio++
        }else{
            temp.siguiente = this._insertarEnOrden(dato, temp.siguiente)
        }
        return temp
    }

    //Metodo de sobrecarga para actualizar datos
    actualizar(datoActual, datoNuevo){
        if(this.buscar(datoActual)){
            if(this.buscar(datoNuevo) && !this.repetidos){
                alert("No se aceptan valores repetidos")
                return
            }
            if(datoActual == this.primero.dato && this.tamanio == 1){
                this.primero.dato = datoNuevo
                this.ultimo.dato = datoNuevo
            }else if(datoActual == this.primero.dato){
                this.primero.dato = datoNuevo
            }else if(datoActual == this.ultimo.dato){
                this.ultimo.dato = datoNuevo
            }else{
                this.primero = this._actualizar(datoActual, datoNuevo, this.primero)
            }
        }else{
            alert("El valor no existe dentro de la lista")
        }
    }

    //Metodo recursivo para la actualizacion de datos
    _actualizar(datoActual, datoNuevo, temp){
        if(datoActual == temp.dato){
            temp.dato = datoNuevo
        }else{
            temp.siguiente =  this._actualizar(datoActual, datoNuevo, temp.siguiente)
        }
        return temp
    }

    //Metodo para eliminar un dato
    eliminar(dato){
        if(this.tamanio == 1 && this.primero.dato == dato){
            this.primero = this.ultimo = null;
        }else if(this.primero.dato == dato){
            this.primero = this.primero.siguiente;
        }else{
            var aux = this.primero;
            while(aux.siguiente.dato != dato){
                aux = aux.siguiente;
                if(aux.siguiente == null){
                    console.log("El valor a eliminar no existe");
                    return;
                }
            }
            if(aux.siguiente == this.ultimo){
                aux.siguiente = null
                this.ultimo = aux
            }else{
                aux.siguiente = aux.siguiente.siguiente;
            }
        }
        this.tamanio--;
    }

    //Metodo de sobrecarga para la busqueda
    buscar(dato){
        if(this.primero == null){
            return false
        }else if(this.primero.dato == dato || this.ultimo.dato == dato){
            return true
        }else{
            return this._buscar(dato, this.primero.siguiente)
        }
    }

    //Metodo de recursivo para la busqueda
    _buscar(dato, temp){
        if(temp != null){
            if(temp.dato == dato){
                return true
            }else if(temp.siguiente!= null){
                return this._buscar(dato, temp.siguiente)
            }
        }
        return false
    }

    //Metodo imprime los valores de la lista
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
}

a = new listaEnlazada()
a.insertarEnOrden(5)
a.insertarEnOrden(3)
a.insertarEnOrden(24)
a.insertarEnOrden(7)
a.insertarEnOrden(1)
a.insertarEnOrden(20)
a.insertarEnOrden(0)
a.insertarEnOrden(8)
console.log(a.tamanio)
a.recorrer()
