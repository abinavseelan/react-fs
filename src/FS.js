function resolveCompositeElement(el) {
    if (typeof el.type === 'function') {
        return resolveCompositeElement(el.type(el.props));
    }
    return el;
}

module.exports = {
    render: (node, root) => {
        node = resolveCompositeElement(node);
        console.log(node.type, node.props.name, node.props.children);
    },
    createFSElement: (element, props, ...children) => {
        return {
            type: element,
            props: Object.assign({}, props, {
                children,
            }),
        }
    }
}