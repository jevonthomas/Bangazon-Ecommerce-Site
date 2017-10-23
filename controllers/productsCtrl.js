'use strict'

module.exports.getHomeProducts = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findAll({
    limit: 20,
    order: [
      ['date_added', 'DESC']
    ]
  })
  .then( (products) => {
    // console.log("Product", products.dataValues);
    res.send(JSON.stringify(products));
    // res.render('product', {data: products});
  })
  .catch( (err) => {
    next(err); 
  });
};