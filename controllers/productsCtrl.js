'use strict'

module.exports.getHomeProducts = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findAll({
    limit: 20,
    order: [
      ['date_registered', 'DESC']
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

module.exports.getChosenProduct = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findOne({raw: true, where:{id:req.params.id} })
  .then( (product)=>{
    res.send(JSON.stringify(product));
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getProductCategories = (req, res, next) => {
  const { Categories, Products } = req.app.get('models');
  Categories.findAll({include: [{model: Products, limit: 3, order: [['date_registered', 'DESC']] }]})
  .then( (categories)=>{
    res.send(JSON.stringify(categories));
  })
  .catch( (err) => {
    next(err);
  });
};