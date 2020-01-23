module.exports.description = 'Create content model for Page Body'

module.exports.up = (migration) => {
  const pageBody = migration.createContentType('pageBody')
    .name('Page Body')
    .displayField('title')
    .description('The body of the page')

  pageBody.createField('title')
    .name('Title')
    .type('Symbol')

  pageBody.createField('content')
    .name('Content')
    .type('Array')
    .items({ type: 'Link', validations: [], linkType: 'Entry' })

  pageBody.changeEditorInterface('title', 'singleLine')
  pageBody.changeEditorInterface('content', 'entryLinksEditor')
}

module.exports.down = migration => migration.deleteContentType('pageBody')
