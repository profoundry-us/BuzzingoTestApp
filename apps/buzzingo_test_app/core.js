// ==========================================================================
// Project:   BuzzingoTestApp
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals BuzzingoTestApp */

/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
BuzzingoTestApp = SC.Application.create(
  /** @scope BuzzingoTestApp.prototype */ {

  NAMESPACE: 'BuzzingoTestApp',
  VERSION: '0.1.0',

  store: SC.Store.create().from('BuzzingoTestApp.DataSource'),

  firebaseApp: 'buzzingo',

  firebase: function() {
    var app = this.get('firebaseApp');

    return new Firebase('https://%@.firebaseio.com/'.fmt(app));
  }.property('firebaseApp').cacheable()

});
