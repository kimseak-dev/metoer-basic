Template.productitem.helpers({
    products:function(){
        var categoryId = Category.findOne({name:FlowRouter.getParam('categoryName')})._id;
        return Product.find({categoryId:categoryId});
    }
});

Template.home.helpers({
    allproducts:function(){
        return Product.find({});
    }
});

Template.productdetail.helpers({
    'product': function(){
        var id = FlowRouter.getParam('id');
        console.log(Product.findOne({_id:id}));
        return Product.findOne({_id:id});
    },
    'comments': function(){
        var id = FlowRouter.getParam('id');
        var cmt = ProductComment.find({productId:id}, { sort: { createdAt: -1 }}).fetch();
        //console.log("test",ProductComment.find({productId:id}, { sort: { createdAt: -1 }}).fetch());
        return cmt;
    },

})
Template.productdetail.events({
    'click .send-message': function(event, template){
          var comment = {
              userId: Meteor.userId(),
              productId: FlowRouter.getParam('id'),
              usercomment: template.find('#comment').value,
              createdAt: new Date(),

          };
          Meteor.call('Comment.insert',comment,function(err){
             if(err){
                 console.log(err)
             }
          });    
    },
})
