$(document).ready(function() {

    $('#1, #2, #3, #4, #5, #6, #7, #8, #9, #0, #add, #substract, #multiply, #divide, #dot, #para1, #para2').click(function(){
        const value = $(this).val();
        console.log(value);
        const newTextAreaValue = $('textarea').val() + value;
        const total = $('textarea').val(newTextAreaValue);
    });

    $('#equal').click(function(){
        const textAreaValue = eval($('textarea').val());
        $('textarea').val(textAreaValue);
    });

    $('#clear').click(function(){
        $('textarea').val('');
    });

    $('#backspace').click(function(){
        const newValueTextArea = $('textarea')
            .val()
            .substring(0, $('textarea').val().length - 1);

        $('textarea').val(newValueTextArea);
    });

});