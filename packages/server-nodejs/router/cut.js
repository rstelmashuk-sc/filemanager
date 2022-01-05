'use strict';

const fs = require('fs-extra');
const path = require('path');

const {
  id2path,
} = require('./lib');

module.exports = ({ config, req, res }) => {
  const fsRoot = config.fsRoot;
  req.body.resources.forEach(el => {
    const resourcePath = path.join(fsRoot, id2path(el.id))
    const parentPath = path.join(fsRoot, id2path(req.body.toResource.id));
    let basename = el.name;
    const { name, ext } = path.parse(el.name);
    fs.readdir(parentPath).
      then(basenames => {
        if (basenames.includes(basename)) {
          let suffix = 1;

          do {
            basename = `${name} (${suffix++})${ext}`;
          } while (basenames.includes(basename));
        }
      }).
      then(() => {
        fs.moveSync(resourcePath, path.join(parentPath, basename));
        res.status(200).send('Cut completed')
      })
  })
};
