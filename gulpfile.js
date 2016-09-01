const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

require('laravel-elixir-vueify');

/**
 * Node Root
 */
const node = 'node_modules/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

    mix.sass('home.scss');
    mix.browserify('home.js');

    mix.copy(node + '/font-awesome/fonts', 'public/fonts/');

});
