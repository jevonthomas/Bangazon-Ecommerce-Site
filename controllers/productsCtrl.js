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
    res.send(JSON.stringify(products));
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.getChosenProduct = (req, res, next) => {
  const { Products } = req.app.get('models');
  Products.findOne({
    raw: true, 
    where:{id:req.params.id} 
  })
  .then( (product)=>{
    res.send(JSON.stringify(product));
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getProductCategories = (req, res, next) => {
  const { Categories, Products } = req.app.get('models');
  Categories.findAll({
    include: [{model: Products, limit: 3, order: [['date_registered', 'DESC']] }]
  })
  .then( (categories)=>{
    res.send(JSON.stringify(categories));
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getProductCategory = (req, res, next) => {
  const { Categories, Products } = req.app.get('models');
  Categories.findOne({
    raw: true, 
    where:{id:req.params.id}
  })
  .then( (categories)=>{
    Products.findAll({
      raw: true, 
      where:{category_id:req.params.id}
    })
    .then( (products) => {
      res.send(JSON.stringify({categories, products}));
    })
  .catch( (err) => {
    next(err);
  });
}
)}

module.exports.getSearchedProduct= (req, res, next) => {
// Storing the search input into a variable in order to capitalize the first letter
  let search = req.body.search;
  search = search.charAt(0).toUpperCase() + search.slice(1);
  const { Products } = req.app.get('models');
  Products.findAll({
    raw: true,
    where:{title:search}
  })
  .then( (products)=>{
    res.send(JSON.stringify(products));
  })
  .catch( (err) => {
    next(err);
  });
}