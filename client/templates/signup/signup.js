import { Template } from 'meteor/templating';
import './signup.html';


Template.signup.events({
    'submit form':function(event){
        //prevent default browser form  submit
        event.preventDefault();

        //get value form element
        const target = event.target;
        const firtname = target.firstname.value;
        const lastname = target.lastname.value;
        const email    = target.email.value;
        const password = target.password.value;

        //create user
        Accounts.createUser({
            firstname : firtname,
            lastname : lastname,
            email : email,
            password: password,
        },
        function (error) {
            if(error){
                console.log(error);
            }else {
                  FlowRouter.go('/profile');
            }
        }
        );

    }
});
