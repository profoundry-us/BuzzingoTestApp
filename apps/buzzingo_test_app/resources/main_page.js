// ==========================================================================
// Project:   BuzzingoTestApp - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals BuzzingoTestApp */

// This page describes the main user interface for your application.
BuzzingoTestApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'loginButtonView labelView'.w(),

    loginButtonView: SC.ButtonView.extend(SC.AutoResize, {
      layout: { centerX: 0, centerY: -30, width: 0, height: 24 },

      title: 'Login',

      target: 'BuzzingoTestApp.statechart',
      action: 'loginAction'
    }),

    labelView: SC.LabelView.extend({
      classNames: ['welcome-label'],
      layout: { centerX: 0, centerY: 0, width: 300, height: 24 },
      tagName: "h1",
      valueBinding: SC.Binding.oneWay("BuzzingoTestApp.currentUserController.first_name")
    })
  })

});
