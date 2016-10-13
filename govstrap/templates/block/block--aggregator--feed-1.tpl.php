<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?> block-mb"<?php print $attributes; ?>>
    <?php print render($title_prefix); ?>
    <?php if ($block->subject): ?>
        <h2<?php print $title_attributes; ?>>
            <a class="rss-widget" href="http://migrationblog.immi.gov.au/feed/">
                <img class="rss-widget-icon" style="border:0" width="14" height="14"
                     src="<?php print drupal_get_path('theme', 'govstrap') ?>/img/rss.png" alt="RSS"></a>
            <a href="http://migrationblog.border.gov.au/" title="Migration Blog" class="rss-title" style="color: #000;">
                <?php print $block->subject ?>
            </a>
        </h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>

    <div class="content"<?php print $content_attributes; ?>>
        <?php print $content ?>
    </div>
</div>
