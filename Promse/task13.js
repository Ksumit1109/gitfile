const posts = [
    { title: 'POST1', timestamp: new Date() },
    { title: 'POST2', timestamp: new Date() },
  ];
  
  function createPost(post) {
    return new Promise((resolve) => {
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
    return new Promise((resolve) => {
      setTimeout(() => {
        const myTime = new Date();
        resolve(myTime);
      }, 1000);
    });
  }
  
  function printPost() {
    posts.forEach((post) => {
      console.log(`Title: ${post.title} | Timestamp: ${post.timestamp}`);
    });
  }
  
  async function getColdDrinks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Cold drinks are ready!')
        resolve();
      }, 2000);
    });
  }
  
  async function executePostCreation() {
    try {
      await createPost({ title: 'newPOST' });
      const lastActivityTime = await updateLastUserActivityTime();
      printPost();
      console.log(`The new post is created on ${lastActivityTime}`);
  
      const butterPromise = console.log("Butter")
      const coldDrinksPromise = getColdDrinks();
  
      await Promise.all([butterPromise, coldDrinksPromise]);
  
      const deletedPost = await deletePost();
      console.log(`Note that the last post is deleted`);
      printPost();
    } catch (error) {
      console.log(error);
    }
  }
  
  executePostCreation();
  