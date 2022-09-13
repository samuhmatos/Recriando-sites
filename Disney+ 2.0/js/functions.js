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

    footer()

    function footer() {
        lang()

        function lang(){
            var btn_lang = $('.lang-toggle')
            lang_toggle();
            hover_lang();

            function hover_lang(){
                btn_lang.hover(function(){
                    $(this).find('p').css('textDecoration','underline');
                    $(this).find('i').css('color', 'white');
                    $('#svg-lang').css('stroke', 'white');
                }, function(){
                    $(this).find('p').css('textDecoration','none');
                    $(this).find('i').css('color', 'silver');
                    $(this).find('svg').css('stroke', 'silver');
                })
            }
            function lang_toggle() {
                btn_lang.on('click', function(){
                    var sub_lang = $('.sub-lang')
                    sub_lang.slideToggle()
                })
            }
        }
        
    }
});