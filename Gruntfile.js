/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // engine: 'im', <-- commented out for Windows (Udacity's instructions)
          separator: '_',
          sizes: [
            // NOTE: I used 150 dpi as 1x DPR which works for mobile/tablet
            // displays. For laptop/desktop displays, the value may be around
            // 72-96 dpi.
            // see https://www.html5rocks.com/en/mobile/high-dpi/#toc-bg

            // I focused on mobile displays to enforce a mobile-first
            // priority and minimize use cases that I had to account for.

            // alternate the pairs of directives to create the two image folders
            {
              quality: 60,
              width: 500,
              density: 150,
              name: '1x'
            },
            // {
            //   quality: 60,
            //   width: 800,
            //   density: 150,
            //   name: '1x'
            // },
            {
              quality: 60,
              width: 1000,
              density: 300,
              name: '2x'
            },
            // {
            //   quality: 60,
            //   width: 1600,
            //   density: 300,
            //   name: '2x'
            // }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          // src: ['*_lg.jpg'],
          src: ['*_sm.jpg'],
          cwd: 'images_src/',
          // dest: 'images_lg/'
          dest: 'images_sm/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        // src: ['images_lg'],
        src: ['images_sm'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          // create: ['images_lg']
          create: ['images_sm']
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
