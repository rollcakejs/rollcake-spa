class Element {
    constructor(
        tag = null,
        attr = null,
        props = null,
        children = null
    ) {
        this.tag = tag;
        this.attr = attr;
        this.props = props;
        this.children = children;

            // strictly internal
        this._VPage = null;
        this._DOMNode = null;
        this._childrenDOMNode = null;
    }

    render(parentDOMNode, VPage) {
        this._VPage = VPage;

        this._DOMNode = document.createElement(this.tag);

        if (this.attr !== null) {
            Object.keys(this.attr).forEach((key) => {
                switch(key) {
                    case 'style':
                        Object.keys(this.attr[key]).forEach((innerKey) => { this._DOMNode[key][innerKey] = this.attr[key][innerKey] });
                        break;
                    default:
                        this._DOMNode.setAttribute(key, this.attr[key]);
                        break;
                }
            })
        }

        if (this.props !== null) {
            if (this.props.innerHTML !== undefined) {
                this._DOMNode.innerHTML = this.props.innerHTML;
            }
    
            if (this.props.innerText !== undefined) {
                this._DOMNode.innerText = this.props.innerText;
            }
    
            if (this.props.textContent !== undefined) {
                this._DOMNode.textContent = this.props.textContent;
            }

            if (this.props.eventListener !== undefined && this.props.eventHandler !== undefined) {
                this._DOMNode.addEventListener(this.props.eventListener, this.props.eventHandler);
            }
        }

        if (this.children !== null) {
            this.children.forEach(child => {
                child.render(this._DOMNode, this._VPage);
            });
        }

        parentDOMNode.appendChild(this._DOMNode);

        return this._DOMNode;
    }
}

export default Element;