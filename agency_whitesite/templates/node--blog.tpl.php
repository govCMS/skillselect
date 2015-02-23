<?php if ($display_submitted): ?>
  <p class="submitted">
    <?php $user = user_load($node->uid); ?>
            <?php $username=$user->name; ?>
    <?php print t("Written"); ?>
    <?php print $username ?>
    <time pubdate datetime="<?php print $submitted_pubdate; ?>">
    <?php $date = date("d.n.Y", $node->created); ?>
    <?php print "<br>".$date; ?>
    </time>
  </p>
<?php endif;
