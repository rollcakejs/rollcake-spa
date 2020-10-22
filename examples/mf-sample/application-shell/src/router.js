import { RollCakeRouter, NAVIGATION_MODE } from "../../../../src/index";
import IndexPage from "./pages/IndexPage";
import ReactPage from "./pages/ReactPage";
import VuePage from "./pages/VuePage";

const routes = [
    {
        path: '/',
        item: IndexPage
    },
    {
        path: '/react',
        item: ReactPage
    },
    {
        path: '/vue',
        item: VuePage
    }
];

export default new RollCakeRouter({
    routes: routes,
    mode: NAVIGATION_MODE.HISTORY
});