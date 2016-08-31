import Vue from 'vue';

import Navigation from './components/Navigation.vue';
import HomeHeader from './components/home/HomeHeader.vue';
import Summary from './components/home/Summary.vue';
import Skills from './components/home/Skills.vue';
import Experience from './components/home/Experience.vue';
import Hobbies from './components/home/Hobbies.vue';
import Contact from './components/home/Contact.vue';

const Home = new Vue({

    el: '#home',

    components: {
        Navigation,
        HomeHeader,
        Summary,
        Skills,
        Experience,
        Hobbies,
        Contact
    },

    ready() {
        console.log(this);
    }

});
