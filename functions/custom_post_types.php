<?php
/**
 * Created by PhpStorm.
 * User: boothy
 * Date: 28/01/2018
 * Time: 16:36
 */

//function create_portfolio_post() {
    register_post_type( 'portfolio',
        array(
            'labels' => array(
                'name' => __( 'Portfolio' ),
                'singular_name' => __( 'Portfolio Item' ),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array(
                'title',
                'editor',
                'thumbnail',
                'excerpt'
            ),
            'taxonomies'   => array(
                'post_tag',
                'category',
            )
        ));
    register_taxonomy_for_object_type( 'category', 'your_post' );
    register_taxonomy_for_object_type( 'post_tag', 'your_post' );
//}

//add_action( 'init', 'create_portfolio_post' );