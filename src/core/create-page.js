import  Page from './page';

export function createPage(config = null) {
    const { state, onInit, onUpdate, onDestroy, content, loadingContent } = config;
    return new Page(state, onInit, onUpdate, onDestroy, content, loadingContent);
}