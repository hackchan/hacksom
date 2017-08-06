
//se usa default ya que hackzom se traspilo 
//con babel.
const hacksom = require('../dist/hacksom.js').default
const expect = require('chai').expect

describe('#Hacksom', function(){
    it('Si la palabra termina con "ar" se le quitan esas dos letras', function(){
        const translation = hacksom("programar")
        expect(translation).to.equal("program")
    })

    it('si la palabra inicia con "z" se le añade "pe" al final.', function(){
        const translation  = hacksom("Zorro")
        const translation2 = hacksom("Zarpar")
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })

    it('Si la palabra traducida tiene 10 letras o mas se debe partir a la mitad y unir con un guion en el medio.', function(){
        const translation = hacksom("abecedario")
		expect(translation).to.equal("abece-dario")  
    })

    
    it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y devuelve la misma palabra intercalando letras mayúsculas y minúsculas.', function(){
         const translation = hacksom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
    })
})