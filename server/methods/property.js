import { check, Match  } from 'meteor/check';

Meteor.methods({
  'Property.insert':function(property){
    check(property,   Match.Any);
    return Property.insert(property);
  },
});
