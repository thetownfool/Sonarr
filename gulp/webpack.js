var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var paths = require('./paths');

require('./handlebars.js');


gulp.task('webpack', ['handlebars'], function (cb) {


 return gulp.src('src/UI/app.js')
 .pipe(gulpWebpack({
    resolve:{
        root: 'src/UI',
        alias:{
           'backbone'                : 'Shims/backbone',
           'moment'                  : 'JsLibraries/moment',
           'filesize'                : 'JsLibraries/filesize',
           'handlebars'              : 'Shared/Shims/handlebars',
           'handlebars.helpers'      : 'JsLibraries/handlebars.helpers',
           'bootstrap'               : 'JsLibraries/bootstrap',
           'backbone.deepmodel'      : 'JsLibraries/backbone.deep.model',
           'backbone.pageable'       : 'JsLibraries/backbone.pageable',
           'backbone-pageable'       : 'JsLibraries/backbone.pageable',
           'backbone-pageable'       : 'JsLibraries/backbone.pageable',
           'backbone.validation'     : 'JsLibraries/backbone.validation',
           'backbone.modelbinder'    : 'JsLibraries/backbone.modelbinder',
           'backbone.collectionview' : 'JsLibraries/backbone.collectionview',
           'backgrid'                : 'Shims/backgrid',
           'backgrid.paginator'      : 'Shims/backgrid.paginator',
           'backgrid.selectall'      : 'JsLibraries/backbone.backgrid.selectall',
           'fullcalendar'            : 'JsLibraries/fullcalendar',
           'backstrech'              : 'JsLibraries/jquery.backstretch',
           'underscore'              : 'JsLibraries/lodash.underscore',
           'marionette'              : 'Shims/backbone.marionette',
           'signalR'                 : 'Shims/jquery.signalR',
           'jquery-ui'               : 'JsLibraries/jquery-ui',
           'jquery.knob'             : 'JsLibraries/jquery.knob',
           'jquery.easypiechart'     : 'JsLibraries/jquery.easypiechart',
           'jquery.dotdotdot'        : 'JsLibraries/jquery.dotdotdot',
           'messenger'               : 'JsLibraries/messenger',
           'jquery'                  : 'Shims/jquery',
           'typeahead'               : 'JsLibraries/typeahead',
           'zero.clipboard'          : 'JsLibraries/zero.clipboard',
           'bootstrap.tagsinput'     : 'JsLibraries/bootstrap.tagsinput',
           'libs'                    : 'JsLibraries/'
       }
   },
   output: {
    filename: 'main.js',
    sourceMapFilename: 'main.map'
   },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
            Backbone: 'backbone',
            Marionette: 'backbone.marionette'
        })
    ]
}))
.pipe(gulp.dest(paths.dest.root));
/*
    var config = {
        mainConfigFile: 'src/UI/app.js',
        fileExclusionRegExp: /^.*\.(?!js$)[^.]+$/,
        preserveLicenseComments: false,
        dir: paths.dest.root,
        optimize: 'none',
        removeCombined: true,
        inlineText: false,
        keepBuildDir: true,
        modules: [
            {
                name: 'app',
                exclude: ['templates.js']
            }
        ]};

    requirejs.optimize(config, function (buildResponse) {
        console.log(buildResponse);
        cb();
    });*/

});
