var posts=["2024/12/22/111/","2024/12/14/Hello-Everyone/","2024/12/25/使用VScode和EIDE插件开发STM32/","2024/12/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };