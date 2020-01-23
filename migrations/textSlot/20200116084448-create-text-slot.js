module.exports.description = 'Create content model for TextSlot'

module.exports.up = (migration) => {
  const textSlot = migration.createContentType('textSlot')
    .name('TextSlot')
    .displayField('text')
    .description('')

  textSlot.createField('text')
    .name('Text')
    .type('Text')
    .required(true)

  textSlot.changeEditorInterface('text', 'multipleLine')
}

module.exports.down = migration => migration.deleteContentType('textSlot')
