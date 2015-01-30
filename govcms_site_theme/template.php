<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */

/**
 * @param $variables
 * Method used to remove author from search results *
 */
function govcms_site_theme_preprocess_search_result(&$variables) {
    $variables['info'] = '';
}