import Vue from 'nativescript-vue';
import Home from './components/Home';
import { TNSFontIcon, fonticon } from './nativescript-fonticon';

TNSFontIcon.paths = {
    fa: './assets/font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();