class Nodo{
    constructor(){
        this.Claves = [];
        this.Hijos = [];
        this.Padre = null;
    }
    insertar(dato){
        this.Claves.push(dato);
        if(this.Claves.length > 1){
            this.Claves = sort(this.Claves);
        }
    }
}

class ArbolB{
    constructor(grado){
        this.Raiz = null;
        this.Grado = grado;
        this.EnMedio = grado/2;
    }
    insertar(dato){
        this.Raiz = this._insertar(dato, this.Raiz);
    }
    _insertar(dato, temp){
        if(temp.Claves.length == 0){
            temp.insertar(dato);
        }else{
            var encontrado = false;
            for(i=0; i<temp.Claves.length; i++){
                if (dato < temp.Claves[i]){
                    encontrado = true;
                    this._insertar(dato, temp.Hijos[i]);
                    break
                }
            }
            if(!encontrado){
                this._insertar(dato, temp.Hijos[temp.Claves.length]);
            }
        }
        if(temp.Claves.length == this.Grado){
            if(temp.Padre == null){
                var c = temp
                temp = new Nodo()
                temp.insertar(c.Claves[this.EnMedio])
                temp.Hijos[0] = new Nodo()
                temp.Hijos[1] = new Nodo()
                temp.Hijos[0].Padre = temp.Hijos[1].Padre = temp
                for(i=0; i < this.EnMedio; i++){
                    temp.Hijos[0].insertar(c.Claves[i])
                }
                for(i=this.EnMedio+1; i< this.Grado; i++){
                    temp.Hijos[1].insertar(c.Claves[i])
                }
            }else{
                
            }
        }
        return raiz;
    }
}


function sort(arreglo){
    var aux = 0;
    for(i=0; i< arreglo.length-1; i++){
        for(j=i+1; j<arreglo.length; j++){
            if(arreglo[i] > arreglo[j]){
                aux = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
    return arreglo;
}

a = new ArbolB();