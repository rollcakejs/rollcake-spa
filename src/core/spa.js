import { PUBLIC_BUS_PUBLISH_EVENT_TYPE } from "../shared/constants";

class RollCakeSpa {
    constructor(MFBroker, router, entryDOMNode, loadingContent) {
        if (!MFBroker || !router || !entryDOMNode)
            throw new Error();

        // strictly internal
        this._VPage = null;
        
        MFBroker.init();

        if (MFBroker.getBus() !== undefined && MFBroker.getBus() !== null) {
            MFBroker.getBus().subscribe(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, (path) => {
                router.navigateTo(path);
            });
        }

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
    }
}

export default RollCakeSpa;