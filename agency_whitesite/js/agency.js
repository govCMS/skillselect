/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

  }
};


})(jQuery, Drupal, this, this.document);


(function ($) {
    $(document).ready(function () {
        var numberArray = [];
        $('div.row-of-tags').each(function() {
            var occurance = $('span',this).attr('class');
            var number = occurance.replace('count-', '');
            numberArray.push(number);
        });
        console.log(numberArray);
        var counts = {};
        for(var i = 0; i< numberArray.length; i++) {
            var num = numberArray[i];
            counts[num] = counts[num] ? counts[num]+1 : 1;
        }
        console.log(counts);
        var highest = Math.max.apply(Math, counts);
        var lowest = Math.min.apply(Math, counts);
        console.log(highest);
        console.log(lowest);

        $('div.row-of-tags').each(function() {
            var occurance = $('span',this).attr('class');
            var number = occurance.replace('count-', '');
            counts[number];
            $('span',this).attr('style', 'font-size: 2em;');
        });
    });
})(jQuery);
