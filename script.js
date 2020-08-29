
if (localStorage.data) {
	document.getElementById('data').value = localStorage.data;
}



if (localStorage.placa) {
	document.getElementById('placa').value = localStorage.placa;
}

if (localStorage.veiculo) {
	document.getElementById('veiculo').value = localStorage.veiculo;
}


if (localStorage.proprietario) {
	document.getElementById('proprietario').value = localStorage.proprietario;
}







if (localStorage.entrada1) {
	document.getElementById('entrada1').value = localStorage.entrada1;
}



if (localStorage.saida1) {
	document.getElementById('saida1').value = localStorage.saida1;
}

var salvarData = function() {


	var data = document.getElementById('data').value;
	var placa = document.getElementById('placa').value;
	var veiculo = document.getElementById('veiculo').value;
	var proprietario = document.getElementById('proprietario').value;





	
	var entrada1 = document.getElementById('entrada1').value;


	var saida1 = document.getElementById('saida1').value;


	
	localStorage.setItem('placa', placa);
	localStorage.setItem('veiculo', veiculo);
	
	

	localStorage.setItem('data', data);

	localStorage.setItem('proprietario', proprietario);





	localStorage.setItem('entrada1', entrada1);
	localStorage.setItem('saida1', saida1);




};

document.onchange = salvarData;