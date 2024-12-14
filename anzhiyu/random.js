var posts=["2024/12/09/hello-world/","2024/12/14/Hello-Everone/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };