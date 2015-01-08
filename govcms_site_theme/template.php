<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */

/**
 * Override template_search_preprocess_search_result() to not show username.
 */
function govcms_site_theme_preprocess_search_result(&$variables) {
    $variables['info'] = '';
}