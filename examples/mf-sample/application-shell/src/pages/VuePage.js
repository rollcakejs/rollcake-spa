import { createElement, createPage } from "../../../../../src/index";
import CommonHeader from "../components/CommonHeader";
import VueMf from "../components/VueMf";

const VuePage = () => createPage(
    {
        onInit: function() {
            console.log('inited vue');
        },
        onUpdate: function() {
            console.log('updated vue');
        },
        onDestroy: function() {
            console.log('destroyed vue');
        },
        content: function() {
            return createElement({
                tag: 'div',
                children: [
                    CommonHeader(),
                    VueMf()
                ]
            });
        }
    }
);

export default VuePage;