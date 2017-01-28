import Slider from './Slider';
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

//import '../sass/main.scss';

let slider = new Slider(
    {
        type: "slide", //"slide" или "fadeIn",
        speed: 5000,
        delay: 2000,
        images: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg']
    }
);



