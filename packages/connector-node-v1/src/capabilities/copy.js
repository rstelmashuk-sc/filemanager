import icons from '../icons-svg';
import getMess from '../translations';
import clipboard from "../clipboard";

const label = 'copy';

const handler = (resource) => {
  clipboard.setClipboard(resource)
}

export default (apiOptions, actions) => {
  const localeLabel = getMess(apiOptions.locale, label);
  const { getResource, getSelectedResources } = actions;
  return {
    id: label,
    icon: { svg: icons.copy },
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
    handler: () => handler(getSelectedResources())
  };
}
