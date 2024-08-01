var posts=["2024/07/31/hello-world/","2024/08/01/helloworld/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };