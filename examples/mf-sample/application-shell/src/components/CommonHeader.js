import { CONTEXT_ATTRIBUTE } from "../../../../../src/index";
import { createElement, PUBLIC_BUS_PUBLISH_EVENT_TYPE, WINDOW_VARIABLE,  } from "../../../../../src/index";

const CommonHeader = () => createElement({
    tag: 'div',
    children: [
        createElement({
            tag: 'button',
            attr: {
                style: {
                    'margin-right': '10px' 
                }
            },
            props: {
                textContent: 'Home',
                eventListener: 'click',
                eventHandler: () => {
                    window[WINDOW_VARIABLE.BROKER][CONTEXT_ATTRIBUTE.BUS].publish(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, '/');
                }
            }
        }),
        createElement({
            tag: 'button',
            attr: {
                style: {
                    'margin-right': '10px' 
                }
            },
            props: {
                textContent: 'React',
                eventListener: 'click',
                eventHandler: () => {
                    window[WINDOW_VARIABLE.BROKER][CONTEXT_ATTRIBUTE.BUS].publish(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, '/react');
                }
            }
        }),
        createElement({
            tag: 'button',
            props: {
                textContent: 'Vue',
                eventListener: 'click',
                eventHandler: () => {
                    window[WINDOW_VARIABLE.BROKER][CONTEXT_ATTRIBUTE.BUS].publish(PUBLIC_BUS_PUBLISH_EVENT_TYPE.NAVIGATE_TO, '/vue');
                }
            }
        }),
    ]
});

export default CommonHeader;