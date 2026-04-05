
module.exports = {
  multipass: true,
  plugins: [
    'removeMetadata',
    'removeComments',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergePaths',
    'removeEmptyContainers',
    'collapseGroups',
    'convertShapeToPath',
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 2
      }
    }
  ]
}