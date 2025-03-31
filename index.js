const numUm = parseInt(prompt("Insira um número:"));

if (isNaN(numUm)){
    //Verifica se a conversão resultou em um número válido
    alert('Erro: Você não digitou um número válido!')
}

if(!isNaN(numUm)){
    // Somente solicita o segundo número se o primeiro for válido
    const numDois = parseInt(prompt("Insira outro número:"));

    if (isNaN(numDois)){
        //Verifica se a conversão resultou em um número válido
        alert('Erro: Você não digitou um número válido!')
    }

    if(!isNaN(numUm) && !isNaN(numDois)){
        if(numUm === numDois){
            alert("Os números são iguais!");
        }
        if(numUm !== numDois){
            alert("Os números são diferentes!");
        }
    }
}