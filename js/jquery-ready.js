$(document).ready(function() {
    // Одинаковая высота элементов на главной странице
    if ($('.grid').length) {
        let maxHeight = 0;

        $('.grid__item').each(function() {
            let gridItemHeight = $(this).height();

            if (gridItemHeight > maxHeight) {
                maxHeight = gridItemHeight;
                console.log(maxHeight)
               
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
});
