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
    global $language;


    $result = $variables['result'];
    $variables['url'] = check_url($result['link']);
    $variables['title'] = check_plain($result['title']);
    if (isset($result['language']) && $result['language'] != $language->language && $result['language'] != LANGUAGE_NONE) {
        $variables['title_attributes_array']['xml:lang'] = $result['language'];
        $variables['content_attributes_array']['xml:lang'] = $result['language'];
    }


    $info = array();
    if (!empty($result['module'])) {
        $info['module'] = check_plain($result['module']);
    }
    if (!empty($result['date'])) {
        $info['date'] = format_date($result['date'], 'short');
    }
    if (isset($result['extra']) && is_array($result['extra'])) {
        $info = array_merge($info, $result['extra']);
    }
    // Check for existence. User search does not include snippets.
    $variables['snippet'] = isset($result['snippet']) ? $result['snippet'] : '';
    // Provide separated and grouped meta information..
    $variables['info_split'] = $info;
    $variables['info'] = implode(' - ', $info);
    $variables['theme_hook_suggestions'][] = 'search_result__' . $variables['module'];
}