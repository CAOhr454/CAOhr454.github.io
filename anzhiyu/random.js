var posts=["2024/12/14/Hello-Everone/","2024/12/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };