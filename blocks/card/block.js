var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    Editable = wp.blocks.Editable;

registerBlockType( 'jb/card', { //Block namespace
    title: 'Card', //name in editor

    icon: 'universal-access-alt', //icon in editor

    category: 'layout', //category in editor

    attributes: { //atts are the editable content
        title: { //name
            type: 'array', //array is text
            source: 'children', //children segestins basic dom
            selector: 'h1' //tag
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'p'
        },
        image: {
            type: 'string',
            source: 'attribute',
            selector: 'div',
            attribute: 'style'
        }
    },

    edit: function( props ) {
        var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
        var focus = props.focus;
        var onSelectImage = ( media ) => {
            props.setAttributes( {
                image: media.url
            } );
        };

        return (
            el( 'div', { className: props.className },
                el( Editable ,
                    {
                        placeholder: 'title',
                        tagName: 'h1',
                        value: props.attributes.title,
                        onChange: function( value ) {
                            props.setAttributes( { title: value } );
                        },
                        focus: focusedEditable === 'title' ? focus : null,
                        onFocus: function( focus ) {
                            props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
                        },
                        className: 'title'
                    },
                    props.attributes.title
                ),
                el( Editable,
                    {
                        placeholder: 'content',
                        tagName: 'p',
                        value: props.attributes.content,
                        onChange: function( value ) {
                            props.setAttributes( { content: value } );
                        },
                        onFocus: function( focus ) {
                            props.setFocus( _.extend( {}, focus, { editable: 'content' } ) );
                        },
                        className: 'content'
                    }
                ),
                el( Editable, {
                        buttonProps: {
                            className: props.attributes.image
                                ? 'image-button'
                                : 'components-button button button-large',
                        },
                        tagName: 'div',
                        onSelect: onSelectImage,
                        type: 'image',
                        value: props.attributes.image,
                    }
                )
            )
        );
    },

    save: function( props ) {
        return el( 'section', { className: props.className },
            el( 'div', { className: 'container' },
                el( 'h1', {}, props.attributes.title),
                el( 'p', {}, props.attributes.content )
            )
        );
    }
} );