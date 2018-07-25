# Responsive Images: Project Part 1 #

## Live Demo ##
* [Click here](https://codewithoz.github.io/TheResponsiveBlog/)
* Or copy and paste the following URL into your browser: https://codewithoz.github.io/TheResponsiveBlog/

### Disclosure ###

Some of this project's dependencies contain security vulnerabilities.
Running `npm audit fix` will cause breaking changes but it's not worth it
because this project is simply my attempt at a course exercise.

### Cross-platform testing made possible by [BrowserStack](https://www.browserstack.com) ###
[![BrowserStack Logo](Browserstack-logo@2x.png)](https://www.browserstack.com)

BrowserStack is _really_ **awesome**. I find it really useful that the mobile
devices run on the same OS versions from when they shipped. I can therefore
see how a page looks with the browser features of the time, as opposed to
checking only viewport characteristics as is often the case with browser
developer tools.
I **strongly** encourage you to give BrowserStack a try. (They are _quite_
generous with open source projects :wink:.)

# Original #
## Your Goals: ##

* Make the images fit in their containers in the viewport.
* Restrain the width of the blog.
* Drop the page weight.

## How you know you're done ##

A code will appear in the Udacity Feedback. Paste the code in to the Udacity classroom to complete the quiz!

[More on the Udacity Front-End Grading Engine](https://github.com/udacity/frontend-grading-engine)

## Current Problems with the Page ##

* The text is readable, but the images overflow the viewport.
* Page weight is massive: the images have been saved as JPEGs at low quality, but they're still too big.
* The headings, body text and images are not styled, making the post hard to read and dull to look at.

## General Advice ##

Check the page with the Chrome Dev Tools:

* Open the tools, open the Network tab, reload the page and look at the number of requests, total transfer size and time to load.
* Change to device emulation mode by clicking the phone icon in the Dev Tools (at the top left next to the magnifying glass icon). Try the various throttling options to emulate a GPRS mobile phone cell connection -- now look at the Network tab. The page takes several minutes to complete loading. (Remember that studies by Amazon, Google and others show an increased drop off in revenue with delays of less than 0.1 seconds!) Even with a good DSL connection, load time is still over 10 seconds.
* Try out emulation on different devices, portrait and landscape (click the icon next to the dimensions). What problems do you notice with each image? Which ones look worse?

Check the page from Page Speed Insights -- lots more problems!
