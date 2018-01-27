<?php
/**
 * Created by PhpStorm.
 * User: boothy
 * Date: 26/01/2018
 * Time: 22:33
 */


function jb_ftblog() {
    wp_register_script('jb-ftblog', get_template_directory_uri() . '/blocks/ftblog/block.js', array( 'wp-blocks', 'wp-element' ));

    register_block_type( 'jb/ftblog', array('editor_script' => 'jb-ftblog',) );
}
add_action( 'init', 'jb_ftblog' );