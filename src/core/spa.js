import { PUBLIC_BUS_PUBLISH_EVENT_TYPE } from "../shared/constants";

class RollCakeSpa {
    constructor(broker, router, entryDOMNode, loadingContent) {
        // strictly internal
        this._VPage = null;

        broker.init();

        router.init((response) => {
            if (this._VPage !== null)
            {
                this._VPage.destroy();
            }
            if (response && response.item) {
                this._VPage = response.item();
                this._VPage.render(entryDOMNode, loadingContent);
            }
            else {
                this._VPage = null;
            }
        });

        broker.getBus().subscribe(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, (path) => {
            router.navigateTo(path);
        });
    }
}

export default RollCakeSpa;