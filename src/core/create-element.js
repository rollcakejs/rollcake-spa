import Element from './element';

export function createElement(config = null) {
    const { tag, attr, props, children } = config;
    return new Element(tag, attr, props, children);
}