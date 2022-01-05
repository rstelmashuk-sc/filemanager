import icons from '../icons-svg';
import getMess from '../translations';
import clipboard from '../clipboard';
import api from '../api'

const label = 'paste';

const handler = (options, toResource, actions) => {
  const {
    navigateToDir,
    getResource,
  } = actions;

  if (clipboard.getTrigger() === 'copy') {
    api.copyResources(options, clipboard.getClipboard(), toResource).
      then((res) => {
        const resource = getResource();
        navigateToDir(resource.id, null, false);
      });
  }

  if (clipboard.getTrigger() === 'cut') {
    api.cutResources(options, clipboard.getClipboard(), toResource).
      then((res) => {
        const resource = getResource();
        clipboard.clearClipboard();
        clipboard.clearTrigger();
        navigateToDir(resource.id, null, false);
      });
  }
}

export default (apiOptions, actions) => {
  const localeLabel = getMess(apiOptions.locale, label);
  const { getResource } = actions;
  return {
    id: label,
    icon: { svg: icons.paste },
    label: localeLabel,
    shouldBeAvailable: (apiOptions) => {
      const resource = getResource();
      if (!resource || !resource.capabilities || !clipboard.getClipboard()) {
        return false
      }
      return resource.capabilities.canAddChildren
    },
    // availableInContexts: ['row', 'toolbar'],
    availableInContexts: ['files-view'],
    handler: () => handler(apiOptions, getResource(), actions),
  };
}
