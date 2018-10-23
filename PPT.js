function opcion(humano) {
	var resultado_texto = ["Empate","Gana Humano","Gana Cpu"];
	var nombre = ["Piedra","Papel","Tigera"];

	var jugada = [
					[0,1,2],
					[2,0,1],
					[1,2,0]
				];

	var desc_jugada = [
						["Iguales","Papel cubre Piedra","Piedra aplasta Tigera"],
						["Papel cubre Piedra","Iguales","Tigera corta Papel"],
						["Piedra aplasta Tigera","Tigera corta Papel","Iguales"]
					];

	var cpu = Math.floor((Math.random() * 3));
	var resultado = jugada[cpu][humano];

	mensaje0 = new SpeechSynthesisUtterance("Humano: saca "+nombre[humano]);
	mensaje1 = new SpeechSynthesisUtterance("Cpu saca "+nombre[cpu]);
	mensaje2 = new SpeechSynthesisUtterance(desc_jugada[cpu][humano]);
	mensaje3 = new SpeechSynthesisUtterance(resultado_texto[resultado]);
	
	window.speechSynthesis.speak(mensaje0);
	window.speechSynthesis.speak(mensaje1);
	window.speechSynthesis.speak(mensaje2);
	window.speechSynthesis.speak(mensaje3);
}