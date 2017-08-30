Template.category.helpers({
    'categoryName': function(){
        return FlowRouter.getParam('categoryName');
    },
    'products':function(){
        return Product.find();
    }
});

Template.categoryAdmin.events({
    'submit form': function (event, template) {
        event.preventDefault();
        var category ={};
        category.name = template.find('#categoryName').value;
        Meteor.call('addCategory', category);
    }
});
