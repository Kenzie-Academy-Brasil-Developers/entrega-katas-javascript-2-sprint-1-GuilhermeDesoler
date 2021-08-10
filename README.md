# Entrega: Katas de JavaScript 2 #

## Visão Geral

Um [kata](https://en.wikipedia.org/wiki/Kata_(programming)) é um exercício individual onde você pratica uma habilidade de programação repetidamente. Hoje você irá praticar o uso de loops e funções JavaScript. Começaremos com funções fáceis e subiremos o grau de dificuldade gradativamente. Os objetivos principais destes katas são:

+   acostumá-lo a escrever e chamar funções que recebam argumentos e retornam resultados
+   acostumá-lo a decompor um problema nas diversas partes de um loop for.

Usaremos a palavra-chave [return](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return) para obter o resultado da função. Diferentemente de outros katas que fizemos até agora, a maioria destes vai sendo construído uns em cima dos outros, o que significa que **você precisará completá-los em ordem**.

Ao falar das restrições de implementação, qualquer coisa que eu disser sobre funções também vale para métodos (falaremos sobre a diferença entre eles em breve).

### Nesse katas nós não vamos utilizar métodos de iteração de array(forEach, map, filter, reduce, sort...) e nem (math min, math max).
### Vamos utilizar apenas estruturas de repetição como (while, for ou do while)

## Katas

### Soma (1 ponto)

Escreva uma função chamada "add" que pega dois argumentos e retorna a soma deles.

Você pode usar operadores incorporados para finalizar a definição.

Por exemplo, chamar _add_(2, 4) deve retornar um resultado 6.

### Multiplicação (2 pontos)

Escreva uma função chamada "multiply" que pega dois argumentos e retorna seu produto.

Você **não pode** usar operadores ou funções aritméticas incorporadas (como o operador de multiplicação `*`). Em vez disso, você precisará de um loop for que chama a função "add" criada anteriormente.

Por exemplo, chamar *multiply*(6, 8) deve retornar um resultado 48.

### Potência (2 pontos)

Escreva uma função chamada "power" que pega dois argumentos (x e n) e retorna o resultado de x elevado à potência n.

Você **não pode** usar operadores ou funções aritméticas incorporadas (como o operador de multiplicação `*` ou o operador de potência/expoente `**`). Em vez disso, para escrever esta função, use outras funções que você escreveu em katas anteriores.

Outra palavra usada para potência é "exponenciação". Por exemplo, se nós chamarmos *power*(2, 8), retornaremos 256 ao multiplicar 2 por ele mesmo 8 vezes.

    2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256

Se tivéssemos chamado *power*(3, 4), teríamos multiplicado 3 por ele mesmo 4 vezes:

    3 * 3 * 3 * 3 = 81

Veja [este artigo](https://pt.wikipedia.org/wiki/Exponencia%C3%A7%C3%A3o) da Wikipédia para mais detalhes sobre exponenciação.

### Fatorial (2 pontos)

Escreva uma função chamada "factorial" que pega um único argumento e retorna o fatorial dele.

Você **não pode** usar operadores ou funções aritméticas incorporadas (como o operador de multiplicação `*`). Em vez disso, para escrever esta função, use outras funções que você escreveu em katas anteriores.

Por exemplo, chamar *factorial*(4) deve retornar um resultado 24.

## Bônus
### Fibonacci (3 pontos)

Escreva uma função chamada "fibonacci" que pega um argumento n e retorna o enésimo [número Fibonacci](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci).

Você **não pode usar** operadores ou funções aritméticas incorporadas. Em vez disso, para escrever esta função, use outras funções que você escreveu em katas anteriores (como o operador de multiplicação incorporado `*`).

Por exemplo, chamar *fibonacci*(8) deve retornar o resultado 13.

    0 1 1 2 3 5 8 [13] 21

O número entre colchetes é o oitavo número fibonacci.

## Dicas

1.  A resposta para a maioria desses katas será similar. Ela envolverá tipicamente:
    *   a declaração de uma variável para manter o registro de um resultado final.
    *   a escrita de um loop for para modificar o resultado consistentemente.
    *   o retorno do resultado
2.  Se você demorar mais de 5 minutos, **peça ajuda**! Este é um exercício de raciocínio crítico, e não de tortura.

# Envio
Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/katas-javascript-2) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado..
