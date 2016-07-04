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

  
