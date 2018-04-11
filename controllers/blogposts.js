const blogpostModel = require('../models/blogpost');

const readAll = (request, response) => {
  const blogposts = blogpostModel.readAll();
  response.send(blogposts);
}

const readOne = (request, response) => {
  const blogpost = blogpostModel.readOne(request.params.blogpost_id);
  response.send(blogpost);
}

const create = (request, response) => {
  const blogpost = blogpostModel.create(request.body);
  response.send(blogpost);
}

const update = (request, response) => {
  const blogpost = blogpostModel.update(request.params.blogpost_id, request.body);
  response.send(blogpost);
}

const destroy = (request, response) => {
  const blogpost = blogpostModel.destroy(request.params.blogpost_id);
  response.send(blogpost);
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
