module.exports.description = 'Create content model for Header'

module.exports.up = (migration) => {
  const header = migration.createContentType('header')
    .name('Header')
    .displayField(null)
    .description('Page header')

  header.createField('links')
    .name('Links')
    .type('Array')
    .items({ type: 'Link', validations: [{ linkContentType: ['pageLink'] }], linkType: 'Entry' })

  header.changeEditorInterface('links', 'entryLinksEditor', { bulkEditing: false })
}

module.exports.down = migration => migration.deleteContentType('header')
