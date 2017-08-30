import { check, Match  } from 'meteor/check';

Meteor.methods({
    //create
    'Comment.insert':function(comment){
        check(comment, {
          userId : String,
          productId : String,
          usercomment : String,
          createdAt:Match.Any,
        });
        return ProductComment.insert(comment);
    },

});
