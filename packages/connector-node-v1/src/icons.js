import icons from './icons-svg';

const dirIcon = icons.folder;
const unknownFileIcon = icons.insertDriveFile;

const defaultFillColor = '#424242';

async function getFileIcon(name) {
  try {
    const icon = await import(`./icons/${name}.png`);
    return icon;
  } catch (err) {
    return null;
  }
}

export async function getIcon(resource) {
  if (Object.keys(resource).length === 0) {
    return null;
  }
  if (resource.type === 'dir') {
    return { svg: dirIcon, fill: defaultFillColor };
  }
  const splitName = resource.name.split('.');
  const typeFile = splitName[splitName.length - 1];
  const icon = await getFileIcon(typeFile);
  if (splitName.length === 1 || !icon) {
    return { svg: unknownFileIcon, fill: `#616161` };
  }

  return { svg: `<img src=${icon} alt="icon"/>`, fill: `#616161` };
}
