const blogpostModel = require('../models/blogpost');

const readAll = (request, response) => {
  blogpostModel.readAll()
    .then( result => { 
      response.json( result ); 
    })
    .catch( error => { console.error( error ); });
}

const readOne = (request, response) => {
  blogpostModel.readOne(request.params.blogpost_id)
    .then( result => {
      response.json( result );
    })
    .catch( error => { console.error( error ); });    
}

const create = (request, response) => {
  blogpostModel.create(request.body)
    .then( result => { response.json( result ); })
    .catch( error => { console.error( error ); })
}

const update = (request, response) => { 
  blogpostModel.update(request.params.blogpost_id, request.body)
    .then( result => { response.json( result ); })
    .catch( error => { console.error( error ); })
}

const destroy = (request, response) => {
  blogpostModel.destroy(request.params.blogpost_id)
    .then( result => { response.json(result); })
    .catch( error => { console.error( error ); })
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
