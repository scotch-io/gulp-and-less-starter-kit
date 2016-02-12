# Starter kit to use Gulp with Less.
====================================
A super clean and easy to use starter kit for using Gulp and Less. This should help you repurpose Gulp and Less for your own projects.

- Read the article: : http://scotch.io/tutorials/getting-started-with-less
- Watch the video: https://www.youtube.com/watch?v=5nqWhwsMQqs

<a href="http://www.youtube.com/watch?feature=player_embedded&v=5nqWhwsMQqs
" target="_blank"><img src="http://img.youtube.com/vi/5nqWhwsMQqs/0.jpg" width="240" height="180" border="10" /></a>


## Features

### LESS / CSS Stuff

- Watches for Less changes on save
- Checks for Less errors and outputs them without you having to rerun Gulp
- Autoprefixes for legacy browsers
- Combines all CSS into one big and sexy minified file
- Includes Less Bootstrap

### Javascript Stuff

- Automatically compiles all jQuery libraries into one big file JS file
- Lints custom scripts for errors
- Combines all custom scripts into one file

## How To Use

    $ git clone git@github.com:scotch-io/gulp-and-less-starter-kit.git
    $ cd gulp-and-less-starter-kit
    $ npm install
    
After, run

    $ gulp
    
Or 

    $ gulp server
    
...if you need a local server. Folder **build** serving at [http://localhost:8888](http://localhost:8888)

Should use [Livereload extension](http://livereload.com/extensions/). Or inject `<script src="//localhost:35729/livereload.js"></script>` into your page.

When you change a LESS(or JS) file, the page will reload.

## Updates

**If this isn't working**, it's probably because you need to update. Just run `npm update --save-dev`

**If no command gulp found?**, you need to install it globally `npm install -g gulp` or run `npm run gulp`

### Still broken or not working?

Try this:

```javascript
sudo npm cache clean
npm install --save-dev
npm update --save-dev
gulp
```


## Quick Tips
- Any changes in `assets/less/*` will trigger the Less to compile on save
- All files in `assets/js/libs/*`  will be compressed to `build/jquery.plugins.min.js`
- All files in `assets/js/*` (except for `libs`) will be compressed to `build/scripts.min.js`


#### Special Thanks

To Kenny Song for his contributions and https://github.com/baivong
