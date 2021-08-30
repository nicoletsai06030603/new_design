$('[data-fancybox^="quick-view"]').fancybox({
    animationEffect: "fade",
    animationDuration: 300,
	arrows: true,
	prevEffect		: 'fade',
	nextEffect		: 'fade',
    margin: 0,
    gutter: 0,
    touch: {
        vertical: false
    },
    btnTpl : {

        download : '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">' +
                    '<svg viewBox="0 0 40 40">' +
                        '<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />' +
                    '</svg>' +
                '</a>',

        zoom : '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
                    '<svg viewBox="0 0 40 40">' +
                        '<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />' +
                    '</svg>' +
                '</button>',

        close : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                    '<svg viewBox="0 0 40 40">' +
                        '<path d="M10,10 L30,30 M30,10 L10,30" />' +
                    '</svg>' +
                '</button>',

       // 如果'smallBtn'沒有設置為 false，默認關閉按鈕將會被放置在你的 html/inline/ajax 內容中
        smallBtn   : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',

        // 箭頭
        arrowLeft : '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                        '<svg viewBox="0 0 40 40">' +
                          '<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>' +
                        '</svg>' +
                      '</button>',

        arrowRight : '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                      '<svg viewBox="0 0 40 40">' +
                        '<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>' +
                      '</svg>' +
                    '</button>'
    },

        
    onInit: function(instance) {


        var list = '',
            $bullets;

        for (var i = 0; i < instance.group.length; i++) {
            list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
        }

        $bullets = $('<ul class="product-bullets">' + list + '</ul>').on('click touchstart', 'a', function() {
            var index = $(this).data('index');

            $.fancybox.getInstance(function() {
                this.jumpTo(index);
            });

        });

        instance.$refs.bullets = $bullets.appendTo(instance.$refs.stage);

    },
    beforeShow: function(instance) {

        // Mark current bullet navigation link as active
        instance.$refs.stage.find('ul:first')
            .children()
            .removeClass('active')
            .eq(instance.currIndex)
            .addClass('active');

    },
	afterShow: function(){
		$(document).bind('mousewheel', function(event, delta) { return false; });
		/*var current = $(window).scrollTop();
		$(window).scroll(function() {
			$(window).scrollTop(current);
		});*/
    },
    afterClose: function(instance, current) {
		$(document).unbind('mousewheel');
		/*$(window).off('scroll');*/

        // Move form back to the place
        //instance.$refs.form.appendTo(current.opts.$orig.parent());

    }
});
