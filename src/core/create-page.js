import  Page from './page';

export function createPage(config = {}) {
    const { onInit, onUpdate, onDestroy, content, loadingContent } = config;
    return new Page(onInit, onUpdate, onDestroy, content, loadingContent);
}