'use strict';

module.exports = function (grunt) {
    require('bsp-grunt')(grunt, {
        bsp: {
            
            styles: {
                dir: '',
                less: [ '*.less' ],
                options: {
                    autoprefixer: true
                }
            },

            scripts: {
                dir: ''
            },

            bower: {
                'normalize-css': [
                    {
                        src: 'normalize.css',
                        dest: 'bower/normalize-css/normalize.css'
                    }
                ]
            }
        }
    });
};
