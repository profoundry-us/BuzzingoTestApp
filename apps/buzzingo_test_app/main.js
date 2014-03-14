// ==========================================================================
// Project:   BuzzingoTestApp
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals BuzzingoTestApp */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
BuzzingoTestApp.main = function main() {

  BuzzingoTestApp.statechart = BuzzingoTestApp.Statechart.create({ autoInitStatechart: NO });
  BuzzingoTestApp.statechart.initStatechart();

};


function main() { BuzzingoTestApp.main(); }
