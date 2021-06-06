class Nodo{
    constructor(dato){
        this.dato = dato
        this.izq = null
        this.der = null
    }
}

class ArbolBB{
    constructor(){
        this.raiz = null
    }

    agregar(dato){
        this.raiz = this._agregar(dato, this.raiz)
    }

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

    enOrden(temp){
        if(temp != null){
            this.enOrden(temp.izq)
            console.log(temp.dato)
            this.enOrden(temp.der)
        }
    }
}

a = new ArbolBB()

for(i=5; i>=0; i--){
    a.agregar(i)
}

for(i = 6; i< 10; i++){
    a.agregar(i)
}

console.log(a.buscar(0, a.raiz))