const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


 mix.copy('resources/assets/css/icons/icomoon/styles.css', 'public/assets/css/icons/icomoon/styles.css');
 mix.copy('resources/assets/css/bootstrap.css', 'public/assets/css/bootstrap.css');
 mix.copy('resources/assets/css/core.css', 'public/assets/css/core.css');
 mix.copy('resources/assets/css/components.css', 'public/assets/css/components.css');
 mix.copy('resources/assets/css/colors.css', 'public/assets/css/colors.css');

 mix.copy('resources/assets/js/plugins/loaders/pace.min.js', 'public/assets/js/plugins/loaders/pace.min.js');
 mix.copy('resources/assets/js/core/libraries/jquery.min.js', 'public/assets/js/core/libraries/jquery.min.js');
 mix.copy('resources/assets/js/core/libraries/bootstrap.min.js', 'public/assets/js/core/libraries/bootstrap.min.js');
 mix.copy('resources/assets/js/plugins/loaders/blockui.min.js', 'public/assets/js/plugins/loaders/blockui.min.js');
 mix.copy('resources/assets/js/plugins/ui/nicescroll.min.js', 'public/assets/js/plugins/ui/nicescroll.min.js');
 mix.copy('resources/assets/js/plugins/ui/drilldown.js', 'public/assets/js/plugins/ui/drilldown.js');

 mix.copy('resources/assets/js/core/app.js', 'public/assets/js/core/app.js');
 mix.copy('resources/assets/js/plugins/ui/ripple.min.js', 'public/assets/js/plugins/ui/ripple.min.js');


 mix.copy('resources/assets/images/logo_dark.png', 'public/assets/images/logo_dark.png');
 mix.copy('resources/assets/images/logo.png', 'public/assets/images/logo.png');
 mix.copy('resources/assets/images/placeholder.jpg', 'public/assets/images/placeholder.jpg');
 mix.copy('resources/assets/images/flags/gb.png', 'public/assets/images/flags/gb.png');
 mix.copy('resources/assets/images/flags/in.png', 'public/assets/images/flags/in.png');

 mix.copy('resources/assets/css/icons/icomoon/fonts/icomoon.eot', 'public/assets/css/icons/icomoon/fonts/icomoon.eot');
 mix.copy('resources/assets/css/icons/icomoon/fonts/icomoon.svg', 'public/assets/css/icons/icomoon/fonts/icomoon.svg');
 mix.copy('resources/assets/css/icons/icomoon/fonts/icomoon.ttf', 'public/assets/css/icons/icomoon/fonts/icomoon.ttf');
 mix.copy('resources/assets/css/icons/icomoon/fonts/icomoon.woff', 'public/assets/css/icons/icomoon/fonts/icomoon.woff');
