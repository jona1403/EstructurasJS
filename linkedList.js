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
    
    insertar(dato){
        var nuevo = Nodo(dato)
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = this.primero;
            this.tamanio++;
        }else{
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultmo;
            this.ultimo = nuevo;
            this.tamanio++;
        }
    }
    eliminar(dato){
        if(this.primero.dato == dato){
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
}