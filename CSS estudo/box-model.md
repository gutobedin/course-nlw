# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura)            width | height
- Conteudo                              content
- Bordas                                border
_ Preenchimento interno                 padding
- Espaços fora da caixa                 margin

* Cada elemento da sua pagina, sera considerado uma caixa.*






## box-sizing 

como será calculado o tamanho total da caixa?

- content-box | border-box
```css
div {
    box-sizing: border-box;
}
```



## display: block vs display: inline

- como as caixas se comportam em relação as outras caixas
- comportamento externo das caixas

**block**                                   **inline**
Ocupa toda a linham colocando o             
proximo elemento abaixo desse                 Elemento ao lado do outro 
-----------------------------------------------------------------------------
width e height são respeitados               width e height não funcionam
-----------------------------------------------------------------------------
padding, margin, border irão                 Somente valores horizontais de
funcionar corretamente.                      margin, padding e border
-----------------------------------------------------------------------------


exemplos:
block: `<p> <div> <section>`, todos os haddings `<h1> <h2>...`
inline: `<a> <strong> <span> <em>`


## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length` | `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0px;
    margin: 8px 16px;
    margin: 8px;
}
```
    * Cuidado com margin collapsing (top se ajunta ao bottom)




## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}
```

    * Padding poderá causar diferença na largura de um elemento





## border ( e outline )

As bordas da caixa

- value: `<border-style` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`

```css
div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
} 
```

### E outline?

- Difere em 4 sentidos:
    - Não modifica o tamanho dacaixa, pois não é parte do box model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade








    ## I M P O R T A N T E

    **Sempre usar o box-sizing: border-box**
    *Para sempre respeitar o tamanho*