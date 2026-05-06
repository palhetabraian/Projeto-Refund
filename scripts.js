//Seleciona os elementos do formulario.

// pegando o input "valor da despesa"
const amount = document.getElementById('amount');

//oninput propiedade que observa oque ta sendo digitado no input
amount.oninput = () => {
    // Obtem o valor atual do input e remove os caracteres nao numericos.
    let value = amount.value.replace(/\D/g, '');

    // Transforma o valor em centavos.
    value = Number(value) / 100;

    // atuyaliza o valor do input
    amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
    value = value.toLocaleString('pt-BR', {
        // Formata o valor no padrao BRL (Real brasileiro)
        style: 'currency',
        currency: 'BRL',
    });

    return value;
}
