var palavra1 = prompt('Insira uma palavra')
var palavra2 = prompt ('Insira a segunda palavra')

var p1= palavra1.length
var p2 = palavra2.length

if(p1>p2){
    alert(palavra1 + " é a palavra de maior tamanho.")
}else if(p2>p1) {
    alert(palavra2 + " é a palavra de maior tamanho.")
}else{
    alert('As palavras possuem mesmo tamanho.')
}

