FlowRouter.route(['/','/home'],{
    action:function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:''});
    }
});

FlowRouter.route('/signup',{
    action:function(){
        FlowLayout.render('layout',{sidebar:'',main:'signup',cart:''});
    }
});

FlowRouter.route('/profile',{
    action:function(){
        FlowLayout.render('layout',{sidebar:'',main:'profile',cart:''});
    }
});

FlowRouter.route('/signin',{
    action:function(){
        FlowLayout.render('layout',{sidebar:'',main:'signin',cart:''});
    }
});

FlowRouter.route('/signout',{
    action:function(){
        Meteor.logout(function(err){
            if(!err){
                FlowRouter.go('/signin');
            }
        })
    }
});


FlowRouter.route('/admin/category',{
    action:function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'categoryAdmin',cart:''});
    }
});

FlowRouter.route('/admin/product',{
    subscriptions:function(params){
        this.register('catlist',Meteor.subscribe('category'));
        this.register('product',Meteor.subscribe('product'));
    },
    action:function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'propertyAdmin',cart:''});
    }
});


FlowRouter.route('/type/property/:detail',{
    action:function(){
        console.log("Running Action to render templates into layouts.");
        FlowLayout.render('layout',{sidebar:'',main:'propertydetail',cart:'cart'});
    }
});
FlowRouter.route('/type/:typeName',{
    action:function(){
        console.log("Running Action to render templates into layouts.");
        FlowLayout.render('layout',{sidebar:'',main:'type',cart:'cart'});
    }
});

FlowRouter.route('/category/:categoryName',{
    subscriptions:function(params){
        this.register('catlist',Meteor.subscribe('category'));
        this.register('product',Meteor.subscribe('product'));
    },

    action:function(){
        console.log("Running Action to render templates into layouts.");
        FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
    }
});

FlowRouter.route('/:category/product/:id',{
    subscriptions:function(params){
        this.register('catlist',Meteor.subscribe('category'));
        this.register('product',Meteor.subscribe('product'));
        this.register('commentlist',Meteor.subscribe('productcomment'));
    },
    action:function(){
        console.log("Running Action to render templates into layouts.");
        FlowLayout.render('layout',{sidebar:'sidebar',main:'productdetail',cart:'cart'});
    }
});
