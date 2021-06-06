            class Nodo{
                constructor(Padre){
                    this.Claves = [];
                    this.Hijos = [];
                    this.Padre = Padre;
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
                    this.Raiz = new Nodo();
                    this.Grado = grado;
                    if(espar(this.Grado)){
                        this.EnMedio = grado/2;
                    }else{
                        this.EnMedio = (grado-1)/2;
                    }
                }
                insertar(dato){
                    this.Raiz = this._insertar(dato, this.Raiz);
                }
                _insertar(dato, temp){
                    var i = 0;
                    if(temp.Hijos.length == 0){
                        temp.insertar(dato);
                    }/*else{
                        var encontrado = false;
                        for(i= 0; i<temp.Claves.length-1; i++){
                            if (dato < temp.Claves[i]){
                                encontrado = true;
                                this._insertar(dato, temp.Hijos[i]);
                                break
                            }
                        }
                        if(!encontrado){
                            this._insertar(dato, temp.Hijos[temp.Claves.length]);
                        }
                    }*/
                    
                    if(temp.Claves.length == this.Grado){
                        if(temp.Padre == null){
                            var c = temp;
                            temp = new Nodo(null);
                            temp.insertar(c.Claves[this.EnMedio]);
                            temp.Hijos[0] = new Nodo(temp);
                            temp.Hijos[1] = new Nodo(temp);
                            for(i=0; i < this.EnMedio; i++){
                                temp.Hijos[0].insertar(c.Claves[i]);
                            }
                            for(i=this.EnMedio+1; i< this.Grado; i++){
                                temp.Hijos[1].insertar(c.Claves[i]);
                            }
                            if(c.Hijos.length > 0){
                                for(i = 0; i <= this.EnMedio; i++){
                                    temp.Hijos[0].Hijos[i].push(c.Hijos[i]); 
                                    temp.Hijos[0].Hijos[i].Padre = temp.Hijos[0];
                                }
                                for(i = this.EnMedio+1; i <= this.Grado; i++){
                                    temp.Hijos[1].Hijos[i-this.EnMedio+1].push(c.Hijos[i]);
                                    temp.Hijos[1].Hijos[i-this.EnMedio+1].Padre = temp.Hijos[1];
                                }
                            }
                        }else{
                            var claveMedia = temp.Claves[this.EnMedio]
                            temp.Padre.insertar(claveMedia)
                            var tieneHijos = false;
                            if(temp.Hijos.length> 0){
                                tieneHijos = true;
                            }
                            var index = 0;
                            for(index; index < temp.Padre.Claves.length; index++){
                                if (temp.Padre.Claves[index] == claveMedia){
                                    break;
                                }
                            }
                            var aux = temp;
                            temp.Padre.Hijos[index] = new Nodo();
                            temp.Padre.Hijos[index].Padre = temp.Padre;
                            for(i=0; i<this.EnMedio; i++){
                                temp.Padre.Hijos[index].insertar(aux.Claves[i]);
                            }
                            temp.Padre.Hijos[index+1] = new Nodo();
                            temp.Padre.Hijos[index+1].Padre = temp.Padre;
                            for(i=this.EnMedio+1; i< this.Grado; i++){
                                temp.Padre.Hijos[index+1].insertar(aux.Claves[i]);
                            }
                            if(tieneHijos){
                                for(i = 0; i<=this.EnMedio; i++){
                                    temp.Padre.Hijos[index].Hijos[i] = aux.Hijos[i]
                                    temp.Padre.Hijos[index].Hijos[i].Padre = temp.Padre.Hijos[index]
                                }
                                for(i = this.EnMedio+1; i<=this.Grado; i++){
                                    temp.Padre.Hijos[index+1].Hijos[i-(this.EnMedio+1)] = aux.Hijos[i]
                                    temp.Padre.Hijos[index+1].Hijos[i-(this.EnMedio+1)].Padre = temp.Padre.Hijos[index+1]
                                }
                            }
                        }
                    }
                    return temp;
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

            function espar(valor){
                if (valor%2==0) {
                    return true;
                
                } else {
                    return false;
                }
            }

            a = new ArbolB(5);

            for(i=0; i<5; i++){
                a.insertar(i);
            }
            console.log(a.Raiz)
            console.log(a.Raiz.Hijos[0])
            console.log(a.Raiz.Hijos[1])
