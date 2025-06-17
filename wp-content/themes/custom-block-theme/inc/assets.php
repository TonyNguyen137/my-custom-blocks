<?php
add_action( 'enqueue_block_assets', function() {
    $css_version_number = filemtime(get_stylesheet_directory() . '/public/style.min.css');

    wp_enqueue_style('custom-css', get_stylesheet_directory_uri() . '/public/style.min.css', null, $css_version_number);
});

