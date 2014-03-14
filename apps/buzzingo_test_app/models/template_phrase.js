BuzzingoTestApp.TemplatePhrase = SC.Record.extend({
  name: SC.Record.attr(String),
  board: SC.Record.toOne('BuzzingoTestApp.TemplateBoard', { isMaster: NO, key: 'board_id', inverse: 'phrase_ids' })
});
