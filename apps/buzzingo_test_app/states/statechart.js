BuzzingoTestApp.Statechart = SC.Object.extend(SC.StatechartManager, {
  rootState: SC.State.design({
    initialSubstate: 'loading',

    loading: SC.State.extend({
      enterState: function() {
        BuzzingoTestApp.get('firebase');

        this.gotoState('loggedOut');
      }
    }),

    loggedOut: SC.State.plugin('BuzzingoTestApp.LoggedOutState'),
    loggedIn: SC.State.plugin('BuzzingoTestApp.LoggedInState'),

    enterState: function() {
      BuzzingoTestApp.getPath('mainPage.mainPane').append();
    }
  })
});
