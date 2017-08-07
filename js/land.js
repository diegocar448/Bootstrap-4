function updateNavbar(){
    var scrollTopNum = $(window).scrollTop();

    if(scrollTopNum > 10){
        $("#menu").addClass("bg-preto");
        $("#menu").removeClass("bg-preto2");
    }else{
        $("#menu").addClass("bg-preto2");
        $("#menu").removeClass("bg-preto");
    }
}


//quando o documento for carregado estiver pronto a gente executa a 
//função que vai executa uma função que vai executar essa função de atualizar

//precisa chamar essa função toda vez que eu rolar a tela "scroll" rolar a tela inteira "window"
$(document).ready(function(){    
    updateNavbar();

    $(window).scroll(function(){
        updateNavbar();
    })


    $(".page-scroll").click(function(e) {   //quando um elemento que tiver a classe page-scroll, quando for clicado vai retornar uma função
        e.preventDefault();                     //E um evento de clique mas queremos para-lo em um ponto (e.preventDefault) para parar a execução
                                             //para que nada acontece a não ser o que foi determinado

        var hash = this.hash;    //o elemento que for clicado vai pegar o hash desse elemento
                                //o hash será enviado para o elemento clicado por exemplo #oque-aprenderei na url para pélo id="#oque-aprenderei"

        //agora vamos aplicar a animação para ir até esse elemento
        $("html, body").animate({
            //qual animação a ser utilizada, passará para o hash no caso #oque-aprenderei 
            //offset pegar posição e tamanho
            //e retorna um objeto + tempo"duração"
            scrollTop: $(hash).offset().top-73 //remover 73 para alinhar e não mudar a marcação no menu antes do espaço determinado
        }, 500);                               //#topo como é a primeira e vazia # então 
                                //<a href="#topo" class="navbar-brand p-0 page-scroll">         
}) 

//criar seletor de video
    $(".videoModal").click(function(e){ 
        e.preventDefault(); //vamos parar a ação normal

        //vamos pegar o id do video a partir de uma propriedade do jquery função chamada data ex: $(this).data-video
        var id_youtube = $(this).data("video");

        //adicionar parte do agora, ao final da linha teremos o link
        var link = "https://www.youtube.com/embed/"+id_youtube+"?rel=0&amp;showinfo=0";

        //agora vamos pegar o titulo tbm de data-titulo="Introdução", depois faremos ele aparacer no modal
        var titulo = $(this).data("titulo");

        //videoModal é o id do meu modal
        //o modal-title que estiver dentro vai mudar o conteúdo html dele e vai passar o titulo
        $("#videoModal .modal-title").html(titulo);
        //usar o attr para alterar o atributo link "src" para o novo atributo "link"
        $(".video-modal").attr("src", link);

        //vamos fazer o modal aparecer
        //pegar o id do modal #videoModal e chamar a função nativa do bootstrap + atributo(show) para ele aparecer
        $("#videoModal").modal("show");

    })

    //para parar o audio modal qdo for fechado
    //trigger para que o bootstrap enviar para gente com o modal some
    //usar on quando o trigger for disparado "qdo tal coisa acontecer faça" modal bootstrap tiver ocultado
    $("#videoModal").on("hidden.bs.modal", function(e){
        //fazer esse atributo voltar para um video qualquer que não tenha auto-play
        $(".video-modal").attr("src", 
        "https://www.youtube.com/watch?v=TlSmnqqs7OU"); //e o video ja vai parar
    })

})







