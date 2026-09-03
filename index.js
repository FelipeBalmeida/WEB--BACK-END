const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

console.log("--- Parte 1 ---");
const totaisCompras = usuarios.map(usuario => {
  const total = usuario.compras.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  console.log(`${usuario.nome}: total = ${total}`);
  return { nome: usuario.nome, total };
});

console.log("\n--- Parte 2 ---");
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
usuariosAtivos.forEach(usuario => console.log(usuario.nome));

console.log("\n--- Parte 3 ---");
const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
maioresDeIdade.forEach(usuario => console.log(usuario.nome));

console.log("\n--- Parte 4 ---");
const maiorComprador = totaisCompras.reduce((maior, atual) => {
  return atual.total > maior.total ? atual : maior;
}, totaisCompras[0]);
console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
console.log(`Total: ${maiorComprador.total}`);

console.log("\n--- Parte 5 ---");
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);

console.log("\n--- Parte 6 ---");
const pessoa1 = {
  nome: "Maria",
  falar: function(){
    console.log(this.nome);
  }
};
pessoa1.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};
pessoa2.falar();

console.log("\n--- Parte 7 ---");
const gerarRelatorio = (dados) => {
  const totalUsuarios = dados.length;
  
  const ativos = dados.filter(u => u.ativo);
  const qtdUsuariosAtivos = ativos.length;
  const qtdUsuariosInativos = totalUsuarios - qtdUsuariosAtivos;
  
  const somaIdades = dados.reduce((acc, u) => acc + u.idade, 0);
  const mediaIdade = somaIdades / totalUsuarios;
  
  const maiorCompradorObj = dados.reduce((maior, atual) => {
    const totalAtual = atual.compras.reduce((a, b) => a + b, 0);
    const totalMaior = maior.compras.reduce((a, b) => a + b, 0);
    return totalAtual > totalMaior ? atual : maior;
  }, dados[0]);

  return {
    totalUsuarios,
    usuariosAtivos: qtdUsuariosAtivos,
    usuariosInativos: qtdUsuariosInativos,
    mediaIdade,
    maiorComprador: maiorCompradorObj.nome
  };
};

const relatorio = gerarRelatorio(usuarios);
console.log(relatorio);