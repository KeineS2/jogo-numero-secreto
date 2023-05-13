const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //window serve para assim que a app abrir, a configuração de reconhecimento de vez estará ativada

const recognition = new SpeechRecognition(); //reconhecer voz

recognition.lang = 'pt-Br' //idioma

recognition.start() //iniciar

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript //mostra no console só o que tem em results e nas array 0
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)

}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) //quando a função acabar