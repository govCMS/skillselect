/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

function CalculateWeights(arrValues, weightsCount) {
    var arrWeights = [];
    var minValue = 999999;
    var maxValue = -1;
    for (var i = 0; i < arrValues.length; i++) {
        var curValue = arrValues[i];
        if (curValue < minValue)
            minValue = curValue;
        if (curValue > maxValue)
            maxValue = curValue;
    }

    var diff = weightsCount / (maxValue - minValue);
    for (var i = 0; i < arrValues.length; i++) {
        var curValue = arrValues[i];
        if (curValue == minValue)
            arrWeights.push(1);
        else if (curValue == maxValue)
            arrWeights.push(weightsCount);
        else
            arrWeights.push(parseInt(curValue * diff, 10) + 1);
    }

    return arrWeights;
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
        var exists = false;
        var count = 0;
        $('div.row-of-tags').each(function () {
            var occurance = $('span', this).attr('class');
            var number = occurance.replace('count-', '');
            numberArray.push(number);
            count++;
        });
        if(count > 0) {
            console.log(numberArray);
            var tags = CalculateWeights(numberArray, count);
            console.log(tags);
/*
            $('div.row-of-tags').each(function () {
                var number = $('span', this).attr('class').replace('count-', '');
                var occurances = counts[number];
                var style = 30;
                if (number == highest) {
                    style = 130;
                } else if (number == lowest) {
                    style = 0;
                } else {
                    var diff = occurances / (highest - lowest);
                    console.log("Difference: " + diff);
                    console.log("Number: " + number);



                    var fontSize = parseInt(number * diff, 10) + 1;
                    console.log("Font Size: " + fontSize);

                    style = fontSize;
                }

                $('span', this).attr('style', 'font-size:' + (style+70) + '%;');
            });*/
        }
    });
})(jQuery);
