var posts=["2024/12/22/111/","2024/12/14/Hello-Everyone/","2024/12/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };