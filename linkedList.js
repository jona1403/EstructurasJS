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
}

var List = new Lista();
List.insertar(1);
List.insertar(2);
List.insertar(3);
List.insertar(4);
List.insertar(5);
List.insertar(6);
List.eliminar(5)
List.recorrer();