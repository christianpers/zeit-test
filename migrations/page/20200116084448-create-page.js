module.exports.description = 'Create content model for Page'

module.exports.up = (migration) => {
  const page = migration.createContentType('page')
    .name('Page')
    .displayField('title')
    .description('Page container')

  page.createField('slug')
    .name('slug')
    .type('Symbol')

  page.createField('title')
    .name('Title')
    .type('Symbol')

  page.createField('header')
    .name('Header')
    .type('Link')
    .validations([{ linkContentType: ['header'] }])
    .linkType('Entry')

  page.createField('body')
    .name('Body')
    .type('Link')
    .linkType('Entry')

  page.createField('footer')
    .name('Footer')
    .type('Link')
    .linkType('Entry')

  page.changeFieldControl('slug', 'builtin', 'singleLine')
  page.changeFieldControl('title', 'builtin', 'singleLine')
  page.changeFieldControl('header', 'builtin', 'entryLinkEditor')
  page.changeFieldControl('body', 'builtin', 'entryLinkEditor')
  page.changeFieldControl('footer', 'builtin', 'entryLinkEditor')
  // page.changeEditorInterface('slug', 'singleLine')
  // page.changeEditorInterface('title', 'singleLine')
  // page.changeEditorInterface('header', 'entryLinkEditor')
  // page.changeEditorInterface('body', 'entryLinkEditor')
  // page.changeEditorInterface('footer', 'entryLinkEditor')
}

module.exports.down = migration => migration.deleteContentType('page')
