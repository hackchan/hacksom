//function platzom(str){

//export default hacksom = str => {
  
  export default function hacksom(str){
    let translation = str

    //Si la  palabra  original es un palindrome,
    //ninguna regla anterior cuenta y se devuelve
    //la misma palbra intercalada mayuscula y minuscula.
    const reverse = (str) => str.split('').reverse().join('')
    const minMay = (str) => str.split('').map((c,indx) => indx %2 == 0 ? c.toUpperCase():c.toLowerCase()).join('')
    function minMay2(str) {
       return str.split('').map(function(c,indx){return indx %2 == 0?c.toUpperCase():c.toLowerCase()}).join('')

    }
    function minMay1(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i<length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }

    if(str == reverse(str)) {
         return minMay(str)
    }

    
    //si la palabra termina en ar se le quitan esos dos caracteres
    if(str.toLowerCase().endsWith("ar")) {
      translation = str.slice(0, -2)
    }
    //Si la palabra inicia con Z, se le añade pe al final
    if(str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }

    //Si la palabra  traducida tiene 10 o más letras, 
    //se debe partir a la mitad  y unir con un guion del medio.
    const length = translation.length
    if (length >= 10 ) {
        const firstHalf = translation.slice(0, Math.round(length / 2))
        const secondHalf = translation.slice(Math.round(length / 2))
        translation = `${firstHalf}-${secondHalf}`
    }

    
    return translation
}
