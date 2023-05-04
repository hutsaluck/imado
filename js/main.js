jQuery(function ($) {

    /*
    * Add the functionality of ajax-transtion year posts
    * */
    $(`.wp-block-archives a`).on(`click`, e => {
        e.preventDefault()

        const el = $(e.currentTarget)
        const el_text = el.text()
        const year = parseInt(el_text.match(/\d+/))

        $.ajax({
            url: main.ajax_url,
            type: `POST`,
            data: {
                action: `imd_get_post_of_year`,
                year: year,
            },
            beforeSend: function () {
                el.text(`Loading...`)
            },
            success: function ({data}) {
                $(`main#primary`).html(data)

                $(`html, body`).animate({
                    scrollTop: $(`body`).offset().top - 150
                }, 300);

                setTimeout(() => el.text(el_text), 3000);
            }
        });

    })

    /*
    * Add the functionality of ajax-transtion category posts
    * */
    $(`.wp-block-categories-list a`).on(`click`, e => {
        e.preventDefault()

        const el = $(e.currentTarget)
        const category = el.text()

        $.ajax({
            url: main.ajax_url,
            type: `POST`,
            data: {
                action: `imd_get_post_of_category`,
                category: category,
            },
            beforeSend: function () {
                el.text(`Loading...`)
            },
            success: function ({data}) {
                $(`main#primary`).html(data)

                $(`html, body`).animate({
                    scrollTop: $(`body`).offset().top - 150
                }, 300);

                setTimeout(() => el.text(category), 3000);
            }
        });

    })




});