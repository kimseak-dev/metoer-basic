import { Meteor } from 'meteor/meteor'

Template.signin.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email, password, function(res){
            console.log(res)
            FlowRouter.go('/');
        });
    }
});