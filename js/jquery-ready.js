$(document).ready(function() {
    // Одинаковая высота элементов на главной странице
    if ($('.grid').length) {
        let maxHeight = 0;

        $('.grid__item').each(function() {
            let gridItemHeight = $(this).height();

            if (gridItemHeight > maxHeight) {
                maxHeight = gridItemHeight;               
            }
        })

        $('.grid__item').height(maxHeight);
    }


    //Открытие/Закрытие модалок
    if ($('.modal').length) {
        $('a[data-modal]').click(function () {
            let linkTarget = $(this).attr('data-modal');

            $('.modal[data-modal='+ linkTarget +']').fadeIn();
            $('body').addClass('no-scroll');
        })

        $('.modal .close').click(function() {
            $(this).closest('.modal').fadeOut();
            $('body').removeClass('no-scroll');
        })
    }

    //Маска телефона
    if ($('.modal').length) {
        $('input[name="phone"]').mask('+7(999)9999999')
    }

    //Успешная отправка
    /*
    Этот код скорее всего будет еще редактироваться, когда появится обработчик писем php
    */
    if ($('.modal').length) {
        $('.form').on('submit', function(evt) {
            evt.preventDefault();

            $(this).find('.form__title').text('Спасибо');
            $(this).find('.form__subtitle').text('Отдел поддержки клиентов свяжется с вами и уточнит информацию.')

            $(this).find('.form__item, .form__submit, .form__agree').hide();
        })
    }
    
});
