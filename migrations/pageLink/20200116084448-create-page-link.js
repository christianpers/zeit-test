module.exports.description = 'Create content model for Page link'

module.exports.up = (migration) => {
  const pageLink = migration.createContentType('pageLink')
    .name('Page link')
    .displayField('title')
    .description('')

  pageLink.createField('title')
    .name('Title')
    .type('Symbol')

  pageLink.createField('url')
    .name('Url')
    .type('Symbol')

  pageLink.changeEditorInterface('title', 'singleLine')
  pageLink.changeEditorInterface('url', 'singleLine')
}

module.exports.down = migration => migration.deleteContentType('pageLink')
