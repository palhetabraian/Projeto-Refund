//Seleciona os elementos do formulario.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

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

    //  Retorna o valor formatado
    return value;
}

// Evento para observar o formulario
form.onsubmit = (event) => {
    // tirando a funcao de resetar a pagina quando da submit
    event.preventDefault();
};
