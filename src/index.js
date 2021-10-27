import './styles/app.scss';
import Splide from '@splidejs/splide';

new Splide( '.splide', {
    perPage: 1,
    autoplay: true,
    rewind : true,
    type   : 'loop',
    // padding: '5rem',
    focus  : 'center',
    breakpoints: {
        600: {
            perPage: 1,
        }
    }
} ).mount();