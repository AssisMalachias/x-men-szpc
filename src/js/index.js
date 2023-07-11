// esse é um comentário
/**/
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {


        const personagemSelecionado =  document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado')

        const  personagemGrande = document.querySelector('.personagem-grande');
        
        const idPersonagem = personagem.attributes.id.value;
        personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const  nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-pesrsonagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        
        if(windows.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    })
})