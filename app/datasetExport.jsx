const { client } = require("../lib/client");
const exportDataset = require("@sanity/export");

exportDataset({
  // Instance of @sanity/client configured to correct project ID and dataset
  client: client,

  // Name of dataset to export
  dataset: "myDataset",

  // Path to write tar.gz-archive file to, or `-` for stdout
  outputPath: "C:/Users/Kira/Documents/myDataset.tar.gz",

  // Whether or not to export assets. Note that this operation is currently slightly lossy;
  // metadata stored on the asset document itself (original filename, for instance) might be lost
  // Default: `true`
  assets: false,

  // Exports documents only, without downloading or rewriting asset references
  // Default: `false`
  raw: true,

  // Whether or not to export drafts
  // Default: `true`
  drafts: true,

  // Export only given document types (`_type`)
  // Optional, default: all types
  types: ["products", "shops"],

  // Run 12 concurrent asset downloads
  assetConcurrency: 12,
});
