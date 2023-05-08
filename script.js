let visiblePostId = null;
      let hiddenPosts = [];

      function showPost(id) {
        // Hide all posts
        let posts = document.querySelectorAll(".post");
        for (let i = 0; i < posts.length; i++) {
          posts[i].classList.add("hidden");
          if (!posts[i].classList.contains("read-more")) {
            hiddenPosts.push(posts[i]);
          }
        }

        // Show selected post
        document.getElementById("post-" + id).classList.remove("hidden");

        // Remember the ID of the visible post
        visiblePostId = id;
      }

      function hidePosts() {
        // Hide the currently visible post
        if (visiblePostId !== null) {
          document
            .getElementById("post-" + visiblePostId)
            .classList.add("hidden");
          visiblePostId = null;
        }

        // Show the two initial posts
        let posts = document.querySelectorAll(".post");
        for (let i = 0; i < posts.length; i++) {
          if (i < 2) {
            posts[i].classList.remove("hidden");
          } else if (!posts[i].classList.contains("read-more")) {
            hiddenPosts.push(posts[i]);
          }
        }

        // Reset the list of hidden posts
        hiddenPosts = [];
      }
      // Get all the dropdown links
      var dropdownLinks = document.querySelectorAll(".dropdown-content a");

      // Loop through the links and add a click event listener to each one
      dropdownLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          // Prevent the link from following its href attribute
          event.preventDefault();

          // Get the ID of the content to show
          var contentId = this.getAttribute("data-target");

          // Hide all the content divs
          var contents = document.querySelectorAll(".content");
          contents.forEach(function (content) {
            content.classList.remove("active");
          });

          // Show the selected content div
          var contentToShow = document.querySelector("#" + contentId);
          contentToShow.classList.add("active");
        });
      });