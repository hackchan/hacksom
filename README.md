# Hacksom
`Hackson` es un idioma inventado para aprender y aplicar conceptos de [JavaScript](https://www.ecma-international.org/ecma-262/8.0/index.html).

## Descripción del Idioma

- Si la palabra termina con "ar" se le quitan esas dos letras.

- si la palabra inicia con "z" se le añade "pe" al final.

- Si la palabra traducida tiene 10 letras o mas se debe partir a la mitad y unir con un guion en el medio.

- Si la palabra original es un palindromo, ninguna regla anterior cuenta y devuelve la misma palabra intercalando letras mayúsculas y minúsculas. 

## Instalacion

```
npm install hacksom

```


## Uso

```
import hacksom from 'hacksom'

hacksom("programar") //program
hacksom("Zorro") 
//Zorrope
hacksom("Zarpar") 
//Zarppe
hacksom("abecedario") //abece-dario
hacksom("sometemos") 
//SoMeTeMoS

```

## Créditos
- [Fabio Rojas](https://twitter.com/@hackchan77)

## Licencia
 - [MIT](https://opensource.org/licenses/MIT) 