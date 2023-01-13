  var original = ('teste 1 de 2 string 3')
  var novafrase = original.replace(/1/g, '[removido]').replace(/2/g,'[removido]').replace(/3/g, '[removido]')

  alert('A frase original é : ' + original)
  alert('Após o uso da função replace ficou assim: ' + novafrase)