function acaoderetorno() {
    const dados = document.querySelector('#InputNomeCompleto')
    const nomeCompleto = dados.value
    const sentimentoUsuario = document.querySelector('#sentimento')
    let textoOption = sentimentoUsuario.options[sentimentoUsuario.selectedIndex].text
    
    // let textootimo = 'que bom que você está ótimo, passe sua energia positiva para as pessoas.'
    // let textobem = 'que bom que você está bem, continue assim e sua vida será cada vez memlhor.'
    // let textomaisoumenos = 'nem sempre estamos em um bom dia, mas pense positivo que tudo vai melhorar.'
    // let textonaoestoubem = 'fico triste que não está bem, caso precisar conversar me liga 0800.'

    // switch (textoOption) {
    //     case 'Estou ótimo':
    //         alert(`Olá ${nomeCompleto}, ${textootimo}`)
    //         break
    //     case 'Estou bem':
    //         alert(`Olá ${nomeCompleto}, ${textobem}`)
    //         break
    //     case 'Estou mais ou menos':
    //         alert(`Olá ${nomeCompleto}, ${textomaisoumenos}`)
    //         break
    //     case 'Hoje não estou bem':
    //         alert(`Olá ${nomeCompleto}, ${textonaoestoubem}`)
    //         break
    // }

    const messages = {};
    messages['Estou ótimo'] = 'que bom que você está ótimo, passe sua energia positiva para as pessoas.'
    messages['Estou bem'] = 'que bom que você está bem, continue assim e sua vida será cada vez melhor.'
    messages['Estou mais ou menos'] = 'nem sempre estamos em um bom dia, mas pense positivo que tudo vai melhorar.'
    messages['Hoje não estou bem'] = 'fico triste que não está bem, caso precisar conversar me liga 0800.'

    let msgFinal = messages[textoOption];
    alert(msgFinal || 'mensagem para tratar casos default.')
}