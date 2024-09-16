$(document).ready(function () {

    const postitColors = ['#f7d6b5', '#f8e1c1', '#f5cbb0', '#fbe2c9', '#f4cfb7', '#fae1c0'];
    let colorIndex = 0;

    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#nova-tarefa').val();
        const novoItem = $(`<li style="display: none;" ></li>`);
        $(`<div class="overlay-texto" style="background-color: ${postitColors[colorIndex]};">
             <a href="#">${enderecoDaNovaImagem}</a>
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn('fast');
        $('#nova-tarefa').val('');

        colorIndex = (colorIndex + 1) % postitColors.length;
    })

    $('ul').on('click', '.overlay-texto a', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        $(this).toggleClass('overlay-texto-click');
    });


})