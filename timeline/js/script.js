let comments = document.getElementsByClassName('tweet');

  for (comment of comments) {
    comment.addEventListener('mouseenter', function(event){
      event.target.style.backgroundColor = "gray";}, false);

    comment.addEventListener('mouseleave', function(event){
      event.target.style.backgroundColor = "";}, false);
  }
