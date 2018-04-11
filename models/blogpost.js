const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');
const blogpostsPath = path.join(__dirname, '..', 'data', 'blogposts.json');
const blogpostsJSON = fs.readFileSync(blogpostsPath, 'utf8');
const blogpostsArray = JSON.parse(blogpostsJSON);

const readAll = () => blogpostsArray;

const readOne = (blogpost_id) => {
  const filteredBlogposts = blogpostsArray.filter( item => item.id === blogpost_id );
  return filteredBlogposts[0];
}

const create = ({title, content}) => {
  const newBlogpost = {
    id: uuid(),
    title,
    content
  };
  blogpostsArray.push(newBlogpost);
  const blogpostsJSON = JSON.stringify(blogpostsArray);
  fs.writeFileSync(blogpostsPath, blogpostsJSON);
  return newBlogpost;
}

const update = (blogpost_id, updates) => {}

const destroy = (blogpost_id) => {}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
