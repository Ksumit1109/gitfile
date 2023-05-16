const posts = [
  { title: 'POST1', timestamp: new Date()},
  { title: 'POST2', timestamp: new Date()},
];


function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      const poppedElement = posts.pop();
      resolve(poppedElement);
    } else {
      reject('ERROR');
    }
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myTime = new Date();
      resolve(myTime);
    }, 1000);
  });
}

function printPost() {
  posts.forEach((post) => {
     console.log(`Title: ${post.title} | Timestamp: ${post.timestamp}`)
  });
}

function executePostCreation() {
  createPost({ title: 'newPOST' })
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      printPost();
      console.log(`The new post is created on ${lastActivityTime}`);
      return deletePost();
    })
    .then(() => {
      console.log(`Note that the last post is deleted`);
      printPost();
    })
    .catch((msg) => {
      console.log(msg);
    });
}

executePostCreation();
