class livro {
	constructor (id, titulo, descricao, genero, autor){
		this._id = id, this.titulo = titulo, this.descricao = descricao, this.genero = genero, this.autor = autor;
	}

	get_dados(){
		return this;
 }

	set_dados(dados){
		if (dados.id != '' && dados.id != null){
			this._id = dados.id;
		}
		if (dados.titulo != '' && dados.titulo != null){
			this.titulo = dados.titulo;
		}
		if (dados.descricao != '' && dados.descricao != null){
			this.descricao = dados.descricao;
		}
		if (dados.genero != '' && dados.genero != null){
			this.genero = dados.genero;
		}
		if (dados.autor != '' && dados.autor != null){
			this.autor = dados.autor;
		}
		if (dados.estoque != '' && dados.estoque != null){
			this.estoque = dados.estoque;
		}
		if (dados.preco != '' && dados.preco != null){
			this.preco = dados.preco;
		}
	}

}

class livroImpresso extends livro {
	constructor(estoque, preco, ...rest){
		super(...rest);
		this.estoque = estoque, this.preco = preco;
	}
}

class ebook extends livro {
	constructor (preco, ...rest){
		super(...rest);
		this.preco = preco;
	}
}

class pessoa {
	constructor (id, nome, idade, sexo){
		this._id = id, this.nome = nome, this.idade = idade, this.sexo = sexo;
	}

	get_dados(){
		return this;
 }

	set_dados(dados){
		if (dados.id != '' && dados.id != null){
			this._id = dados.id;
		}
		if (dados.nome != '' && dados.nome != null){
			this.nome = dados.nome;
		}
		if (dados.idade != '' && dados.idade != null){
			this.idade = dados.idade;
		}
		if (dados.sexo != '' && dados.sexo != null){
			this.sexo = dados.sexo;
		}
		if (dados.endereco != '' && dados.endereco != null){
			this.endereco = dados.endereco;
		}
		if (dados.telefone != '' && dados.telefone != null){
			this.telefone = dados.telefone;
		}
		if (dados.salario != '' && dados.salario != null){
			this.salario = dados.salario;
		}
	}

}

class vendedor extends pessoa {
	constructor (endereco, telefone, salario, ...rest){
		super(...rest);
		this.endereco = endereco, this.telefone = telefone, this.salario = salario;
	}
}

class cliente extends pessoa {
	constructor (endereco, telefone, ...rest){
		super(...rest);
		this.endereco = endereco, this.telefone = telefone;
	}
}

class venda {
	constructor (id, date, valor, livro, vendedor, cliente){
		this._id = id, this.date = date, this.valor = valor, this.livro = livro, this.vendedor = vendedor, this.cliente = cliente;
	}

	get_dados(){
		return this;
	}

	set_dados(dados){
		if (dados.id != '' && dados.id != null){
			this._id = dados.id;
		}
		if (dados.date != '' && dados.date != null){
			this.date = dados.date;
		}
		if (dados.valor != '' && dados.valor != null){
			this.valor = dados.valor;
		}
		if (dados.livro != '' && dados.livro != null){
			this.livro = dados.livro;
		}
		if (dados.vendedor != '' && dados.vendedor != null){
			this.vendedor = dados.vendedor;
		}
		if (dados.cliente != '' && dados.cliente != null){
			this.cliente = dados.cliente;
		}
	}

}

class loja{
	constructor (id, nome, livros){
		this._id = id, this.nome = nome, this.livros = livros;
	}

	get_dados(){
		return this;
	}

	set_dados(dados){
		if (dados.id != '' && dados.id != null){
			this._id = dados.id;
		}
		if (dados.nome != '' && dados.nome != null){
			this.nome = dados.nome;
		}
		if (dados.livros != '' && dados.livros != null){
			this.livros.push(dados.livros);
		}
	}

}

// *** Testes com a Loja ***
console.log('Teste com a Classe Loja: ');
let livraria = new loja('1', 'Livraria Santa Monica', []);
let novoEbook = new ebook('200,00', '1', 'God of War 2018', 'Boy, você não está pronto...', '+18', 'Kratus');
livraria.set_dados({id: '', nome: '', livros: novoEbook.get_dados()});
console.log(livraria.get_dados());

let novoLivroTeste = new livroImpresso('20', '10', '2', 'Livro Teste', 'Nem sei...', 'Incomun', 'Irineu');
livraria.set_dados({id: '', nome: '', livros: novoLivroTeste.get_dados()});
//console.log(livraria.get_dados());

// *** Testes Livros (Cadastro e Edição). ***
//console.log('Teste com a Classe Livros: ');
//let novoLivro = new livroImpresso( '20', '1,50', '1', 'O Senhor dos papeis', 'Estagiário em uma empresa de xerox...', '+18', 'Zeno');
// console.log(novoLivro.get_dados());
// let dadosAtualizados = {id: '', titulo: 'As Aventuras do Dollynho', descricao: 'Sou o Dollynho, seu amiguinho', genero: '', autor: '', preco: '80,00'};
// novoLivro.set_dados(dadosAtualizados);
// console.log(novoLivro.get_dados());

// *** Testes Clientes e Vendedores (Cadastro e Edição). ***
//console.log('Teste com a Classe Pessoa: ');
// let novoVendedor = new vendedor('Rua Piedade 1791', '44984356247', '1,200', '1', 'Leonardo Morini', '20', 'Masculino');
// console.log(novoVendedor.get_dados());
// let dadosAtualizadosVendedor = {id: '', nome: 'Juliana', idade: '25', sexo: 'Feminino', endereco: '', telefone: '', salario: ''};
// novoVendedor.set_dados(dadosAtualizadosVendedor);
// console.log(novoVendedor.get_dados());
//
// let novoCliente = new cliente('Rua do kukuro 1791', '44984356254', '1', 'Mario', '80', 'Masculino');
// console.log(novoCliente.get_dados());
// let dadosAtualizadosCliente = {id: '', nome: 'Luigui', idade: '50', sexo: '', endereco: '', telefone: ''};
// novoCliente.set_dados(dadosAtualizadosCliente);
// console.log(novoCliente.get_dados());

// *** Testes de Venda. ***
console.log('Teste com a Classe Venda: ');
let novoLivro = new livroImpresso( '20', '18,50', '1', 'O Profeta Programador', 'Irineu, vc não sabe nem eu...', '+18', 'Profeta');
let novoVendedor = new vendedor('Rua Piedade 1791', '44984356247', '1,200', '1', 'Leonardo Morini', '20', 'Masculino');
let novoCliente = new cliente('Rua do kukuro 1791', '44984665522', '1', 'Kratus', '80', 'Masculino');

//Caso queira fazer o Banco de dados em SQL
let novaVendaComId = new venda('1', '01/05/2018', novoLivro.get_dados().preco, novoLivro.get_dados()._id, novoVendedor.get_dados()._id, novoCliente.get_dados()._id);
console.log(novaVendaComId.get_dados());

//Apenas demonstrando que os nomes estão vindo corretamente
let novaVendaComNomes = new venda('1', '01/05/2018', novoLivro.get_dados().preco, novoLivro.get_dados().titulo, novoVendedor.get_dados().nome, novoCliente.get_dados().nome);
console.log(novaVendaComNomes.get_dados());

//Caso queira fazer o Banco de Dados com NOSQL
let novaVendaComTodasAsInformacoes = new venda('1', '01/05/2018', novoLivro.get_dados().preco, novoLivro.get_dados(), novoVendedor.get_dados(), novoCliente.get_dados());
console.log(novaVendaComTodasAsInformacoes.get_dados());
