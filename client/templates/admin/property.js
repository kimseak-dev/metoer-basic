Template.propertyAdmin.helpers({
    // 'categories': function () {
    //     return Category.find({});
    // },
    'property':function(){
        return Property.find();
    }
});

Template.propertyAdmin.events({
    'change .myFileInput':function(evt,tmpl){
        FS.Utility.eachFile(event,function(file){
            Images.insert(file,function(err,fileObj){
                if(!err){
                    imageurl = {
                        'image':'/cfs/files/images/' + fileObj._id
                    };
                }

            })
        })
    },
    'click .addProperty':function(event,template){
        event.preventDefault();
        var property = {
            title: template.find('#property-title').value,
            company: template.find('#property-company').value,
            description: template.find('#property-description').value,
            price: template.find('#property-price').value,
            img: imageurl,
            location:{
              city:template.find('#city').value,
              district:template.find('#district').value,
              commune:template.find('#commune').value,
            }
        }
        Meteor.call('Property.insert',property,function(err){
           if(err){
               console.log(err);
           }else {
             console.log("you have added to daabase sucess");
           }
        });
    },

    //##############remove product
    // 'click .removeProduct':function(event,template){
    //     Meteor.call('Product.remove',this._id);
    // },
    //##############edit product
    // 'click .product-edit':function(event,template){
    //     console.log(this._id);
    //     product_id = this._id;
    //     $('#category').val(this.categoryId);
    //     $('#productname').val(this.name);
    //     $('#productId').val(this._id);
    //     $('#price').val(this.price);
    //     $('#description').val(this.description);
    //     imgupdate = this.img;
    //
    //     $('.addProduct').text('Update Product').removeClass('addProduct').addClass('updateProduct');
    //     $('.my-hide').removeClass('my-hide').addClass('cancelProduct');
    // },

    // 'click .cancelProduct': function(event, template){
    //     $('.updateProduct').text('Add Product').removeClass('updateProduct').addClass('addProduct');
    //     $('.cancelProduct').removeClass('cancelProduct').addClass('my-hide');
    // },
    //##############update product
    // 'click .updateProduct':function(event,template){
    //     event.preventDefault();
    //     avatar = $('#avatar').val();
    //     if(avatar == ''){
    //         image = imgupdate;
    //         //console.log(image);
    //     }
    //     else{
    //         image = imageurl;
    //     }
    //     var product = {
    //         name: template.find('#productname').value,
    //         categoryId: template.find('#category').value,
    //         description: template.find('#description').value,
    //         price: template.find('#price').value,
    //         img: image
    //     };
    //
    //     Meteor.call('Product.update',product_id, product, function(err){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             $('#productForm')[0].reset();
    //             $('.updateProduct').text('Add Product').removeClass('updateProduct').addClass('addProduct');
    //             $('.cancelProduct').removeClass('cancelProduct').addClass('my-hide');
    //         }
    //     });
    // },
});
