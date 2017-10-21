'use strict'

module.exports.getProducts = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findAll()
  .then( (products) => {
    console.log("Product", products);
    // res.render('product', {products});
  })
  .catch( (err) => {
    next(err); 
  });
};