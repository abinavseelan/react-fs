const { resolve } = require('path');
const fs = require('fs');

function resolveCompositeElement(el) {
    function isClass(func) {
        return typeof func === 'function'
            && /^class\s/.test(Function.prototype.toString.call(func));
    }

    if (typeof el.type === 'function') {
        if (isClass(el.type)) {
            return resolveCompositeElement((new el.type(el.props).render()));
        } else {
            return resolveCompositeElement(el.type(el.props));
        }
    }
    return el;
}

module.exports = {
    render: (node, root) => {
        node = resolveCompositeElement(node);
        const { props, type } = node;
        const { name } = props;

        if (type === 'folder') {
            const childRoot = resolve(root, name);
            console.log(childRoot);
            fs.mkdirSync(childRoot);

            if (Array.isArray(props.children)) {
                props.children.forEach((child) => {
                    module.exports.render(child, childRoot);
                })
            } else if (props.children) {
                module.exports.render(props.children, childRoot);
            }
        } else if (type === 'file') {
            const filename = resolve(root, name);
            const { extension, children: contents } = props;

            console.log(filename);
            fs.writeFileSync(`./${root}/${filename}${extension}`, contents);
        }
    },
    createFSElement: function (element, props, children) {
        const childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            const childArray = Array(childrenLength);
            for (let i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
        }

        return {
            type: element,
            props,
        }
    }
}