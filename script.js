//--------------------ESTOQUE----------------------------
// Product Constructor
class Product {
    constructor(nome, preco, precoVenda, quantidade, vencimento) {
        this.nome = nome;
        this.preco = Number(preco).toFixed(2);
        this.precoVenda = Number(precoVenda).toFixed(2);
        this.quantidade = quantidade;
        this.vencimento = vencimento;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('tr');
        element.innerHTML = `
            <tr class="card-body">
                <td>${product.nome}</td>
                <td>R$${product.preco}</td>  
                <td>R$${product.precoVenda}</td> 
                <td>${product.quantidade}</td> 
                <td>${product.vencimento}</td> 
                <td><img src="https://cdn-icons-png.flaticon.com/128/4891/4891626.png" <a href="#" class="btn btn-danger" name="delete"></a></td>
            </tr>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const principal = document.querySelector('.principal');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        principal.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const nome = document.getElementById('nomeProduto').value,
            preco = document.getElementById('preco').value,
            precoVenda = document.getElementById('precoVenda').value,
            quantidade = document.getElementById('quantidade').value,
            vencimento = document.getElementById('vencimento').value;

        // Create a new Oject Product
        const product = new Product(nome, preco, precoVenda, quantidade, vencimento);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (nome === '' || preco === '' || precoVenda === '' || quantidade === '' || vencimento === '') {
            ui.showMessage('Por favor insira dados em todos os campos', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Produto adicionado com sucesso', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });