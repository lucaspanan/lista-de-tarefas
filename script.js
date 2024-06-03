
$('form').on('submit', function(e) {
    e.preventDefault();

    // Captura o valor da nova tarefa
    var novaTarefa = $('#nome-da-tarefa').val();
    if (novaTarefa) {
// Alterna a classe 'completed' ao clicar em uma tarefa
$('.addLista').on('click', 'li', function() {
    $(this).toggleClass('completo');
});
        // Adiciona a nova tarefa à lista "Hoje"
        $('.addLista').append('<li>' + novaTarefa + '</li>');

        // Limpa o campo de entrada
        $('#limpar').val('');
    }
});
$('#limpar').on('click', function() {
    $('.addLista').empty();
});
