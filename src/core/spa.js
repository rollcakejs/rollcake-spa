import { PUBLIC_BUS_PUBLISH_EVENT_TYPE } from "../shared/constants";

class RollCakeSpa {
    constructor(broker, router, entryDOMNode, loadingContent = null) {
        this.broker = broker;
        this.router = router;
        this.entryDOMNode = entryDOMNode;

        // strictly internal
        this._VPage = null;

        this.broker.init();

        this.router.init((props) => {
            if (this._VPage !== null)
            {
                this._VPage.destroy();
            }
            if (props) {
                this._VPage = props.item();
                this._VPage.render(this.entryDOMNode, loadingContent);
            }
            else {
                this._VPage = null;
            }
        });

        this.broker.bus().subscribe(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, (path) => {
            this.router.navigateTo(path);
        });
    }
}

export default RollCakeSpa;