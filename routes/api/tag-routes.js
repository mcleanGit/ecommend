const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll( {
    include: [
      { 
       model: Product,
       through: ProductTag, 
      },
    ],
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  // TODO be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include: [
      { 
       model: Product,
       through: ProductTag, 
      },
    ],
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({
        message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);   
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // TODO be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((dbTagData) => res.json(dbTagData))
  .catch((err) => 
 //   console.log(err);
    res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,   
    },
  })
  .then((dbTagData) => res.json(dbTagData))
  .catch((err) => 
//    console.log(err)
    res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,   
    },
  })
  .then((dbTagData) => res.json(dbTagData))
  .catch((err) => 
//    console.log(err)
    res.status(404).json(err));
});

module.exports = router;