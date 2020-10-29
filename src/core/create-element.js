import Element from './element';

export function createElement(config = {}) {
    const { tag, attr, props, children } = config;
    return new Element(tag, attr, props, children);
}