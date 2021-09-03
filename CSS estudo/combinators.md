# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

# Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

## Child combinator

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que é irmão na hierarquia
<button>teste1</button>
<button>teste2</button>
button + button {
    margin-left: 12px;
}

```css
h1 + p
```


## Utilizando combinadores

```css
ul > li [class="red"]
```
## Dica

* Seletores muyito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.