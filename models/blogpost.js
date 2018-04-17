const knex = require('../db');

const readAll = () => {
  return knex('blogposts')
    .then( rows => rows )
    .catch( error => { console.error(error); });
};

const readOne = blogpost_id => {
  return knex('blogposts').where('id', blogpost_id)
    .then( rows => rows[0] )
    .catch( error => { console.error(error); })
}

const create = ({title, content}) => {
  return knex('blogposts')
    .returning('*')
    .insert({ title, content })
    .then( row => row[0] )
    .catch( error => { console.error(error); });
}

const update = (blogpost_id, updates) => {
  return knex('blogposts')
    .returning('*')
    .update({...updates, updated_at: new Date( Date.now()).toISOString() })
    .where('id', blogpost_id)
    .then( row => row[0] )
    .catch( error => { console.error( error ); });
}

const destroy = blogpost_id => {
  return knex('blogposts')
    .returning('*')
    .del()
    .where('id', blogpost_id)
    .then( row => row[0] )
    .catch( error => { console.error( error ); })
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
