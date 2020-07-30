const JSAsset = require("parcel-bundler/src/assets/JSAsset")
const pp = require('preprocess');

class PreprocessJSAsset extends JSAsset {
  async pretransform() {
    this.contents = pp.preprocess(this.contents);
    return await super.pretransform()
  }
}

module.exports = PreprocessJSAsset