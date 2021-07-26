function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, codigo, parseInt(qtidade));
}

function validarCliente(idnomeCliente, idemailCliente, idendCliente) {
    let nomeClient = document.getElementById(idnomeCliente).value;
    let emailClient = document.getElementById(idemailCliente).value;
    let enderecoClient = document.getElementById(idendCliente).value;

    if (nomeClient == "")
        alert("Nome do Cliente não pode estar em branco. Favor preenchê-lo!");
    else if (enderecoClient == "")
        alert("Endereço do Cliente não pode estar em branco. Favor preenchê-lo!");
    else cadastrarCliente(nomeClient, emailClient, enderecoClient);
}



function cadastrarProduto(produto, codig, qtidade) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function cadastrarCliente(nomeClient, emailClient, enderecoClient) {
    let novoCliente = {nome: nomeClient, email:emailClient, endereco:enderecoClient};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum produto ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo produto
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("Cliente cadastrado com sucesso");
        atualizarTotalClientes("totalclientes");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}


function listarClientes() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Clientes:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há nenhum clientena lista</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(cliente => {
                document.write("<ul>");
                document.write("<li>Nome do Cliente: "+cliente.nome+"</li>");
                document.write("<li>Email do Cliente: "+cliente.email+"</li>");
                document.write("<li>Endereço do Cliente: "+cliente.endereco+"</li>");
                document.write("</ul>");
                
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}