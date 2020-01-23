module.exports.description = 'Create content model for Hero'

module.exports.up = (migration) => {
  const imageSlot = migration.createContentType('hero')
    .name('Hero')
    .displayField('heroText')
    .description('')

  imageSlot.createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')

  imageSlot.createField('heroText')
    .name('HeroText')
    .type('Text')

  imageSlot.changeEditorInterface('image', 'assetLinkEditor')
  imageSlot.changeEditorInterface('heroText', 'multipleLine')
}

module.exports.down = migration => migration.deleteContentType('hero')

