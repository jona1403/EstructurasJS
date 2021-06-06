class Nodo{
    constructor(dato){
        this.dato = dato;
        this.altura = 0;
        this.izq = this.der = null;
    }

}

class arbolAVL{
    constructor(){
        this.raiz = null;
    }
    maximo(num1, num2){
        if(num1 > num2){
            return num1
        }
        return num2
    }
    
    altura(temporal){
        if(temporal != null){
            return temporal.altura
        }
        return -1
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
            if (this.altura(temp.izq) - this.altura(temp.der) == 2){
                if (dato < temp.izq.dato){
                    temp = this.rotacionDerecha(temp)
                }else{
                    temp = this.rotacionDobleDerecha(temp)
                }
            }
        }else{
            temp.der = this._agregar(dato, temp.der)
            if(this.altura(temp.der)-this.altura(temp.izq) == 2){
                if (dato > temp.der.dato){
                    temp = this.rotacionIzquierda(temp)
                }else{
                    temp = this.rotacionDobleIzquierda(temp)
                }
            }
        }
        temp.altura = this.maximo(this.altura(temp.izq), this.altura(temp.der))+1
        return temp
    }

    rotacionIzquierda(temp){
        let temp2 = temp.der
        temp.der = temp2.izq
        temp2.izq = temp
        temp.altura = this.maximo(this.altura(temp.der), this.altura(temp.izq))+1
        temp2.altura = this.maximo(this.altura(temp2.der) , temp.altura)+1
        return temp2
    }
    rotacionDerecha(temp){
        let temp2 = temp.izq
        temp.izq = temp2.der
        temp2.der = temp
        temp.altura = this.maximo(this.altura(temp.der), this.altura(temp.izq))+1
        temp2.altura = this.maximo(this.altura(temp2.izq) , temp.altura)+1
        return temp2
    }
    rotacionDobleIzquierda(temp){
        temp.der = this.rotacionDerecha(temp.der)
        return this.rotacionIzquierda(temp)
    }

    rotacionDobleDerecha(temp){
        temp.izq = this.rotacionIzquierda(temp.izq)
        return this.rotacionDerecha(temp)
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

    preOrden(temp){
        if(temp != null){
            console.log(temp.dato)
            this.preOrden(temp.izq)
            this.preOrden(temp.der)
        }
    }

    enOrden(temp){
        if(temp != null){
            this.enOrden(temp.izq)
            console.log(temp.dato)
            this.enOrden(temp.der)
        }
    }
    
    postOrden(temp){
        if(temp != null){
            this.postOrden(temp.izq)
            this.postOrden(temp.der)
            console.log(temp.dato)
        }
    }

}
a = new arbolAVL()
for(i = 0; i<30; i++){
    a.agregar(i)
}
console.log(a.buscar(29, a.raiz))
a.enOrden(a.raiz)