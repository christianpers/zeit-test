module.exports.description = 'Add Hero link';

module.exports.up = (migration) => {
  const pageBody = migration.editContentType('pageBody');

  pageBody.createField('hero')
    .name('Hero')
    .type('Link')
    .validations([{ linkContentType: ['hero'] }])
    .linkType('Entry')

  pageBody.moveField('hero').afterField('title');
};

module.exports.down = (migration) => {
  const pageBody = migration.editContentType('pageBody');

  pageBody.deleteField('hero');
};
