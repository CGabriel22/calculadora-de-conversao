function alterar_unidade(qual) {
    let unidades_entrada = document.getElementById('unidades-entrada').value
    let unidades_saida = document.getElementById('unidades-saida').value

    if(qual == 'entrada') {
        // console.log('mudar a unidade de entrada para: '+unidades_entrada)
        document.getElementById('unidade-entrada').innerText = unidades_entrada
    } else if(qual == 'saida') {
        // console.log('mudar a unidade de saida para: '+unidades_saida)
        document.getElementById('unidade-saida').innerText = unidades_saida
    }

    var valor_entrada = document.getElementById('entrada').innerHTML
    converter(valor_entrada)
}

function alterar_valor(tipo, valor) {
    var valor_entrada = document.getElementById('entrada').innerHTML

    if(tipo == 'n') {
        if(valor_entrada == '0' && valor != '.') {
            document.getElementById('entrada').innerHTML = ''
        }
        document.getElementById('entrada').innerHTML += valor
        
    } else if(tipo == 'a') {
        if(valor == 'limpar') {
            document.getElementById('entrada').innerHTML = '0'
            
        } else if(valor == 'mais') {
            valor_entrada = parseFloat(valor_entrada) + 1
            valor_entrada = valor_entrada + ""
            if(valor_entrada != 'NaN') {
                document.getElementById('entrada').innerHTML = valor_entrada
                
            } else {
                document.getElementById('entrada').innerHTML = '0'
                
            }
        } else if(valor == 'menos') {
            valor_entrada = parseFloat(valor_entrada) - 1
            valor_entrada = valor_entrada + ""
            if(valor_entrada != 'NaN') {
                document.getElementById('entrada').innerHTML = valor_entrada
                
            } else {
                document.getElementById('entrada').innerHTML = '0'
                
            }
        } else if(valor == 'back') {
            var valor_editado = valor_entrada.replace(" ", "-").substring(-1, valor_entrada.length - 1)
            document.getElementById('entrada').innerHTML = valor_editado
            valor_entrada = document.getElementById('entrada').innerHTML
            if(valor_entrada == '' || valor_entrada == '-') {
                document.getElementById('entrada').innerHTML = '0'
                
            }
        }
    }
    if(valor_entrada.length > 10 && valor != 'back' && valor != 'limpar') {
        alert('quantidade maxima de caracters atingida. A utilização de mais caracters pode resultar em um mal funcionamento do calculo')
    }

    valor_entrada = document.getElementById('entrada').innerHTML

    converter(valor_entrada)
}

function converter(valor_entrada) {
    let tipo = document.getElementById('tipo').value
    let unidades_entrada = document.getElementById('unidades-entrada').value
    let unidades_saida = document.getElementById('unidades-saida').value
    console.log('tipo: '+tipo)
    console.log('valor de entrada: '+valor_entrada)
    console.log('unidades de entrada: '+unidades_entrada)
    console.log('unidades de saida: '+unidades_saida)
}