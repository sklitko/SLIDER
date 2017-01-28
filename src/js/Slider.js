class Slider {
    constructor(param = {}) {
        this.type = param.type || 'slide';
        this.speed = param.speed / 1000;
        this.delay = param.delay;
        this.images = param.images;

        this.initialize();

        if (this.type == 'slide') {
            this.slide(this.delay, this.speed);
        } else {
            this.fadeIn(this.delay, this.speed);
        }

    }
}


Slider.prototype.initialize = function () {
    let region = document.querySelector('body');
    let div = document.createElement('div');
    let wrap = document.createElement('div');
    div.className = 'slider';
    wrap.className = 'wrap';
    region.appendChild(div);
    div.appendChild(wrap);
    for (let image of this.images) {
        let DOM_img = document.createElement("img");
        DOM_img.src = image;
        wrap.appendChild(DOM_img);
        $(DOM_img).css({"visibility": "hidden"})
    }
};

Slider.prototype.slide = function (interval, duration) {
    let i = 0;
    // setInterval(function () {
    //     let slidersAmount = $('.wrap').children().length;
    //     $($('.wrap').children()[i]).removeClass().addClass('animated fadeOutLeft').css({
    //         '-webkit-animation-duration': duration + 's',
    //         'visibility': 'visible'
    //     });
    //     $($('.wrap').children()[i + 1]).removeClass().addClass('animated fadeInRight').css({
    //         '-webkit-animation-duration': duration + 's',
    //         'visibility': 'visible'
    //     });
    //     if (i < slidersAmount - 1) {
    //         ++i
    //     } else {
    //         i = 0;
    //         $($('.wrap').children()[i]).removeClass().addClass('animated fadeInRight').css({'-webkit-animation-duration': duration + 's'});
    //     }
    // }, interval);

    let time = duration * 1000 + interval;
    let timerId = setTimeout(function slide() {
        let $wrap = $('.wrap');
        let slidersAmount = wrap.children().length;
        $($wrap.children()[i]).removeClass().addClass('animated').addClass('fadeOutLeft').css({
            '-webkit-animation-duration': duration + 's',
            'visibility': 'visible'
        });
        $($wrap.children()[i + 1]).removeClass().addClass('animated fadeInRight').css({
            '-webkit-animation-duration': duration + 's',
            'visibility': 'visible'
        });
        if (i < slidersAmount - 1) {
            i++
        } else {
            i = 0;
            $($wrap.children()[i]).removeClass().addClass('animated fadeInRight').css({'-webkit-animation-duration': duration + 's'});
        }
        timerId = setTimeout(slide, time);
    }, 1000);
};

Slider.prototype.fadeIn = function (interval, duration) {
    let i = 0;
    let time = duration * 1000 + interval;
    let timerId = setTimeout(function slide() {
        let $wrap = $('.wrap');
        let slidersAmount = $wrap.children().length;
        $($wrap.children()[i]).removeClass().addClass('animated').addClass('fadeOut').css({
            '-webkit-animation-duration': duration + 's',
            'visibility': 'visible'
        });
        $($wrap.children()[i + 1]).removeClass().addClass('animated fadeIn').css({
            '-webkit-animation-duration': duration + 's',
            'visibility': 'visible'
        });
        if (i < slidersAmount - 1) {
            i++
        } else {
            i = 0;
            $($wrap.children()[i]).removeClass().addClass('animated fadeIn').css({'-webkit-animation-duration': duration + 's'});
        }
        timerId = setTimeout(slide, time);
    }, 1000);


};




export default Slider;