module.exports.description = 'Create content model for Blog Post'

module.exports.up = (migration) => {
  const blogPost = migration.createContentType('blogPost')
    .name('Blog Post')
    .displayField('title')
    .description('')

  blogPost.createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)

  blogPost.createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')

  blogPost.changeEditorInterface('title', 'singleLine')
  blogPost.changeEditorInterface('image', 'assetLinkEditor')
}

module.exports.down = migration => migration.deleteContentType('blogPost')
