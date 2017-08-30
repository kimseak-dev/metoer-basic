Template.profile.events({
    'change .myFileInput':function(evt,tmpl){
        FS.Utility.eachFile(event,function(file){
            Images.insert(file,function(err,fileObj){
                if(!err){
                    var userId = Meteor.userId();
                    var imageurl = {
                        'profile.avatar':'/cfs/files/images/' + fileObj._id
                    };
                    setTimeout(function(){
                        Meteor.users.update(userId,{$set:imageurl});
                    },2000);
                }
            })
        })
    },
    'click #admin': function(event, template) {
      var user = Meteor.users.findOne(Meteor.userId);
      console.log(user.profile.email);
      var x = template.$('#admin').is(":checked");
     if(x == true){
        var email =user.profile.email;
         Meteor.call('User.addrole',email,function(err){
            if(err){
                console.log(err);
            }else {
              console.log(user);
            }
         });
     }
 }
});
