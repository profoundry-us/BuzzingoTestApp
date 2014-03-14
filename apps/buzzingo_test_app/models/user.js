BuzzingoTestApp.User = SC.Record.extend({
  primaryKey: 'uid',
  template_boards: SC.Record.toMany('BuzzingoTestApp.TemplateBoard', { isMaster: YES, key: 'template_board_ids', inverse: 'user_id' })
});
