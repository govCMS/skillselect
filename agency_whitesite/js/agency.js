/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

var sort_by = function(field, reverse, primer){

    var key = primer ?
        function(x) {return primer(x[field])} :
        function(x) {return x[field]};

    reverse = [-1, 1][+!!reverse];

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

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
        var highest = counts[0];
        var lowest = counts[0];
        for (var key in counts) {
            if(counts[key] > highest) {
                highest = counts[key];
            }
            if(counts[key] < lowest) {
                lowest = counts[key];
            }
        }

        console.log(highest);
        console.log(lowest);

        $('div.row-of-tags').each(function() {
            var occurance = $('span',this).attr('class');
            var number = occurance.replace('count-', '');
            counts[number];
            var style = "font-size:1em;"
            if(number == highest) {
                style='font-size: 2em;';
            } else if(number == lowest) {
                style='font-size: .8em;';
            } else {
                style='font-size: 1em;';
            }

            $('span',this).attr('style', style);
        });
    });
})(jQuery);
