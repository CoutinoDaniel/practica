function miMetodo(){
	prompt("precionaste el boton");
	console.log("");
}
function boton1(){
	prompt("precionaste el boton1");
	console.log("esto es una prueba");
}
function boton2(){
	prompt("precionaste el boton2");
	console.log("esto es una prueba");
}
function area(){
	var base=prompt("ingresa la base del triangulo")
	var altura=prompt("ingresala altura")
	var area=(base*.5)*altura
	alert("el area es:"+area)
	
}
function numeros(){
	var numeros=document.getElementById("numeros");
	for (let  i= 1; i<= 1000; i++){
	numeros.innerText+=i+", ";
	}
}



	