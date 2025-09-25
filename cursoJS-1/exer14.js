// array de faturamento diario da semana 
const faturamentodiario = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado', 'domingo']
/* Dados de Faturamento */
const faturamentoDiario = [1200, 1500, 1000, 2200, 1800, 2500, 1300];
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// 1. Calcular o faturamento total da semana
let faturamentoTotal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  faturamentoTotal += faturamentoDiario[i];
}
console.log(`Faturamento total da semana: R$ ${faturamentoTotal.toFixed(2)}`);

// 2. Identificar o maior faturamento e o dia em que ocorreu
let maiorFaturamento = 0;
let diaComMaiorFaturamento = '';
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoDiario[i];
    diaComMaiorFaturamento = diasDaSemana[i];
  }
}
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)} na ${diaComMaiorFaturamento}`);

// 3. Calcular a média de faturamento diário
const mediaFaturamento = faturamentoTotal / faturamentoDiario.length;
console.log(`Média de faturamento diário: R$ ${mediaFaturamento.toFixed(2)}`);
