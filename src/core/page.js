import { WINDOW_VARIABLE, CONTEXT_ATTRIBUTE, INTERNAL_BUS_PUBLISH_EVENT_TYPE } from "@rollcakejs/rollcake-mf-broker"; 

class Page {
    constructor(
        onInit = () => {},
        onUpdate = () => {},
        onDestroy = () => {},
        content = null
    ) {
        this.onInit = onInit;
        this.onUpdate = onUpdate;
        this.onDestroy = onDestroy;
        this.content = content;

        this.onBeforeInit = () => {};
        this.onBeforeDestroy = () => {};
        
        // strictly internal
        this._rollCakeMFBroker = window[WINDOW_VARIABLE.ROLLCAKE];
        this._entryDOMNode = null;
        this._childDOMNode = null;
        this._loadingContentDOMNode = null;
        this._prevStateValue = null;

        this._watchIsStoreUpdatedEvent();
        this._watchIsMicrofrontendFetchingEvent();
    }

    _watchIsStoreUpdatedEvent() {
        const bus = this._rollCakeMFBroker[CONTEXT_ATTRIBUTE.BUS];

        bus.subscribe(INTERNAL_BUS_PUBLISH_EVENT_TYPE.IS_STORE_UPDATED, () => {
            this._destroyContent();
            this.onUpdate();
            this._renderContent();
        });
    }

    _watchIsMicrofrontendFetchingEvent() {
        const bus = this._rollCakeMFBroker[CONTEXT_ATTRIBUTE.BUS];

        bus.subscribe(INTERNAL_BUS_PUBLISH_EVENT_TYPE.IS_FETCHING_MICROFRONTEND, (isFetching) => {
            if (isFetching && this.loadingContent && !this._loadingContentDOMNode) {
                this._hideContent();
                this._renderLoadingContent();
            }
            else {
                this._destroyLoadingContent();
                this._displayContent();
            }
        });
    }

    render(entryDOMNode, loadingContent = null) {
        this.onBeforeInit();
        this._entryDOMNode = entryDOMNode;
        this.loadingContent = loadingContent;
        this._renderContent();
        this.onInit();
    }

    _renderContent() {
        if (this._entryDOMNode !== null && this.content) {
            const vDOMContent = this.content();
            this._childDOMNode = vDOMContent.render(this._entryDOMNode, this);
        }
    }

    _renderLoadingContent() {
        if (this._entryDOMNode !== null && this.loadingContent) {
            const vDOMContent = this.loadingContent();
            this._loadingContentDOMNode = vDOMContent.render(this._entryDOMNode, this);
        }
    }

    destroy() {
        this.onBeforeDestroy();
        this._destroyContent();
        this._entryDOMNode = null;
        // Clear any openned javascript intervals
        for (var i = setTimeout(function() {}, 0); i > 0; i--) {
            window.clearInterval(i);
            window.clearTimeout(i);
            if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
        }
        this.onDestroy();
    }

    _destroyContent() {
        if (this._entryDOMNode !== null && this._childDOMNode !== null) {
            this._entryDOMNode.removeChild(this._childDOMNode);
            this._childDOMNode = null;
        }
    }

    _hideContent() {
        if (this._childDOMNode !== null) {
            this._childDOMNode.setAttribute("hidden", "");
        }
    }

    _displayContent() {
        if (this._childDOMNode !== null) {
            this._childDOMNode.removeAttribute("hidden");
        }
    }

    _destroyLoadingContent() {
        if (this._entryDOMNode !== null && this._loadingContentDOMNode !== null) {
            this._entryDOMNode.removeChild(this._loadingContentDOMNode);
            this._loadingContentDOMNode = null;
        }
    }
}

export default Page;