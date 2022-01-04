'use strict';

const fs = require('fs-extra');
const path = require('path');

const {
  id2path,
} = require('./lib');

module.exports = ({ config, req, res }) => {
  const fsRoot = config.fsRoot;
  req.body.resources.forEach(el => {
    const elPath = path.join(fsRoot, id2path(el.id))
    const toPath = path.join(fsRoot, id2path(req.body.toResource.id), el.name);
    fs.copyFile(elPath, toPath, err => {
      if (err) {
        throw err;
      }
    })
  })
  res.json({ok: 'ok'})
};
