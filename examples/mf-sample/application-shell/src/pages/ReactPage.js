import { createElement, createPage } from "../../../../../src/index";
import CommonHeader from "../components/CommonHeader";
import ReactMf from "../components/ReactMf";

const ReactPage = () => createPage(
    {
        onInit: function() {
            console.log('inited react');
        },
        onUpdate: function() {
            console.log('updated react');
        },
        onDestroy: function() {
            console.log('destroyed react');
        },
        content: function() {
            return createElement({
                tag: 'div',
                children: [
                    CommonHeader(),
                    ReactMf()
                ]
            })
        }
    }
);

export default ReactPage;