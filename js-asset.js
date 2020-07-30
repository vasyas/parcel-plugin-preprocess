const JSAsset = require("parcel/src/assets/JSAsset")
const pp = require('preprocess');

class PreprocessJSAsset extends JSAsset {
  async pretransform() {
      this.contents = pp.preprocess(this.contents, process.env, {type: "js"});
      return await super.pretransform()
  }
}

module.exports = PreprocessJSAsset