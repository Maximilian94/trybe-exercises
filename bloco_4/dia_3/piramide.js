let n = 10;
let linha = 'primeira interação';

for (let asterisk = 1; asterisk <= n; asterisk += 2) {
  let espaces = (n - asterisk) / 2
  linha = '';
  for (let interacoes = 1; interacoes <= espaces; interacoes += 1) {
    linha += '-';
  };
  for (let interacoes = 1; interacoes <= asterisk; interacoes += 1) {
    linha += '*';
  };
  for (let interacoes = 1; interacoes <= espaces; interacoes += 1) {
    linha += '-';
  };
  console.log(linha)
};
