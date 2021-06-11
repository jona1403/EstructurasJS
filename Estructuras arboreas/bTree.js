var contador = 1
var arrayNodes = []
var edges = []
class Nodo{
    constructor(padre, id){
        this.id = id
        this.claves = []
        this.hijos = []
        this.padre = padre
    }
    
    //Agrega valores al nodo
    agregar(valor){
        this.claves.push(valor)
        if(this.claves.length > 1){
            this.claves = sort(this.claves)
        }
    }
}

class ArbolB{
    constructor(grado){
        this.grado = grado
        if(espar(grado)){
            this.enmedio = grado/2
        }else{
            this.enmedio = (grado-1)/2
        }
        this.raiz = new Nodo(null, 0)
    }

    agregar(valor){
        this.raiz = this._agregar(valor, this.raiz)
        this.graficar()
    }

    _agregar(valor, temp){
        if(temp.hijos.length == 0){
            temp.agregar(valor)
        }else{
            var encontrar = false
            for(i = 0; i<temp.claves.length; i++){
                if(valor < temp.claves[i]){
                    encontrar = true
                    temp.hijos[i] = this._agregar(valor, temp.hijos[i])
                    break;
                }
            }
            if(!encontrar){
                temp.hijos[temp.claves.length] = this._agregar(valor, temp.hijos[temp.claves.length])
            }
        }
        if(temp.claves.length == this.grado){
            if(temp.padre == null){
                contador++
                var c = temp;
                temp = new Nodo(null, contador)
                temp.agregar(c.claves[this.enmedio])
                contador++
                temp.hijos.push(new Nodo(temp, contador))
                contador++
                temp.hijos.push(new Nodo(temp, contador))
                for(i = 0; i<this.enmedio; i++){
                    temp.hijos[0].agregar(c.claves[i])
                    temp.hijos[1].agregar(c.claves[i+this.enmedio+1])
                }
                if(c.hijos.length > 0){
                    for(i = 0; i<this.enmedio+1; i++){
                        temp.hijos[0].hijos[i] = c.hijos[i]
                        temp.hijos[0].hijos[i].padre = temp.hijos[0]
                        temp.hijos[1].hijos[i] = c.hijos[i+this.enmedio+1]
                        temp.hijos[1].hijos[i].padre = temp.hijos[1]
                    }
                }
            }else{
                var claveMedia = temp.claves[this.enmedio]
                temp.padre.agregar(claveMedia)
                var index

                var tieneHijos = false
                if(temp.hijos.length > 0){
                    tieneHijos = true
                }


                for(index = 0; index < temp.padre.claves.length; index++){
                    if(temp.padre.claves[index] == claveMedia){
                        break
                    }
                }

                for(i = temp.padre.claves.length; i>index+1; i--){
                    temp.padre.hijos[i] = temp.padre.hijos[i-1]
                }

                var aux = temp
                contador++
                temp.padre.hijos[index] = new Nodo(temp.padre, contador)
                //console.log("Claves  "+temp.padre.hijos[index].claves)

                contador ++
                temp.padre.hijos[index+1] = new Nodo(temp.padre, contador)
                for(i = 0; i<this.enmedio; i++){
                    console.log(aux.claves[i])
                    temp.padre.hijos[index].agregar(aux.claves[i])
                    temp.padre.hijos[index+1].agregar(aux.claves[i+this.enmedio+1])
                }
                temp = temp.padre.hijos[index]

                if(tieneHijos){
                    for(i = 0; i<this.enmedio+1; i++){
                        temp.padre.hijos[index].hijos[i] = aux.hijos[i]
                        temp.padre.hijos[index].hijos[i].padre = temp.padre.hijos[index]
                    }
                    for(i = this.enmedio+1; i<this.grado+1; i++){
                        temp.padre.hijos[index+1].hijos[i-this.enmedio-1] = aux.hijos[i]
                        temp.padre.hijos[index+1].hijos[i-this.enmedio-1].padre = temp.padre.hijos[index+1]
                    }
                    
                }
            }
        }
        return temp
    }

    recorrerGraficar(temp){
        if(temp != null){
            var texto = ""
            var i
            for(i = 0; i<temp.claves.length; i++){
                if(i == temp.claves.length-1){
                    texto = texto + temp.claves[i].toString();
                }else{
                    texto = texto + temp.claves[i].toString() + "|"
                }
            }
            arrayNodes.push({id: temp.id, label: texto, shape: "box"})
            texto = ""
            for(i = 0; i<temp.hijos.length; i++){
                edges.push({from: temp.id, to: temp.hijos[i].id})
                this.recorrerGraficar(temp.hijos[i])
            }
        }
    }

    graficar(){
        this.recorrerGraficar(this.raiz)
        var nodes = new vis.DataSet(arrayNodes);
        var container = document.getElementById("mynetwork");
        var data = {
            nodes: nodes,
            edges: edges,
        };
        var options = { 
            physics: false,
            layout: {
                hierarchical: {
                    direction: 'UD',
                    nodeSpacing: 150,
                    sortMethod : 'directed' //hubsize, directed.
                  }
            } 
        };
        var network = new vis.Network(container, data, options);
        arrayNodes = []
        edges = []  
    }
}


//Metodo de ordenamiento burbuja
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

//Metodo que nos indica si el grado es par o impar
function espar(valor){
    if (valor%2==0) {
        return true;
    }
    return false;
}

let arbol = new ArbolB(5)
function insertarNodo(){
    var valor = parseInt(document.getElementById("valorNodo").value, 10);
    document.getElementById("valorNodo").value = ""
    document.getElementById("valorActualizar").value = ""
    arbol.agregar(valor)
    /*for(i=0; i<arbol.raiz.hijos.length; i++){
        console.log(arbol.raiz.hijos[i].claves)
    }*/
}

function buscarNodo(){}

function actualizarNodo(){}

function eliminarNodo(){}