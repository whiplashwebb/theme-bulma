
export const bulmaConfig: any = {
    field: {
        override: true,
        rootClass: 'field',
        labelClass: 'label',
        messageClass: 'help',
        variantClass: 'is-',
        addonsClass: 'has-addons',
        groupedClass: 'is-grouped',
        groupMultilineClass: 'is-grouped-multiline',
        horizontalClass: 'is-horizontal',
        labelHorizontalClass: 'field-label',
        bodyHorizontalClass: 'field-body'
    },
    input: {
        override: true,
        rootClass: (_: string, { props, computed }: any) => {
            const classes = ['control']
            if (props.icon) classes.push('has-icons-left')
            if (computed.hasIconRight) classes.push('has-icons-right')
            return classes.join(' ').trim()
        },
        inputClass: 'input',
        roundedClass: 'is-rounded',
        variantClass: 'is-',
        sizeClass: 'is-',
        expandedClass: 'is-expanded',
        // iconLeftSpaceClass: 'has-icons has-icons-left',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'has-icons has-icons-right',
        counterClass: 'help counter'
    },
    select: {
        override: true,
        rootClass: (_: string, { props, computed }: any) => {
            const classes = ['control', 'select']
            if (props.size) classes.push(`is-${props.size}`)
            if (computed.rounded) classes.push('is-rounded')
            if (computed.statusVariant) classes.push(`is-${computed.statusVariant}`)
            if (props.multipe) classes.push('is-multiple')
            if (props.icon) classes.push('has-icons-left')
            if (props.iconRight) classes.push('has-icons-right')
            return classes.join(' ').trim()
        },
        // selectClass: '',
        // roundedClass: 'is-rounded',
        // variantClass: 'is-',
        // sizeClass: 'is-',
        expandedClass: 'is-fullwidth',
        // iconLeftSpaceClass: 'has-icons has-icons-left',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'has-icons has-icons-right',
        // arrowClass: '',
        // multipleClass: 'is-multiple',
        placeholderClass: 'is-empty'
    },
    icon: {
        override: true,
        rootClass: 'icon',
        variantClass: 'has-text-',
        sizeClass: 'is-'
    },
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    },
    radio: {
        override: true,
        rootClass: 'radio'
    },
    switch: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['switch'];
            if (props.rounded) classes.push('is-rounded')
            if (props.leftLabel) classes.push('has-left-label')
            return classes.join(' ')
        },
        // roundedClass: 'is-rounded',
        checkClass: (_: string, { props }: any) => {
            const classes = ['check'];
            if (props.variant) classes.push(`is-${props.variant}`)
            if (props.passiveVariant) classes.push(`is-${props.passiveVariant}-passive`)
            return classes.join(' ')
        },
        elementsWrapperClass: 'check-wrapper',
        labelClass: 'control-label',
        // leftLabelClass: 'has-left-label',
        sizeClass: 'is-',
        // variantClass: 'is-',
        // passiveVariantClass: (passiveVariant: string) => (`is-${passiveVariant}-passive`)
    },
    autocomplete: {
        override: true,
        rootClass: 'autocomplete control',
        menuClass: 'dropdown-menu dropdown-content',
        menuPositionClass: 'is-opened-',
        itemClass: 'dropdown-item',
        itemHoverClass: 'is-hovered',
        itemEmptyClasses: 'is-disabled',
        itemGroupTitleClass: 'has-text-weight-bold'
    },
    inputitems: {
        override: true,
        rootClass: 'taginput control',
        containerClass: 'taginput-container is-focusable',
        itemClass: 'tag',
        closeClass: 'delete is-small'
    },
    pagination: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['pagination'];
            if (props.rounded) classes.push('is-rounded')
            return classes.join(' ')
        },
        sizeClass: 'is-',
        simpleClass: 'is-simple',
        orderClass: 'is-',
        listClass: 'pagination-list',
        linkClass: 'pagination-link',
        linkCurrentClass: 'is-current',
        linkDisabledClass: 'is-disabled',
        nextBtnClass: 'pagination-next',
        prevBtnClass: 'pagination-previous',
        infoClass: 'info'
    },
    slider: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-slider'];
            if (props.variant) classes.push(`is-${props.variant}`)
            if (props.rounded) classes.push('is-rounded')
            return classes.join(' ')
        },
        disabledClass: 'is-disabled',
        // variantClass: 'is-',
        trackClass: 'b-slider-track',
        fillClass: 'b-slider-fill',
        thumbWrapperClass: (_: string, { data }: any) => {
            const classes = ['b-slider-thumb-wrapper'];
            if (data.dragging) classes.push(`is-dragging`)
            return classes.join(' ')
        },
        sizeClass: 'is-',
        thumbClass: 'b-slider-thumb',
        tickLabelClass: 'b-slider-tick-label',
        tickHiddenClass: 'is-tick-hidden',
        tickClass: 'b-slider-tick',
        // thumbRoundedClass: 'is-rounded'
        // thumbDraggingClass: 'is-dragging'
    },
    tabs: {
        override: true,
        rootClass: 'b-tabs',
        contentClass: 'tab-content',
        multilineClass: 'is-multiline',
        navTabsClass: 'tabs',
        expandedClass: 'is-fullwidth',
        verticalClass: 'is-vertical',
        positionClass: 'is-',
        navSizeClass: 'is-',
        navPositionClass: 'is-',
        transitioningClass: 'is-transitioning',
        itemClass: 'tab-item',
        itemHeaderActiveClass: () => 'is-active',
        itemHeaderDisabledClass: () => 'is-disabled'
    },
    table: {
        override: true,
        wrapperClass: 'b-table',
        tableClass: 'table',
        borderedClass: 'is-bordered',
        stripedClass: 'is-striped',
        narrowedClass: 'is-narrow',
        hoverableClass: 'is-hoverable',
        emptyClass: 'is-empty',
        detailedClass: 'detail',
        footerClass: 'table-footer',
        paginationWrapperClass: '',
        scrollableClass: 'is-scrollable',

    },
    tooltip: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-tooltip'];
            if (props.variant) classes.push(`is-${props.variant}`);
            if (props.position) classes.push(`is-${props.position}`)
            return classes.join(' ')
        },
        contentClass: 'tooltip-content',
        triggerClass: 'tooltip-trigger',
        alwaysClass: 'is-always',
        multilineClass: 'is-multiline',
        variantClass: 'is-',
        orderClass: 'is-'
    },
    steps: {
        override: true,
        rootClass: (_: string, { props }: any) => {
            const classes = ['b-steps'];
            if (props.variant) classes.push(`is-${props.variant}`);
            if (props.disables) classes.push('is-disabled')
            return classes.join(' ')
        },
        stepsClass: (_: string, { props }: any) => {
            const classes = ['steps'];
            if (props.animated) classes.push('is-animated')
            if (props.rounded) classes.push('is-rounded')
            if (props.labelPosition === 'left') classes.push('has-label-left')
            if (props.labelPosition === 'right') classes.push('has-label-right')
            return classes.join(' ')
        },
        itemClass: 'step-link',
        itemHeaderClass: 'step-item',
        itemHeaderActiveClass: 'is-active',
        itemHeaderPreviousClass: 'is-previous',
        stepLinkClass: 'step-link',
        stepLinkLabelClass: 'step-title',
        stepLinkClickableClass: 'is-clickable',
        // stepLinkLabelPositionClass: 'is-',
        stepMarkerClass: 'step-marker',
        stepContentClass: 'step-content',
        verticalClass: 'is-vertical',
        stepContentTransitioningClass: 'is-transitioning',
        sizeClass: 'is-',
        variantClass: 'is-'
    },
    button: {
        override: true,
        rootClass: 'button',
        variantClass: 'is-',
        roundedClass: 'is-rounded',
        outlinedClass: () => 'is-outlined',
        invertedClass: () => 'is-inverted'
    },
}