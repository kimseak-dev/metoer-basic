Meteor.publish('products', function(){
  return Property.find();
});
