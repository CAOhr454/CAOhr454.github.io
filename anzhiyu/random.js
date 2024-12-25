var posts=["2024/12/09/hello-world/","2024/12/25/使用VScode和EIDE插件开发STM32/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };