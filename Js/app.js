const calcUnits = {
    mm: {
        forMain(n){
            let calc = (n / 1000);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 1000).toFixed(6)
                return calc
            }
            
        },
        ofMain(n){
            let calc = (n * 1000);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 1000).toFixed(6)
                return calc
            }
        }
    },
    cm: {
        forMain(n){
            let calc = (n / 100);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 100).toFixed(6)
                return calc
            }
        },
        ofMain(n){
            let calc = (n * 100);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 100).toFixed(6)
                return calc
            }
        }
    },
    dm: {
        forMain(n){
            let calc = (n / 10);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 10).toFixed(6)
                return calc
            }
        },
        ofMain(n){
            let calc = (n * 10);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 10).toFixed(6)
                return calc
            }
        }
    },
    m: {
        forMain(n){
            return n;
        },
        ofMain(n){
            return n;
        }
    },
    dam: {
        forMain(n){
            let calc = (n * 10);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 10).toFixed(6)
                return calc
            }
        },
        ofMain(n){
            let calc = (n / 10);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 10).toFixed(6)
                return calc
            }
        }
    },
    hm: {
        forMain(n){
            let calc = (n * 100);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 100).toFixed(6)
                return calc
            }
        },
        ofMain(n){
            let calc = (n / 100);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 100).toFixed(6)
                return calc
            }
        }
    },
    km: {
        forMain(n){
            let calc = (n * 1000);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n * 1000).toFixed(6)
                return calc
            }
        },
        ofMain(n){
            let calc = (n / 1000);
            let verifica = verificarTamanho(calc)
            if(verifica == 'verdade'){
                return calc
            } else {
                calc = (n / 1000).toFixed(6)
                return calc
            }
        }
    }
}

function verificarTamanho(r) {
    r = r+""
    if(r.length > 6) {
        return 'falso'
    } else{
        return 'verdade'
    }
}

class Calculator {
    //Características ou valores da calculadora
    constructor() {
        this.valor_entrada = document.querySelector('#entrada');
        this.valor_saida = document.querySelector('#saida');
        this.unidade_entrada = document.querySelector('#unidade-entrada');
        this.unidade_saida = document.querySelector('#unidade-saida');
        this.option_entrada = document.querySelector('#unidades-entrada');
        this.option_saida = document.querySelector('#unidades-saida');
        this.type_of_measure = document.querySelector('#tipo');
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
        this.conversor()
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

        this.valor_entrada = document.querySelector('#entrada');

        this.conversor()
    }

    conversor() {

        let typeOfMeasure = this.type_of_measure.value
        let getUnity = this.option_entrada.value
        let exitUnity = this.option_saida.value
        let getValue = parseFloat(this.valor_entrada.innerHTML);
        let exitValue = 0;

        console.log(`tipo de medida: ${typeOfMeasure}`)
        console.log(`unidade de entrada: ${getUnity}`)
        console.log(`unidade de saida: ${exitUnity}`)
        console.log(`valor de entrada: ${getValue}`)
        console.log(`valor de saida: ${exitValue}`)

        let helpValue = calcUnits[getUnity].forMain(getValue)
        console.log('----------------------------')
        console.log(`valor auxiliar: ${helpValue}`)

        exitValue = calcUnits[exitUnity].ofMain(helpValue)

        console.log('----------------------------')
        console.log(`resultado: ${exitValue}`)

        exitValue = exitValue + ""
        document.getElementById('saida').innerHTML = exitValue

    }

}
var calculator = new Calculator();

//futuras correções:
//novas verificações para impedir o fixed de fixar os numeros decimais em 6 quando: o numero for inteiro
//retirar os zeros do final dos numeros