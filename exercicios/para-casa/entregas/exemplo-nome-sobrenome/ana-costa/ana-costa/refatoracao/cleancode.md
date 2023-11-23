## Exercício Clean Code: Refatoração da Classe `BankAccount`

Neste exercício, busquei aplicar o princípio de responsabilidade única à classe `BankAccount`, que foi originalmente desenvolvida em aulas anteriores. Durante a análise, identifiquei que os métodos da classe estavam encarregados de várias responsabilidades, tornando o código menos claro e mais difícil de manter. Para abordar esse problema, decidi criar um arquivo separado, chamado `BankAccountValidators`, dedicado exclusivamente a funções de validação antes de realizar operações como saque, transferência, crédito e débito.

### Antes da Refatoração

Verifique o estado original da classe `BankAccount` [Link para BankAccount.js](/exercicios/para-casa/entregas/exemplo-nome-sobrenome/ana-costa/ana-costa/BankAccount.js)

### Após a Refatoração

Confira como a classe foi aprimorada após a refatoração [Link para BankAccount.js refatorada](/exercicios/para-casa/entregas/exemplo-nome-sobrenome/ana-costa/ana-costa/refatoracao/BankAccount.js)

Essa reestruturação resultou em métodos mais concisos e fáceis de entender. A separação das responsabilidades, com a introdução de validadores dedicados, contribui para um código mais limpo e modular.

