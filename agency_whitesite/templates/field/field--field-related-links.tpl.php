<?php
/**
 * @file
 * Overridden template implementation to display the value of a field.
 */
?>
<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <h2>Pauls Change</h2>
  <?php if (!$label_hidden): ?>
    <div class="field-label" <?php print $title_attributes; ?>><?php print $label ?></div>
  <?php endif; ?>
  <ul class="field-items">
    <?php foreach ($items as $delta => $item): ?>
	  <li class="field-item"><?php print $item_attributes[$delta]; ?><?php print render($item); ?></li>
    <?php endforeach; ?>
    </ul>
</div>
