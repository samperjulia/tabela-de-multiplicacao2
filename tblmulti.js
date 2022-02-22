let multiplicacao = [];

for (let i = 0; i <= 10; i++){
    multiplicacao.push ([]);
    for (let j = 0; j <= 10; j++){
       multiplicacao[i].push (j * i);
    }
}
console.table(multiplicacao);


