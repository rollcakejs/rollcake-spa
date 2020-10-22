import { createPage } from "../../../../../src/index";
import CommonHeader from "../components/CommonHeader";

const IndexPage = () => createPage(
    {
        onInit: function() {
            console.log('inited index');
        },
        onUpdate: function() {
            console.log('updated index');
        },
        onDestroy: function() {
            console.log('destroyed index');
        },
        content: function() {
            return CommonHeader();
        }
    }
);

export default IndexPage;