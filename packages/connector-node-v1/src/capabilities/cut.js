import icons from '../icons-svg';
import getMess from '../translations';
import clipboard from "../clipboard";

const label = 'cut';

const handler = (selectedResource, actions) => {
  const {
    navigateToDir,
    getResource,
  } = actions;
  clipboard.setClipboard(selectedResource);
  clipboard.setTrigger(label);
  const resource = getResource();
  navigateToDir(resource.id, null, false);
}

export default (apiOptions, actions) => {
  const localeLabel = getMess(apiOptions.locale, label);
  const { getResource, getSelectedResources } = actions;
  return {
    id: label,
    icon: { svg: icons.cut },
    label: localeLabel,
    shouldBeAvailable: (apiOptions) => {
      const resource = getResource();
      if (!resource || !resource.capabilities) {
        return false
      }
      return resource.capabilities.canAddChildren
    },
    // availableInContexts: ['row', 'toolbar'],
    availableInContexts: ['row'],
    handler: () => handler(getSelectedResources(), actions)
  };
}
