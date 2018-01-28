var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    Editable = wp.blocks.Editable;

registerBlockType( 'jb/card', { //Block namespace
    title: 'Card', //name in editor

    icon: 'universal-access-alt', //icon in editor

    category: 'layout', //category in editor

    attributes: { //atts are the editable content
        title: { //name
            source: 'children',
            selector: 'h1'
        },
        content: {
            source: 'children',
            selector: 'p'
        }
    },

    edit: function( props ) {
        var content = props.attributes.content,
            title = props.attributes.title,
            focus = props.focus;

        function onChangeContent( newContent ) {
            props.setAttributes( { content: newContent } );
        }

        function onChangeTitle( newTitle ) {
            props.setAttributes( { title: newTitle } );
        }

        return [
            el(
                Editable,
                {
                    key: 'editable',
                    tagName: 'h1',
                    className: props.className,
                    onChange: onChangeTitle,
                    value: title,
                    focus: focus,
                    onFocus: props.setFocus
                }
            ),
            el(
                Editable,
                {
                    key: 'editable',
                    tagName: 'p',
                    className: props.className,
                    onChange: onChangeContent,
                    value: content,
                    focus: focus,
                    onFocus: props.setFocus
                }
            )
        ];
    },
    save: function( props ) {
        var content = props.attributes.content,
            title = props.attributes.title;

        return el( 'div',
            {
                className: props.className
            },
            el( 'h1',
                {},
                title
            ),
            el( 'p',
                {},
                content
            )
        );
    }
} );