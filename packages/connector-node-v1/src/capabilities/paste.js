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
  api.copyResources(options, clipboard.getClipboard(), toResource).
    then(() => {
      const resource = getResource();
      navigateToDir(resource.id, null, false);
    })
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
      if (!resource || !resource.capabilities) {
        return false
      }
      return resource.capabilities.canAddChildren
    },
    // availableInContexts: ['row', 'toolbar'],
    availableInContexts: ['files-view'],
    handler: () => handler(apiOptions, getResource(), actions),
  };
}
