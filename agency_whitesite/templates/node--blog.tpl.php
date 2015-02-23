<?php if ($display_submitted): ?>
  <p class="submitted">
    Posted on
    <time pubdate datetime="<?php print $submitted_pubdate; ?>">
      <?php $date = date("d.n.Y", $node->created); ?>
      <?php print "<br>".$date; ?>
    </time>
    by
    <?php //print theme('username', $node); ?>
  </p>
<?php endif; ?>
