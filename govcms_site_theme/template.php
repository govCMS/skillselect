<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */

/**
 * Override video filter display to rewrite url to https
 */
function govcms_site_theme_video_filter_flash($variables) {
  $output = '';

  $video = $variables['video'];
  $params = isset($variables['params']) ? $variables['params'] : array();

  // Rewrite the url to be SSL to eliminate the mixed content warnings
  $video['source'] = preg_replace("/http/", "https", $video['source']);

  // Create classes
  $classes = array(
      'video-filter',
      'video-' . $video['codec']['codec_name'],  // Adds codec name
  );

  // Adds alignment
  if (isset($video['align'])) {
    $classes[] = 'video-' . $video['align'];
  }

  // First match is the URL, we don't want that as a class.
  unset($video['codec']['matches'][0]);
  foreach ($video['codec']['matches'] AS $match) {
    $classes[] = 'vf-' . strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $match));
  }

  $output .= '<object class="' . implode(' ', $classes) . '" type="application/x-shockwave-flash" ';

  $output .= 'width="' . $video['width'] . '" height="' . $video['height'] . '" data="' . $video['source'] . '">' . "\n";

  $defaults = array(
      'movie' => $video['source'],
      'wmode' => 'transparent',
      'allowFullScreen' => 'true',
  );

  $params = array_merge($defaults, (is_array($params) && count($params)) ? $params : array());

  foreach ($params as $name => $value) {
    $output .= '  <param name="' . $name . '" value="' . $value . '" />' . "\n";
  }

  $output .= '</object>' . "\n";

  return $output;
}