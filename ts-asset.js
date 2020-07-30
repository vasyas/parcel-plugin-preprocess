const TypeScriptAsset = require("parcel/src/assets/TypeScriptAsset")
const pp = require('preprocess');

class PreprocessTsAsset extends TypeScriptAsset {
  async pretransform() {
    this.contents = pp.preprocess(this.contents, process.env, {type: "js"});
    return await super.pretransform()
  }
}

module.exports = PreprocessTsAsset