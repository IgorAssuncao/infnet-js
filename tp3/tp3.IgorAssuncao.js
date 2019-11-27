// Algoritmo 1
console.log('Iniciando algoritmo 1');

let counter = 0;
for (let i = 1; i < 1000000; i++) {
  /* Aqui tambem e possivel verificar se
   * e divisivel somente por 6, sabendo que
   * 6 e divisivel por 2 e 3 ao mesmo tempo.
  */
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
    counter++;
  }
}
console.log(`Quantidade de numeros divisiveis por 2 e 3 simultaneamente: ${counter}`);
console.log('Finalizando algoritmo 1');

console.log();

// Algoritmo 2
function fatorial(number) {
  if (number == 1) return 1;
  return number * fatorial(number - 1); 
}

console.log('Iniciando algoritmo 2');
console.time('execucao');
console.log(`53! = ${fatorial(53)}`);
console.timeEnd('execucao');
console.log('Finalizando algoritmo 2');

console.log();

// Algoritmo 3
console.log('Iniciando algoritmo 3');
alunos = []
for (let j = 1; j <= 20; j++) {
  alunos.push({
    numero: j,
    nota: Math.round(Math.random() * 100)
  });
}

let alunosAprovados = 0 , alunosReprovados = 0;

for (let aluno of alunos) {
  if (aluno.nota >= 60) {
    alunosAprovados++;
    console.log(`Aluno ${aluno.numero}, Nota: ${aluno.nota} - Aprovado `);
  } else {
    alunosReprovados++;
    console.log(`Aluno ${aluno.numero}, Nota: ${aluno.nota} - Reprovado `);
  }
}
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Alunos aprovados ${alunosAprovados} - ${(alunosAprovados / alunos.length) * 100}%`)
console.log(`Alunos aprovados ${alunosReprovados} - ${(alunosReprovados / alunos.length) * 100}%`)

console.log('Finalizando algoritmo 3');

console.log();

// Algoritmo 4
console.log('Iniciando algoritmo 4');
let numerosAletorios = [];
for(let l = 0; l < 1000; l++) {
  const randomNumber = Math.round(Math.random() * 5000);
  while (!numerosAletorios.includes(randomNumber)) numerosAletorios.push(randomNumber);
}

numerosOrdenados = numerosAletorios.sort((a, b) => a - b);
console.log(numerosOrdenados);
console.log('Finalizando algoritmo 4');

console.log();

// Algoritmo 5
function checkTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return console.log('Triangulo equilatero');
  } else if ((lado1 > lado2 && lado2 > lado3) || 
    (lado2 > lado1 && lado1 > lado3) || 
    (lado3 > lado2 && lado2 > lado1)) {
    return console.log('Triangulo isosceles');
  } else {
    return console.log('Triangulo escaleno');
  }
}

console.log('Iniciando algoritmo 5');
checkTriangulo(5, 5, 5);
checkTriangulo(45, 45, 90);
checkTriangulo(25, 35, 45);
console.log('Finalizando algoritmo 5');






