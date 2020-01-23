module.exports.description = 'Enable localization';

module.exports.up = (migration) => {
  const pageLink = migration.editContentType('pageLink');

  pageLink.editField('title')
    .localized(true)
};

module.exports.down = (migration) => {
  const pageLink = migration.editContentType('pageLink');

  pageLink.editField('title')
    .localized(false)
};
