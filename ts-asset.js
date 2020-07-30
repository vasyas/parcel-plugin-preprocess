const TypeScriptAsset = require("parcel-bundler/src/assets/TypeScriptAsset")
const pp = require('preprocess');

class PreprocessTsAsset extends TypeScriptAsset {
  async pretransform() {
    this.contents = pp.preprocess(this.contents);
    return await super.pretransform()
  }
}

module.exports = PreprocessTsAsset