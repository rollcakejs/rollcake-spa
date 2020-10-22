import { RollCakeRouter } from "../../../src/index";
import IndexPage from "./pages/IndexPage";

const routes = [
    {
        path: '/',
        item: IndexPage
    },
];

export default new RollCakeRouter({
    routes: routes
});