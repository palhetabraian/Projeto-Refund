//Seleciona os elementos do formulario.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

// Seleciona os elementos da lista.
const expenseList = document.querySelector('ul');
const expensesQuantity = document.querySelector('aside header p span');

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

// Captura o evento de submit do formulario para obter os valores
form.onsubmit = (event) => {
    // tirando a funcao de resetar a pagina quando da submit
    event.preventDefault();

    // Cria um objeto com os detalhes da nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    };
    // Chama a funcao que ira adicionar o item da lista.
    expenseAdd(newExpense);
};

// Adiciona um novo item na lista.
function expenseAdd(newExpense) {
    try {
        // Cria o elemento de li para adicionar o item na lista (ul).
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        // Cria o icone da categoria.
        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute('alt', newExpense.category_name);

        // Cria a info da despesa
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        // Cria o nome da despesa.
        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        // Cria a categoria da despesa.
        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        // Adiciona nome e categoria na div das informacoes da despesa.
        expenseInfo.append(expenseName, expenseCategory);

        // Cria o valor da despesa
        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`;

        // Cria o icone de remover
        const removeIcon = document.createElement('img');
        removeIcon.classList.add('remove-icon');
        removeIcon.setAttribute('src', 'img/remove.svg');
        removeIcon.setAttribute('alt', 'remover');

        // Adiciona as informacoes no item.
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        //Adiciona o item na lista
        expenseList.append(expenseItem);

        //Atualiza os totais
        updateTotals();
    } catch (error) {
        alert('Nao foi possivel atualizar a lista de despesas.');
        console.log(error);
    }
}

// Atualizar totais despesas e o valor geral
function updateTotals() {
    try {
        // Recupera todos os items(li) da lista(ul)
        const items = expenseList.children;

        // Atualiza a quantidade de itens da lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? 'despesas' : 'despesa'}`;
    } catch (error) {
        console.log(error);
        alert('Nao foi possivel atualizar os totais.');
    }
}
