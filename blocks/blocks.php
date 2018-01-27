<?php
/**
 * Created by PhpStorm.
 * User: boothy
 * Date: 26/01/2018
 * Time: 22:33
 */


function jb_blocks() {
    wp_register_script('jb-card', get_template_directory_uri() . '/blocks/card/block.js', array( 'wp-blocks', 'wp-element' ));
    wp_register_style('jb-card-editor',get_template_directory_uri() . '/blocks/card/editor.css', array( 'wp-edit-blocks' ));

    register_block_type(
        'jb/ftblog', array(
            'editor_script' => 'jb-card',
            'editor_style'  => 'jb-card-editor'
        )
    );
}
add_action( 'init', 'jb_blocks' );