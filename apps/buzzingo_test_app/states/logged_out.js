BuzzingoTestApp.LoggedOutState = SC.State.extend({

  enterState: function() {
  },

  _auth: null,
  loginAction: function() {
    var ref = BuzzingoTestApp.get('firebase'),
        state = this;

    this._auth = this._auth || new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        alert(error);
      } else if (user) {
        SC.run(function() {
          var btaUser = BuzzingoTestApp.store.find(BuzzingoTestApp.User, user.uid);

          ref.child('users').child(user.uid).set({
            id: user.uid,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
          });

          BuzzingoTestApp.currentUserController.set('content', btaUser);

          state.gotoState('loggedIn');
        });
      } else {
        // User is logged out; do nothing
        console.log(' *** user is logged out...');
        state._auth.login('facebook');
      }
    });
  }
});
