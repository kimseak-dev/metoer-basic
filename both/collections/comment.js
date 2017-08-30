ProductComment = new Mongo.Collection('productcomment');
ProductComment.helpers({
    user:function(){
        return Meteor.users.findOne(this.userId);
    },
    // user: function(){
    //   return Meteor.users.findOne({_id: "cPiB8veo7DcXm6jt5"});
    // }
});
