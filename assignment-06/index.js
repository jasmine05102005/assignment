const postsData = [
  {
    username: "fukkard",
    time: "4m",
    image: "https://static.toiimg.com/thumb/msid-111323689,width-1280,height-720,resizemode-4/111323689.jpg",
    caption: "Aadhaar + PAN linking now mandatory! 🚨📄",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    username: "elena_photos",
    time: "12m",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Nature’s peace will flow into you 🌲🍃",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    username: "bobby_travel",
    time: "20m",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    caption: "Sunset at Bali 🏝️🌅",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    username: "maya.inspo",
    time: "35m",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    caption: "Start your morning with positivity ☀️✨",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg"
  }
];
const users = [
  {
    username: "fukkard",
    fullName: "News India",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    bio: "Spreading important news 🚨",
    posts: 24,
    followers: 2100,
    following: 120
  },
  {
    username: "elena_photos",
    fullName: "Elena Rivera",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    bio: "Photographer | Dreamer | Artist 📷",
    posts: 56,
    followers: 1800,
    following: 300
  },
  {
    username: "bobby_travel",
    fullName: "Bobby Singh",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    bio: "Wandering the world 🌍",
    posts: 102,
    followers: 3200,
    following: 410
  }
];

const reelsData = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Workout motivation 💪🔥"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    caption: "Morning vibes ☀️"
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    caption: "Nature walk 🌲🍃"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1526178613306-3e4b89845754",
    caption: "City lights 🌆"
  }
];

const notificationsData = [
  {
    user: "friend_01",
    type: "like",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "liked your post.",
    time: "2 min ago"
  },
  {
    user: "elena_photos",
    type: "comment",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    message: "commented: 'Amazing click!'",
    time: "10 min ago"
  },
  {
    user: "bobby_travel",
    type: "follow",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    message: "started following you.",
    time: "1 hr ago"
  },
  {
    user: "friend_03",
    type: "like",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    message: "liked your reel.",
    time: "3 hrs ago"
  }
];

const menuItems = document.querySelectorAll(".nav-menu li");
const sections = document.querySelectorAll(".section");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    item.classList.add("active");
    const target = item.getAttribute("data-section");
    document.getElementById(target).classList.add("active");
  });
});

let postIndex = 0;

function loadMorePosts() {
  const home = document.querySelector("#home");

  for (let i = 0; i < 2 && postIndex < postsData.length; i++, postIndex++) {
    const post = postsData[postIndex];

    const postHTML = `
      <div class="post-card">
        <div class="post-header">
          <img src="${post.avatar}" />
          <span><strong>${post.username}</strong> • ${post.time}</span>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <img class="post-image" src="${post.image}" alt="post" />
        <div class="post-actions">
          <i class="far fa-heart like-btn"></i>
          <i class="far fa-comment comment-btn"></i>
          <i class="far fa-paper-plane share-btn"></i>
          <i class="far fa-bookmark save-btn"></i>
        </div>
        <div class="post-caption">
          <strong>${post.username}</strong> ${post.caption}
        </div>
        <div class="comment-box">
          <input type="text" placeholder="Add a comment..." />
          <button>Post</button>
        </div>
      </div>
    `;

    home.insertAdjacentHTML("beforeend", postHTML);
  }

  attachPostEvents();
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  loadMorePosts();

  const menuItems = document.querySelectorAll(".nav-menu li");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(i => i.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));
      item.classList.add("active");
      const target = item.getAttribute("data-section");
      document.getElementById(target).classList.add("active");
    });
  });
});

// Infinite scroll (basic)
window.addEventListener("scroll", () => {
  const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
  if (bottomReached) {
    loadMorePosts();
  }
});

// Like / Comment / Share functionality
function attachPostEvents() {
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("fas");
      btn.style.color = btn.classList.contains("fas") ? "red" : "";
    });
  });

  document.querySelectorAll(".comment-box button").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      if (input.value.trim() !== "") {
        alert(`Commented: ${input.value}`);
        input.value = "";
      }
    });
  });

  document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Post shared!");
    });
  });
  

}
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  const profileContainer = document.getElementById("searchedProfile");

  resultsContainer.innerHTML = "";
  profileContainer.innerHTML = "";

  if (query === "") return;

  const matches = users.filter(user =>
    user.username.toLowerCase().includes(query) ||
    user.fullName.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = "<p>No user found.</p>";
    return;
  }

  matches.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("search-result");
    div.innerHTML = `
      <img src="${user.avatar}" alt="${user.username}" />
      <span><strong>${user.username}</strong> (${user.fullName})</span>
    `;
    div.addEventListener("click", () => showUserProfile(user));
    resultsContainer.appendChild(div);
  });
});

  function showUserProfile(user) {
    const profileContainer = document.getElementById("searchedProfile");
    profileContainer.innerHTML = `
      <div class="profile-card">
        <img src="${user.avatar}" alt="${user.username}" />
        <h3>@${user.username}</h3>
        <p>${user.fullName}</p>
        <p>${user.bio}</p>
        <p><strong>Posts:</strong> ${user.posts} |
           <strong>Followers:</strong> ${user.followers} |
           <strong>Following:</strong> ${user.following}</p>
      </div>
    `;
  }
  function loadReels() {
  const reelContainer = document.getElementById("reelContainer");
  reelsData.forEach(reel => {
    const reelEl = document.createElement("div");
    reelEl.className = "reel";

    let mediaContent = "";
    if (reel.type === "video") {
      mediaContent = `<video src="${reel.src}" autoplay loop muted></video>`;
    } else {
      mediaContent = `<img src="${reel.src}" alt="reel">`;
    }

    reelEl.innerHTML = `
      <div class="reel-media">
        ${mediaContent}
      </div>
      <div class="reel-caption">${reel.caption}</div>
      <div class="reel-actions">
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <i class="far fa-paper-plane"></i>
      </div>
    `;

    reelContainer.appendChild(reelEl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadReels();
});
document.getElementById("createForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const image = document.getElementById("postImage").value.trim();
  const caption = document.getElementById("postCaption").value.trim();

  if (!image || !caption) return;

  const post = {
    username: "you",
    time: "Just now",
    image,
    caption,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  };

  postsData.unshift(post); // Add to top
  document.getElementById("home").innerHTML = ""; // Clear
  postIndex = 0;
  loadMorePosts(); // Reload
  alert("Post created!");

  // Clear form
  document.getElementById("postImage").value = "";
  document.getElementById("postCaption").value = "";

  // Redirect to home
  document.querySelector('[data-section="home"]').click();
});
function loadUserProfile() {
  const grid = document.getElementById("yourPostGrid");
  grid.innerHTML = "";
  let count = 0;

  postsData.forEach(post => {
    if (post.username === "you") {
      const div = document.createElement("div");
      div.className = "grid-item";
      div.innerHTML = `<img src="${post.image}" alt="post" title="${post.caption}" />`;
      grid.appendChild(div);
      count++;
    }
  });

  document.getElementById("yourPostsCount").innerText = count;
}

document.querySelector('[data-section="profile"]').addEventListener("click", loadUserProfile);

function loadNotifications() {
  const container = document.getElementById("notificationList");
  container.innerHTML = "";

  notificationsData.forEach(notif => {
    const div = document.createElement("div");
    div.className = "notification";

    div.innerHTML = `
      <img src="${notif.avatar}" alt="${notif.user}" />
      <div>
        <p><strong>${notif.user}</strong> ${notif.message}</p>
        <small>${notif.time}</small>
      </div>
    `;

    container.appendChild(div);
  });
}

document.querySelector('[data-section="notifications"]').addEventListener("click", loadNotifications);