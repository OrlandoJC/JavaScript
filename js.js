var amigos = [["pepe",    "Plablo",   "moises",    "alberto", "pablito"],
			["mexico",  "colombia", "venezuela", "cuba ",   "peru"],
			 ["manzana", "pera",     "uva",       "melon",   "sandia"]];
	var aleatorio;
	var hor, ver;
	var horp, verp;
	var horf, verf;

	console.log("nombre " + amigos[0][0]);
	console.log('pais ' + amigos[1][0]);
	console.log('frut favorita ' + amigos[2][3])



	console.log(aleatorio);




	for(var i = 1; i < 10; i++){
		hor = 0;
			ver = Math.floor(Math.random() * (0 - 5)) + 5;
			horp = 1;
			horf = 2;
			document.write("<h1>su nombre es " + amigos[hor][ver]+ "</h1>");
			document.write(" el es de " + amigos[horp][ver]);
			document.write("y su frutaa preferida es " + amigos[horf][ver]);
			document.write("<br>")
	}






function jugador(nombre){
  var puntos = 1;
  function nuevo(){
     document.write(nombre  + puntos);
  }

  return nuevo;
}

var nombre = "LLl";
var pasaje = jugador(nombre)
console.log(pasaje());




//closure

function creaFunc(){
  var nombre = "orlando";//se crea esta variable llamada nombre
    function muestraNombre(){//acontinuacion se define una funcion llamda muestranombre
      alert(nombre);
    }
    return muestraNombre();
}


var miFunc = creaFunc();

miFunc();





 
 function jugador(){
    var puntos =4;
      function muestraPuntos(){
          alert(puntos);
      }
      return muestraPuntos();
 }
 
 
 nuevosPuntos();
 var nuevosPuntos = jugador();
 



  function creaSumador(x){
     return function(y){
        return x + y;
     };
  }


var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));
console.log(suma10(2));



function makeSizer(size){
  return function(){
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);


document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
