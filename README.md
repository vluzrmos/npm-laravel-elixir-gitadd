# Laravel Elixir Git Add

That command should help you to use "git add".

# Installation

    npm install laravel-elixir-gitadd --save

# Usage

in your `gulpfile.js`:

```javascript

var elixir = require('laravel-elixir');

//it is required to use mix.gitadd()
require('laravel-elixir-gitadd'); 

elixir(function (mix) {
    mix.less('app.less');
    
    mix.version(['css/app.css']);
    
    mix.copy([
    	'bower_components/fontawesome/fonts',
    	'bower_components/bootstrap/fonts',
    	'bower_components/ionicons/fonts'
	], 'public/fonts');

    mix.gitadd('public/build');
    mix.gitadd('public/fonts');
});
```