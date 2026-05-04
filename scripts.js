//Seleciona os elementos do formulario.

// pegando o input "valor da despesa"
const amount = document.getElementById('amount');

//oninput propiedade que observa oque ta sendo digitado no input
amount.oninput = () => {
    // Removendo a letra
    let value = amount.value.replace(/\D/g, '');

    amount.value = value;
};
