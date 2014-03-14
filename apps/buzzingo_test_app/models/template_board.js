BuzzingoTestApp.TemplateBoard = SC.Record.extend({
  name: SC.Record.attr(String),
  phrases: SC.Record.toMany('BuzzingoTestApp.TemplatePhrase', { isMaster: YES, key: 'phrase_ids', inverse: 'template_board_id' })
});
