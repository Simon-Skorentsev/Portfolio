import Difference from "./modules/difference";
import Download from "./modules/download";
import Form from "./modules/forms";
import VideoPlayer from "./modules/playVideo";
import ShowInfo from "./modules/showInfo";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulePageSlider = new MainSlider({container: ".moduleapp", btns: ".sidecontrol__controls .next", next: '.nextmodule', prev: '.prevmodule'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({  //мини слайдер на 1 слайде index.html
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({  //слайдер с 3 слайда
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init()

    const feedSlider = new MiniSlider({  //feedback - слайдер с отзывами клиентов на 5 слайде 
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init()

    new VideoPlayer('.showup .play', '.overlay').init()  //модалка с видео
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();  //второй слайд

    new Form('.form').init();  //работа с формами и axios запрос на сервер здесь же
    new ShowInfo('.plus__content').init();  //показ текста при клике (modules.html)
    new Download('.download').init();  //для скачивания при клике на div элемент
});