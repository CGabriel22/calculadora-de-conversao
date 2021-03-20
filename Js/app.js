//de 504 linhas para ...
class Calculator {
    //Características ou valores da calculadora
    constructor() {
        this.valor_entrada = document.querySelector('#entrada');
        this.valor_saida = document.querySelector('#saida');
        this.unidade_entrada = document.querySelector('#unidade-entrada');
        this.unidade_saida = document.querySelector('#unidade-saida');
        this.option_entrada = document.querySelector('#unidades-entrada');
        this.option_saida = document.querySelector('#unidades-saida');
    }
    //Ações
    reverse() {
        let selectedExit = this.option_saida.selectedIndex;
        let selectedGet = this.option_entrada.selectedIndex;
        let exitValue = this.valor_saida.innerHTML;
        let getValue = this.valor_entrada.innerHTML;
        let exitUnity = this.unidade_saida.innerText;
        let getUnity = this.unidade_entrada.innerText;
        //opção selecionada de entrada passa a ser igual a opção selecionada de saida
        this.option_entrada.selectedIndex = selectedExit;
        //opção selecionada de saida passa a ser igual a opção selecionada de entrada
        this.option_saida.selectedIndex = selectedGet;
        //valor de entrada passa a ser igual ao valor de saida
        this.valor_entrada.innerHTML = exitValue;
        //valor de saida passa a ser igual ao valor de entrada
        this.valor_saida.innerHTML = getValue;
        //unidade de entrada passa a ser igual a unidade de saida
        this.unidade_entrada.innerText = exitUnity;
        //unidade de saida passa a ser igual a unidade de entrada
        this.unidade_saida.innerText = getUnity;
    }

    changeUnit() {
        let getUnity = this.option_entrada.value;
        let exitUnity = this.option_saida.value;
        //unidade de entrada passa a ser o valor da unidade selecionada nas opções de unidades de entrada
        this.unidade_entrada.innerText = getUnity;
        //unidade de saida passa a ser o valor da unidade selecionada nas opções de unidades de saida
        this.unidade_saida.innerText = exitUnity;
        //chama a função converter passando o valor de entrada
        converter(this.valor_entrada.innerHTML)
    }

    changeValue(type='n', value='0') {
        let getValue = this.valor_entrada.innerHTML
        //condicional para verificar se é do tipo n(number) ou a(action)
        if(type == 'n') {
            //verifica se o valor inicial é igual a zero e se o valor inserido é diferente de "ponto"
            if(getValue == '0' && value != '.') {
                //caso o valor for zero e o valor inserido for diferente de "ponto", antes de concatenar o valor, ele deve ser zerado
                this.valor_entrada.innerHTML = ''
            }
            //concatena o valor inserido ao final do valor inicial
            this.valor_entrada.innerHTML += value
        
        } else if(type == 'a') {
            if(value == 'limpar') {
                //limpa o valor inicial o substituindo por zero
                this.valor_entrada.innerHTML = '0'
            } else if(value == 'mais') {
                //casting de string para float para somar o valor inicial com 1 e substitui-lo na variável
                getValue = parseFloat(getValue) + 1
                //transforma o valor float em string somando-o a uma string vazia
                getValue = getValue + ""
                //verifica se o numero é diferente de Not a Number
                if(getValue != 'NaN') {
                    //se for, substitui o valor inicial pelo novo valor inicial
                    this.valor_entrada.innerHTML = getValue
                } else {
                    //caso contrario, substitui o valor por zero
                   this.valor_entrada.innerHTML = '0'
                }
            } else if(value == 'menos') {
                //casting de string para float para subtrair o valor inicial com 1 e substitui-lo na variável
                getValue = parseFloat(getValue) - 1
                //transforma o valor float em string somando-o a uma string vazia
                getValue = getValue + ""
                //verifica se o numero é diferente de Not a Number
                if(getValue != 'NaN') {
                    //se for, substitui o valor inicial pelo novo valor inicial
                    this.valor_entrada.innerHTML = getValue
                } else {
                    //caso contrario, substitui o valor por zero
                   this.valor_entrada.innerHTML = '0'
                }
            } else if(value == 'back') {
                //valor editado é igual ao valor inicial retirado seu último carácter
                let editedValue = getValue.replace(" ", "-").substring(-1, getValue.length - 1)
                //substitui o valor inicial pelo novo valor
                this.valor_entrada.innerHTML = editedValue
                //atualiza o valor da variável para passar por um teste
                getValue = document.getElementById('entrada').innerHTML
                //este teste, que verifica se o valor é vazio ou -
                if(getValue == '' || getValue == '-') {
                    //caso for, substitui por zero
                    this.valor_entrada.innerHTML = '0'
                }
            }
        }
        if(getValue.length > 10 && value != 'back' && value != 'limpar') {
            alert('quantidade maxima de caracters atingida. A utilização de mais caracters pode resultar em um mal funcionamento do calculo')
        }

        getValue = document.getElementById('entrada').innerHTML

        converter(getValue)
    }

}

var calculator = new Calculator();

function alterar_valor(type, value) {
    calculator.changeValue(type, value)
}

function converter(valor_entrada) {
    let tipo = document.getElementById('tipo').value
    let unidades_entrada = document.getElementById('unidades-entrada').value
    let unidades_saida = document.getElementById('unidades-saida').value
    let valor_entrada_num = parseFloat(valor_entrada);
    let valor_saida = 0;
    console.log('tipo: '+tipo)
    console.log('valor de entrada: '+valor_entrada)
    console.log('unidades de entrada: '+unidades_entrada)
    console.log('unidades de saida: '+unidades_saida)

    console.log('---------------------')

    if(tipo == 'comprimento') {
        switch (unidades_entrada) {
            case 'mm':
                console.log('unidade de entrada entrou no laço de mm')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num/100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num/1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num/10000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num/100000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/10000000)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'cm':
                console.log('unidade de entrada entrou no laço de cm')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num/100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num/1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num/10000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/100000)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'dm':
                console.log('unidade de entrada entrou no laço de dm')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num/100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num/1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/10000)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'm':
                console.log('unidade de entrada entrou no laço de m')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num*100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num/100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/1000)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'dam':
                console.log('unidade de entrada entrou no laço de dam')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*10000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num*1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num*100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/100)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'hm':
                console.log('unidade de entrada entrou no laço de hm')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*100000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num*10000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num*1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num*100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = (valor_entrada_num/10)

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
            case 'km':
                console.log('unidade de entrada entrou no laço de km')
                console.log('----------------------')

                switch (unidades_saida) {
                    case 'mm':
                        console.log('unidade de saida entrou no laço de mm')
                        valor_saida = (valor_entrada_num*1000000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'cm':
                        console.log('unidade de saida entrou no laço de cm')

                        valor_saida = (valor_entrada_num*100000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dm':
                        console.log('unidade de saida entrou no laço de dm')

                        valor_saida = (valor_entrada_num*10000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'm':
                        console.log('unidade de saida entrou no laço de m')

                        valor_saida = (valor_entrada_num*1000)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'dam':
                        console.log('unidade de saida entrou no laço de dam')

                        valor_saida = (valor_entrada_num*100)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'hm':
                        console.log('unidade de saida entrou no laço de hm')

                        valor_saida = (valor_entrada_num*10)

                        console.log('resultado:'+valor_saida)
                        break;
                    case 'km':
                        console.log('unidade de saida entrou no laço de km')

                        valor_saida = valor_entrada_num

                        console.log('resultado:'+valor_saida)
                        break;
                }
                break;
        }
    }

    valor_saida = valor_saida + ""
    document.getElementById('saida').innerHTML = valor_saida
}

//criar uma classe converter, onde será realizado a conversão.
//cada unidade deve ser colocada em um objeto com seu calculo de conversão para metros e de metros para a unidade
//desse forma, sempre que for converter passará apenas por uma condicional
//a classe deve converter o valor de entrada para zero utilizando seu calculo ja guardado no objeto
//após, deve converter os metros para a unidade de saida através do calculo ja guardado no objeto
//dessa forma, deve-se facilitar a implementação de novas unidades e diminuir a qnt de condicional