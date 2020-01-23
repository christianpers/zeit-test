module.exports.description = 'Create content model for ImageSlot'

module.exports.up = (migration) => {
  const imageSlot = migration.createContentType('imageSlot')
    .name('ImageSlot')
    .displayField('imageText')
    .description('')

  imageSlot.createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')

  imageSlot.createField('fullbleed')
    .name('Fullbleed')
    .type('Boolean')

  imageSlot.createField('imageText')
    .name('ImageText')
    .type('Text')

  imageSlot.changeEditorInterface('image', 'assetLinkEditor')
  imageSlot.changeEditorInterface('fullbleed', 'boolean')
  imageSlot.changeEditorInterface('imageText', 'multipleLine')
}

module.exports.down = migration => migration.deleteContentType('imageSlot')
