$(function() {
    faq_toggle();

    function faq_toggle() {

        var btn_faq = $('.btn-faq');

        btn_faq.on('click', function(){
            $(this).find('svg polyline:first-of-type').toggle();
            //$('.faq-toggle').slideUp()
            $(this).parent().find('.faq-toggle').slideToggle();
        })
    }
});