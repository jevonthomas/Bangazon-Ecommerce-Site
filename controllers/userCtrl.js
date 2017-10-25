'use strict';

module.exports.getUser = (req, res, next) => {
  console.log("birdy");
  const { User } = req.app.get('models');
  User.findOne({
    raw: true, 
    where:{id:req.params.id} 
  })
  .then( (user)=>{
    res.send(JSON.stringify(user));
  })
  .catch( (err) => {
    next(err);
  });
};