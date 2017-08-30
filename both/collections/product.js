Product = new Mongo.Collection('product');
Product.helpers({
    category:function(){
        return Category.findOne(this.categoryId);
    },
     user: function(){
       return Meteor.users.findOne({_id: "cPiB8veo7DcXm6jt5"});
     }
});
