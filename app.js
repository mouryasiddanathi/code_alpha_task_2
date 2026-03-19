// ─── DATA ────────────────────────────────────────────────────────────────────

const POSTS_DATA = [
  {
    id: 1,
    name: "Maya Chen", handle: "@mayachen", avatar: "M",
    grad: "135deg, #5cf0c8, #5c9cfc", time: "2m ago",
    body: "Just shipped a new design system that cuts our component build time by 60%. The secret? Ruthless consistency and a solid token architecture. Thread incoming 🧵 #DesignSystems #Frontend",
    likes: 284, comments: 42, reposts: 31, liked: false, showComments: false,
    commentList: [
      { name: "Jordan K.", avatar: "J", grad: "135deg, #fc5c8a, #fc9c5c", text: "This is exactly what we needed. Would love to see the thread!" },
      { name: "Sam Dev",   avatar: "S", grad: "135deg, #7c5cfc, #5cf0c8", text: "Token architecture is underrated. Glad more teams are investing in it." }
    ],
    image: null
  },
  {
    id: 2,
    name: "Jordan Kim", handle: "@jordankim", avatar: "J",
    grad: "135deg, #fc5c8a, #fc9c5c", time: "18m ago",
    body: "Hot take: the best productivity hack isn't a new app or framework. It's learning to say no to features that don't serve your users. Shipped less, impact doubled. #ProductThinking #BuildInPublic",
    likes: 512, comments: 78, reposts: 95, liked: false, showComments: false,
    commentList: [
      { name: "Alex Rivera", avatar: "A", grad: "135deg, #7c5cfc, #fc5c8a", text: "100% agree. Scope creep is the silent killer of good products." }
    ],
    image: null
  },
  {
    id: 3,
    name: "Sam Okafor", handle: "@samokafor", avatar: "S",
    grad: "135deg, #7c5cfc, #5cf0c8", time: "1h ago",
    body: "Reminder that dark mode isn't just an aesthetic preference — for many users with visual sensitivities, it's accessibility. Design with intention. 🌙 #A11y #UXDesign",
    likes: 1023, comments: 114, reposts: 210, liked: true, showComments: false,
    commentList: [], image: "🌙"
  },
  {
    id: 4,
    name: "Priya Nair", handle: "@priyanair", avatar: "P",
    grad: "135deg, #f7c948, #fc5c8a", time: "3h ago",
    body: "I've been learning Rust for 3 months now. My brain has been fully rewired. Memory safety isn't just a feature — it's a mindset shift. #Rust #Programming",
    likes: 349, comments: 56, reposts: 44, liked: false, showComments: false,
    commentList: [
      { name: "Maya Chen", avatar: "M", grad: "135deg, #5cf0c8, #5c9cfc", text: "The borrow checker broke me at first but now I can't go back 😅" }
    ],
    image: null
  }
];

const SUGGESTIONS_DATA = [
  { name: "Priya Nair",  handle: "@priyanair",  avatar: "P", grad: "135deg, #f7c948, #fc5c8a", bio: "Rust & systems engineer",  followers: 3820, following: 190, posts: 204, followed: false },
  { name: "Leo Martins", handle: "@leomartins", avatar: "L", grad: "135deg, #5c9cfc, #5cf0c8", bio: "Open source & coffee",      followers: 1102, following: 430, posts: 118, followed: false },
  { name: "Nia Osei",    handle: "@niaosei",    avatar: "N", grad: "135deg, #fc9c5c, #fc5c8a", bio: "Product @ Stripe",          followers: 6700, following: 280, posts: 342, followed: false }
];
// Who Alex follows — drives the "Following" tab feed
// Each entry mirrors a POSTS_DATA author so their posts appear in the following feed
const FOLLOWING_DATA = [
  { name: "Maya Chen",   handle: "@mayachen",   avatar: "M", grad: "135deg, #5cf0c8, #5c9cfc", bio: "Design systems & token architecture. Building at scale. ☕",  followers: 8420, following: 310, posts: 156, followed: true  },
  { name: "Jordan Kim",  handle: "@jordankim",  avatar: "J", grad: "135deg, #fc5c8a, #fc9c5c", bio: "Product thinking. Shipped 0→1 products at 3 startups.",        followers: 5102, following: 198, posts: 89,  followed: true  },
  { name: "Sam Okafor",  handle: "@samokafor",  avatar: "S", grad: "135deg, #7c5cfc, #5cf0c8", bio: "Accessibility advocate. Dark mode is an a11y issue, not vibes.", followers: 12300, following: 95, posts: 234, followed: true  },
  { name: "Leo Martins", handle: "@leomartins", avatar: "L", grad: "135deg, #5c9cfc, #5cf0c8", bio: "Open source & coffee. Maintainer of 3 npm packages.",           followers: 1102, following: 430, posts: 118, followed: true  },
];

// Unique posts from people Alex follows (not in main feed)
const FOLLOWING_POSTS = [
  {
    id: 101, name: "Maya Chen", handle: "@mayachen", avatar: "M",
    grad: "135deg, #5cf0c8, #5c9cfc", time: "5m ago",
    body: "Design tokens aren't just variables — they're a shared language between design and engineering. When done right, a single token change propagates everywhere. That's the dream. #DesignSystems",
    likes: 192, comments: 28, reposts: 44, liked: false, showComments: false, commentList: [], image: null
  },
  {
    id: 102, name: "Jordan Kim", handle: "@jordankim", avatar: "J",
    grad: "135deg, #fc5c8a, #fc9c5c", time: "32m ago",
    body: "Every feature you add is a feature you have to maintain, document, test, and explain. The best product decision I've made this year was deleting code. #ProductThinking #BuildInPublic",
    likes: 341, comments: 51, reposts: 76, liked: false, showComments: false, commentList: [], image: null
  },
  {
    id: 103, name: "Sam Okafor", handle: "@samokafor", avatar: "S",
    grad: "135deg, #7c5cfc, #5cf0c8", time: "2h ago",
    body: "Accessibility isn't a checkbox — it's a skill. The more you practice thinking about users who aren't like you, the better every decision gets. Thread on practical a11y starts now 🧵 #A11y",
    likes: 876, comments: 99, reposts: 188, liked: true, showComments: false, commentList: [], image: null
  },
  {
    id: 104, name: "Leo Martins", handle: "@leomartins", avatar: "L",
    grad: "135deg, #5c9cfc, #5cf0c8", time: "4h ago",
    body: "Just hit 1000 stars on my open source side project. Started it during a weekend, maintained it for 2 years. The joy of someone finding your work useful never gets old. 🙏 #OpenSource",
    likes: 503, comments: 62, reposts: 91, liked: false, showComments: false, commentList: [], image: null
  },
  {
    id: 105, name: "Maya Chen", handle: "@mayachen", avatar: "M",
    grad: "135deg, #5cf0c8, #5c9cfc", time: "6h ago",
    body: "PSA: your component library is only as good as its documentation. Undocumented props are hidden props. Hidden props don't exist. Write the docs. #Frontend #DesignSystems",
    likes: 267, comments: 33, reposts: 55, liked: false, showComments: false, commentList: [], image: null
  },
];

const TRENDING_DATA = [
  { cat: "Technology",  tag: "#DesignSystems", count: "12.4K posts" },
  { cat: "Development", tag: "#BuildInPublic",  count: "9.1K posts"  },
  { cat: "Career",      tag: "#OpenToWork",     count: "7.8K posts"  },
  { cat: "Design",      tag: "#UXDesign",       count: "5.3K posts"  },
  { cat: "Programming", tag: "#Rust",           count: "4.9K posts"  }
];

const NOTIF_DATA = [
  { id: 1, read: false, type: "like",    avatar: "M", grad: "135deg, #5cf0c8, #5c9cfc", name: "Maya Chen",   time: "2m ago",    text: "liked your post",         preview: '"Just shipped a new design system…"' },
  { id: 2, read: false, type: "follow",  avatar: "J", grad: "135deg, #fc5c8a, #fc9c5c", name: "Jordan Kim",  time: "15m ago",   text: "started following you",   preview: null },
  { id: 3, read: false, type: "comment", avatar: "S", grad: "135deg, #7c5cfc, #5cf0c8", name: "Sam Okafor",  time: "1h ago",    text: "commented on your post",  preview: '"Token architecture is so underrated."' },
  { id: 4, read: true,  type: "repost",  avatar: "P", grad: "135deg, #f7c948, #fc5c8a", name: "Priya Nair",  time: "3h ago",    text: "reposted your post",      preview: '"Dark mode is an accessibility issue…"' },
  { id: 5, read: true,  type: "like",    avatar: "L", grad: "135deg, #5c9cfc, #5cf0c8", name: "Leo Martins", time: "5h ago",    text: "liked your post",         preview: '"Hot take: the best productivity hack…"' },
  { id: 6, read: true,  type: "mention", avatar: "N", grad: "135deg, #fc9c5c, #fc5c8a", name: "Nia Osei",    time: "Yesterday", text: "mentioned you in a post", preview: '"Shoutout to @alexrivera for the thread 🙌"' }
];
const NOTIF_ICONS = { like: "❤️", follow: "👤", comment: "💬", repost: "🔁", mention: "📣" };

const MSG_DATA = [
  {
    id: 1, name: "Maya Chen", handle: "@mayachen", avatar: "M",
    grad: "135deg, #5cf0c8, #5c9cfc", online: true, unread: 2,
    thread: [
      { from: "them", text: "Hey! Loved your post about design tokens 🔥", time: "10:02 AM" },
      { from: "me",   text: "Thanks! Took forever to get right but totally worth it.", time: "10:04 AM" },
      { from: "them", text: "Do you have a write-up? Would love to share it with my team.", time: "10:07 AM" }
    ]
  },
  {
    id: 2, name: "Jordan Kim", handle: "@jordankim", avatar: "J",
    grad: "135deg, #fc5c8a, #fc9c5c", online: false, unread: 0,
    thread: [
      { from: "me",   text: "That post about saying no to features really hit different.", time: "Yesterday" },
      { from: "them", text: "Ha, lived experience. Painful lessons make the best takes.", time: "Yesterday" },
      { from: "me",   text: "Writing a follow-up — mind if I quote you?", time: "Yesterday" },
      { from: "them", text: "Go for it 🙌", time: "Yesterday" }
    ]
  },
  {
    id: 3, name: "Sam Okafor", handle: "@samokafor", avatar: "S",
    grad: "135deg, #7c5cfc, #5cf0c8", online: true, unread: 0,
    thread: [
      { from: "them", text: "Dark mode accessibility thread dropping tomorrow, want a preview?", time: "Monday" },
      { from: "me",   text: "Yes please!", time: "Monday" }
    ]
  }
];

// ─── PROFILE & STATE ──────────────────────────────────────────────────────────

let ownProfile = {
  name: "Alex Rivera", handle: "@alexrivera",
  bio: "Designer & developer. Building things that matter. Coffee enthusiast ☕",
  avatar: "A", grad: "135deg, #7c5cfc, #fc5c8a",
  followers: 1248, following: 312, posts: 87,
  location: "", website: "", dob: "", occupation: "",
  twitter: "", linkedin: "", github: "",
  isPrivate: false, showOnline: true, allowDMs: true
};

// App settings — persisted in memory
let appSettings = {
  theme: "dark",
  accentColor: "#7c5cfc",
  fontSize: "medium",
  reduceMotion: false,
  notif_likes: true,
  notif_comments: true,
  notif_follows: true,
  notif_mentions: true,
  notif_reposts: false,
  notif_email: false,
  notif_push: true,
  autoplay: true,
  compactMode: false,
  language: "en"
};

// Bookmarks: Set of post IDs, plus a map of postId -> collection label
let bookmarks     = new Set();
let bookmarkNotes = {};  // postId -> optional note
let activeBookmarkFilter = "all";

let posts           = JSON.parse(JSON.stringify(POSTS_DATA));
let followingPosts  = JSON.parse(JSON.stringify(FOLLOWING_POSTS));
let nextId       = posts.length + 1;
let activePage   = "home";
let activeTab    = "for-you";   // "for-you" | "following"
let activeConvId = MSG_DATA[0].id;
let postMenuOpen = null;    // id of post whose context menu is open
const _followStates = {};

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderTrending();
  renderSuggestions();
  initCharCounters();
  syncMsgBadge();   // set initial badge from MSG_DATA unread counts
  // Close context menus when clicking elsewhere
  document.addEventListener("click", e => {
    if (!e.target.closest(".post-menu-popup") && !e.target.closest(".post-more")) {
      closePostMenus();
    }
  });
});

function initCharCounters() {
  [{ inp: "ep-name", out: "ep-name-count", max: 50 },
   { inp: "ep-bio",  out: "ep-bio-count",  max: 160 }].forEach(({ inp, out, max }) => {
    const el = document.getElementById(inp);
    const ct = document.getElementById(out);
    if (el && ct) el.addEventListener("input", () => { ct.textContent = `${el.value.length}/${max}`; });
  });
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

function setPage(page, navEl) {
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  navEl.classList.add("active");
  activePage = page;

  const titles = { home: "Home", notifications: "Notifications", messages: "Messages", saved: "Saved", settings: "Settings" };
  document.querySelector(".feed-title").textContent = titles[page] || "Home";
  document.querySelector(".tabs").style.display = page === "home" ? "flex" : "none";

  if      (page === "home")          renderHome();
  else if (page === "notifications") renderNotifications();
  else if (page === "messages")      renderMessages();
  else if (page === "saved")         renderBookmarks();
  else if (page === "settings")      renderSettings();
}

function switchTab(el, tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
  activeTab = tab;
  if (tab === "following") renderFollowingFeed();
  else renderForYouFeed();
}

// ─── FOR YOU FEED ─────────────────────────────────────────────────────────────

function renderForYouFeed() {
  const c = document.getElementById("posts-container");
  if (!c) return;
  c.innerHTML = "";
  posts.forEach(p => c.insertAdjacentHTML("beforeend", buildPostHTML(p)));
}

// ─── FOLLOWING FEED ───────────────────────────────────────────────────────────

function renderFollowingFeed() {
  // Only show followingPosts — never mix with main posts[] (different DOM ID scheme)
  const followedHandles = new Set(FOLLOWING_DATA.filter(u => u.followed).map(u => u.handle));
  const c = document.getElementById("posts-container");
  if (!c) return;

  if (followedHandles.size === 0) {
    c.innerHTML = `
      <div class="following-empty">
        <div class="following-empty-icon">👥</div>
        <div class="following-empty-title">No one to follow yet</div>
        <div class="following-empty-sub">Follow people from the "Who to Follow" panel on the right.</div>
        <button class="following-empty-btn" onclick="switchTab(document.querySelector('.tab'),'for-you')">Browse For You</button>
      </div>`;
    return;
  }

  // Filter following posts to only those from currently-followed people
  const visible = followingPosts.filter(p => followedHandles.has(p.handle));

  const followedAvatars = FOLLOWING_DATA.filter(u => u.followed).map(u => `
    <div class="following-pill" onclick="openProfileModal(${JSON.stringify(u).replace(/"/g,"&quot;")})">
      <div class="following-pill-av" style="background:linear-gradient(${u.grad})">${u.avatar}</div>
      <span>${u.name.split(" ")[0]}</span>
    </div>`).join("");

  c.innerHTML = `
    <div class="following-who-row">
      <div class="following-who-label">From people you follow</div>
      <div class="following-pills">${followedAvatars}</div>
    </div>
    ${visible.length
      ? visible.map(p => buildFollowingPostHTML(p)).join("")
      : `<div class="empty-note" style="text-align:center;padding:40px 0;color:var(--text3)">No posts from the people you follow yet.</div>`
    }`;
}

function buildFollowingPostHTML(post) {
  const isSaved      = bookmarks.has(post.id);
  const likedIcon    = post.liked ? "❤️" : "🤍";
  const person       = FOLLOWING_DATA.find(u => u.handle === post.handle);
  const commentsOpen = post.showComments ? "open" : "";

  const bodyHTML = post.body.replace(/(#\w+)/g,
    `<span class="hashtag" onclick="handleHashtag('$1')">$1</span>`);

  const commentsHTML = (post.commentList || []).map(c => `
    <div class="comment">
      <div class="comment-avatar" style="background:linear-gradient(${c.grad})">${c.avatar}</div>
      <div class="comment-bubble">
        <div class="comment-name">${c.name}</div>
        <div class="comment-text">${c.text}</div>
      </div>
    </div>`).join("");

  const userJSON = JSON.stringify({
    name: post.name, handle: post.handle, avatar: post.avatar,
    grad: post.grad, bio: person?.bio || "Hello member",
    followers: person?.followers || 1200,
    following: person?.following || 300,
    posts: person?.posts || 42
  }).replace(/"/g, "&quot;");

  return `
    <div class="post-card" id="fpost-${post.id}">
      <div class="post-header">
        <div class="post-avatar" style="background:linear-gradient(${post.grad})"
          data-user="${userJSON}"
          onclick="openProfileModal(JSON.parse(this.dataset.user))">${post.avatar}</div>
        <div class="post-meta">
          <div class="post-name"
            onclick="openProfileModal(JSON.parse(this.closest('.post-card').querySelector('.post-avatar').dataset.user))">
            ${post.name}
          </div>
          <div class="post-info">${post.handle} · ${post.time}</div>
        </div>
        <button class="following-unfollow-btn" onclick="unfollowFromFeed('${post.handle}','${post.name}')">Following</button>
      </div>
      <div class="post-body">${bodyHTML}</div>
      <div class="post-stats">
        <span class="stat" id="flike-stat-${post.id}">${post.likes} Likes</span>
        <span class="stat" id="fcomment-stat-${post.id}" onclick="toggleFollowingComments(${post.id})">${post.comments} Comments</span>
        <span class="stat" id="frepost-stat-${post.id}">${post.reposts} Reposts</span>
      </div>
      <div class="post-actions">
        <button class="action-btn ${post.liked ? "liked" : ""}" id="flike-btn-${post.id}" onclick="toggleFollowingLike(${post.id})">
          <span>${likedIcon}</span> Like
        </button>
        <button class="action-btn" onclick="toggleFollowingComments(${post.id})"><span>💬</span> Comment</button>
        <button class="action-btn" onclick="followingRepost(${post.id})"><span>🔁</span> Repost</button>
        <button class="action-btn ${isSaved ? "bookmarked" : ""}" id="fbm-btn-${post.id}" onclick="toggleBookmark(${post.id})">
          <span>${isSaved ? "🔖" : "🏷️"}</span> ${isSaved ? "Saved" : "Save"}
        </button>
      </div>
      <div class="comments-section ${commentsOpen}" id="fcomments-${post.id}">
        ${commentsHTML}
        <div class="comment-input-row">
          <input class="comment-input" id="fcomment-input-${post.id}"
            placeholder="Write a comment…" onkeydown="handleFollowingCommentKey(event,${post.id})">
          <button class="send-btn" onclick="submitFollowingComment(${post.id})">➤</button>
        </div>
      </div>
    </div>`;
}

function toggleFollowingLike(id) {
  // Search followingPosts first, fall back to posts (safety net)
  const post = followingPosts.find(p => p.id === id) || posts.find(p => p.id === id);
  if (!post) return;
  post.liked  = !post.liked;
  post.likes += post.liked ? 1 : -1;
  const btn    = document.getElementById(`flike-btn-${id}`);
  const statEl = document.getElementById(`flike-stat-${id}`);
  if (btn)    { btn.classList.toggle("liked", post.liked); btn.innerHTML = `<span>${post.liked ? "❤️" : "🤍"}</span> Like`; }
  if (statEl) statEl.textContent = `${post.likes} Likes`;
  showToast(post.liked ? "Liked ❤️" : "Like removed");
}

function toggleFollowingComments(id) {
  const post = followingPosts.find(p => p.id === id);
  if (!post) return;
  post.showComments = !post.showComments;
  const section = document.getElementById(`fcomments-${id}`);
  if (section) {
    section.classList.toggle("open", post.showComments);
    if (post.showComments) setTimeout(() => document.getElementById(`fcomment-input-${id}`)?.focus(), 80);
  }
}

function submitFollowingComment(id) {
  const input = document.getElementById(`fcomment-input-${id}`);
  const text  = input?.value.trim();
  if (!text) return;
  const post = followingPosts.find(p => p.id === id) || posts.find(p => p.id === id);
  if (!post) return;
  const c = { name: ownProfile.name, avatar: ownProfile.avatar, grad: ownProfile.grad, text };
  post.commentList.push(c);
  post.comments++;
  const section = document.getElementById(`fcomments-${id}`);
  if (section) {
    section.querySelector(".comment-input-row").insertAdjacentHTML("beforebegin", `
      <div class="comment">
        <div class="comment-avatar" style="background:linear-gradient(${c.grad})">${c.avatar}</div>
        <div class="comment-bubble">
          <div class="comment-name">${c.name}</div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>`);
  }
  input.value = "";
  const statEl = document.getElementById(`fcomment-stat-${id}`);
  if (statEl) statEl.textContent = `${post.comments} Comments`;
  showToast("Comment posted 💬");
}

function handleFollowingCommentKey(e, id) {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submitFollowingComment(id); }
}

function followingRepost(id) {
  const post = followingPosts.find(p => p.id === id) || posts.find(p => p.id === id);
  if (!post) return;
  post.reposts++;
  const statEl = document.getElementById(`frepost-stat-${id}`);
  if (statEl) statEl.textContent = `${post.reposts} Reposts`;
  showToast("Reposted 🔁");
}

function unfollowFromFeed(handle, name) {
  const person = FOLLOWING_DATA.find(u => u.handle === handle);
  if (!person) return;
  person.followed = false;
  // Sync suggestions panel
  const sug = SUGGESTIONS_DATA.find(u => u.handle === handle);
  if (sug) sug.followed = false;
  // Sync profile modal follow state
  _followStates[handle] = false;
  // Update own profile following count
  ownProfile.following = Math.max(0, ownProfile.following - 1);
  showToast(`Unfollowed ${name}`);
  renderFollowingFeed();
}

// ─── HOME ─────────────────────────────────────────────────────────────────────

function renderHome() {
  document.getElementById("page-content").innerHTML = `
    <div class="feed">
      <div class="composer">
        <div class="composer-top">
          <div class="composer-avatar" style="background:linear-gradient(${ownProfile.grad})">${ownProfile.avatar}</div>
          <textarea class="composer-textarea" id="postInput" placeholder="What's on your mind, Alex?" rows="3"></textarea>
        </div>
        <div class="composer-divider"></div>
        <div class="composer-actions">
          <div class="composer-tools">
            <button class="tool-btn" onclick="showToast('Image upload coming soon!')">🖼️</button>
            <button class="tool-btn" onclick="showToast('GIF picker coming soon!')">🎞️</button>
            <button class="tool-btn" onclick="showToast('Emoji picker coming soon!')">😄</button>
            <button class="tool-btn" onclick="showToast('Polls coming soon!')">📊</button>
          </div>
          <button class="post-btn" onclick="submitPost()">Post</button>
        </div>
      </div>
      <div id="posts-container"></div>
    </div>`;
  if (activeTab === 'following') renderFollowingFeed();
  else renderForYouFeed();
}

// ─── POSTS ────────────────────────────────────────────────────────────────────

function renderPosts() {
  const c = document.getElementById("posts-container");
  if (!c) return;
  c.innerHTML = "";
  posts.forEach(p => c.insertAdjacentHTML("beforeend", buildPostHTML(p)));
}

function buildPostHTML(post, inBookmarks = false) {
  const likedIcon    = post.liked ? "❤️" : "🤍";
  const commentsOpen = post.showComments ? "open" : "";
  const imageHTML    = post.image ? `<div class="post-image">${post.image}</div>` : "";
  const isSaved      = bookmarks.has(post.id);

  const commentsHTML = post.commentList.map(c => `
    <div class="comment">
      <div class="comment-avatar" style="background:linear-gradient(${c.grad})">${c.avatar}</div>
      <div class="comment-bubble">
        <div class="comment-name">${c.name}</div>
        <div class="comment-text">${c.text}</div>
      </div>
    </div>`).join("");

  const bodyHTML = post.body.replace(/(#\w+)/g,
    `<span class="hashtag" onclick="handleHashtag('$1')">$1</span>`);

  const userJSON = JSON.stringify({
    name: post.name, handle: post.handle, avatar: post.avatar,
    grad: post.grad, bio: "Hello member", followers: 1200, following: 300, posts: 42
  }).replace(/"/g, "&quot;");

  return `
    <div class="post-card" id="post-${post.id}">
      <div class="post-header">
        <div class="post-avatar" style="background:linear-gradient(${post.grad})"
          data-user="${userJSON}"
          onclick="openProfileModal(JSON.parse(this.dataset.user))">${post.avatar}</div>
        <div class="post-meta">
          <div class="post-name"
            onclick="openProfileModal(JSON.parse(this.closest('.post-card').querySelector('.post-avatar').dataset.user))">
            ${post.name}
          </div>
          <div class="post-info">${post.handle} · ${post.time}</div>
        </div>
        <div class="post-more-wrap" style="position:relative">
          <button class="post-more" onclick="togglePostMenu(event,${post.id})">···</button>
          <div class="post-menu-popup" id="post-menu-${post.id}">
            <button onclick="toggleBookmark(${post.id})">${isSaved ? "🔖 Remove Bookmark" : "🔖 Bookmark"}</button>
            <button onclick="sharePost(${post.id})">🔗 Copy Link</button>
            <button onclick="showToast('Not interested in this post')">🚫 Not Interested</button>
            <button onclick="showToast('Post reported — thanks for the feedback')">🚩 Report Post</button>
            ${post.name === ownProfile.name ? `<button class="menu-danger" onclick="deletePost(${post.id})">🗑️ Delete Post</button>` : ""}
          </div>
        </div>
      </div>
      ${imageHTML}
      <div class="post-body">${bodyHTML}</div>
      <div class="post-stats">
        <span class="stat">${post.likes} Likes</span>
        <span class="stat" onclick="toggleComments(${post.id})">${post.comments} Comments</span>
        <span class="stat">${post.reposts} Reposts</span>
      </div>
      <div class="post-actions">
        <button class="action-btn ${post.liked ? "liked" : ""}" id="like-btn-${post.id}" onclick="toggleLike(${post.id})">
          <span>${likedIcon}</span> Like
        </button>
        <button class="action-btn" onclick="toggleComments(${post.id})"><span>💬</span> Comment</button>
        <button class="action-btn" onclick="repost(${post.id})"><span>🔁</span> Repost</button>
        <button class="action-btn ${isSaved ? "bookmarked" : ""}" id="bm-btn-${post.id}" onclick="toggleBookmark(${post.id})">
          <span>${isSaved ? "🔖" : "🏷️"}</span> ${isSaved ? "Saved" : "Save"}
        </button>
      </div>
      <div class="comments-section ${commentsOpen}" id="comments-${post.id}">
        ${commentsHTML}
        <div class="comment-input-row">
          <input class="comment-input" id="comment-input-${post.id}"
            placeholder="Write a comment…" onkeydown="handleCommentKey(event,${post.id})">
          <button class="send-btn" onclick="submitComment(${post.id})">➤</button>
        </div>
      </div>
    </div>`;
}

// ─── POST CONTEXT MENU ────────────────────────────────────────────────────────

function togglePostMenu(e, id) {
  e.stopPropagation();
  const menu = document.getElementById(`post-menu-${id}`);
  if (!menu) return;
  // Close any other open menus first
  document.querySelectorAll(".post-menu-popup.open").forEach(m => {
    if (m.id !== `post-menu-${id}`) m.classList.remove("open");
  });
  menu.classList.toggle("open");
  postMenuOpen = menu.classList.contains("open") ? id : null;
}

function closePostMenus() {
  document.querySelectorAll(".post-menu-popup.open").forEach(m => m.classList.remove("open"));
  postMenuOpen = null;
}

function deletePost(id) {
  closePostMenus();
  posts = posts.filter(p => p.id !== id);
  bookmarks.delete(id);
  const card = document.getElementById(`post-${id}`);
  if (card) { card.style.opacity = "0"; card.style.transform = "scale(0.95)"; card.style.transition = "all 0.2s"; setTimeout(() => card.remove(), 200); }
  showToast("Post deleted");
}

// ─── POST ACTIONS ─────────────────────────────────────────────────────────────

function toggleLike(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.liked  = !post.liked;
  post.likes += post.liked ? 1 : -1;
  const card   = document.getElementById(`post-${id}`);
  const btn    = document.getElementById(`like-btn-${id}`);
  btn.classList.toggle("liked", post.liked);
  btn.innerHTML = `<span>${post.liked ? "❤️" : "🤍"}</span> Like`;
  card.querySelector(".post-stats .stat").textContent = `${post.likes} Likes`;
  if (post.liked) showToast("Liked ❤️");
}

function toggleComments(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.showComments = !post.showComments;
  document.getElementById(`comments-${id}`).classList.toggle("open", post.showComments);
  if (post.showComments) setTimeout(() => document.getElementById(`comment-input-${id}`)?.focus(), 80);
}

function submitComment(id) {
  const input = document.getElementById(`comment-input-${id}`);
  const text  = input?.value.trim();
  if (!text) return;
  const post = posts.find(p => p.id === id);
  if (!post) return;
  const c = { name: ownProfile.name, avatar: ownProfile.avatar, grad: ownProfile.grad, text };
  post.commentList.push(c);
  post.comments++;
  document.getElementById(`comments-${id}`).querySelector(".comment-input-row")
    .insertAdjacentHTML("beforebegin", `
      <div class="comment">
        <div class="comment-avatar" style="background:linear-gradient(${c.grad})">${c.avatar}</div>
        <div class="comment-bubble">
          <div class="comment-name">${c.name}</div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>`);
  input.value = "";
  const stats = document.getElementById(`post-${id}`).querySelectorAll(".post-stats .stat");
  if (stats[1]) stats[1].textContent = `${post.comments} Comments`;
  showToast("Comment posted 💬");
}

function handleCommentKey(e, id) {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submitComment(id); }
}

function repost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.reposts++;
  const card = document.getElementById(`post-${id}`);
  if (card) {
    const stats = card.querySelectorAll(".post-stats .stat");
    if (stats[2]) stats[2].textContent = `${post.reposts} Reposts`;
  }
  showToast("Reposted 🔁");
}

function sharePost(id) {
  closePostMenus();
  showToast("Link copied 🔗");
}

// ─── BOOKMARKS ────────────────────────────────────────────────────────────────

function toggleBookmark(id) {
  closePostMenus();
  // Search both the main feed and the following feed
  const post = posts.find(p => p.id === id) || followingPosts.find(p => p.id === id);
  if (!post) return;

  if (bookmarks.has(id)) {
    bookmarks.delete(id);
    showToast("Removed from Saved");
  } else {
    bookmarks.add(id);
    showToast("Post saved 🔖");
  }
  const isSaved = bookmarks.has(id);

  // Update main feed save button
  const mainBtn = document.getElementById(`bm-btn-${id}`);
  if (mainBtn) {
    mainBtn.classList.toggle("bookmarked", isSaved);
    mainBtn.innerHTML = `<span>${isSaved ? "🔖" : "🏷️"}</span> ${isSaved ? "Saved" : "Save"}`;
  }
  // Update following feed save button
  const followBtn = document.getElementById(`fbm-btn-${id}`);
  if (followBtn) {
    followBtn.classList.toggle("bookmarked", isSaved);
    followBtn.innerHTML = `<span>${isSaved ? "🔖" : "🏷️"}</span> ${isSaved ? "Saved" : "Save"}`;
  }
  // Update ··· menu label
  const menuBtn = document.querySelector(`#post-menu-${id} button:first-child`);
  if (menuBtn) menuBtn.textContent = isSaved ? "🔖 Remove Bookmark" : "🔖 Bookmark";

  if (activePage === "saved") renderBookmarks();
}

function renderBookmarks() {
  // Include saved posts from both the main feed and following feed
  const allPosts   = [...posts, ...followingPosts];
  const savedPosts = allPosts.filter(p => bookmarks.has(p.id));

  const filters = [
    { id: "all", label: "All" },
    { id: "liked", label: "Liked by me" },
    { id: "recent", label: "Most Recent" },
  ];

  const filterHTML = filters.map(f => `
    <button class="bm-filter-btn ${activeBookmarkFilter === f.id ? "active" : ""}"
      onclick="setBookmarkFilter('${f.id}')">${f.label}</button>`).join("");

  let filtered = [...savedPosts];
  if (activeBookmarkFilter === "liked")  filtered = filtered.filter(p => p.liked);
  if (activeBookmarkFilter === "recent") filtered = filtered.slice().reverse();

  const postsHTML = filtered.length
    ? filtered.map(p => buildPostHTML(p, true)).join("")
    : `<div class="empty-state-bm">
        <div class="empty-bm-icon">🔖</div>
        <div class="empty-bm-title">${activeBookmarkFilter === "liked" ? "No liked posts saved" : "Nothing saved yet"}</div>
        <div class="empty-bm-sub">Tap the Save button on any post to bookmark it here.</div>
      </div>`;

  document.getElementById("page-content").innerHTML = `
    <div class="feed">
      <div class="bm-header">
        <div class="bm-count">${savedPosts.length} saved post${savedPosts.length !== 1 ? "s" : ""}</div>
        ${savedPosts.length > 0 ? `<button class="bm-clear-btn" onclick="clearAllBookmarks()">Clear all</button>` : ""}
      </div>
      <div class="bm-filters">${filterHTML}</div>
      <div id="bm-posts">${postsHTML}</div>
    </div>`;
}

function setBookmarkFilter(filter) {
  activeBookmarkFilter = filter;
  renderBookmarks();
}

function clearAllBookmarks() {
  if (!confirm("Remove all saved posts?")) return;
  bookmarks.clear();
  renderBookmarks();
  showToast("Cleared all bookmarks");
}

// ─── SETTINGS PAGE ────────────────────────────────────────────────────────────

// Which section is active in the settings sidebar
let settingsSection = "appearance";

// Muted words list
let mutedWords = [];

// Connected accounts state
let connectedAccounts = {
  github:  { connected: true,  username: "alexrivera" },
  google:  { connected: true,  username: "alex@example.com" },
  twitter: { connected: false, username: "" },
  linkedin:{ connected: false, username: "" },
};

// 2FA state
let twoFAEnabled = false;
let twoFAMethod  = "app"; // "app" | "sms"

function renderSettings(section) {
  if (section) settingsSection = section;

  const sections = [
    { id: "appearance",    icon: "🎨", label: "Appearance"       },
    { id: "notifications", icon: "🔔", label: "Notifications"    },
    { id: "account",       icon: "👤", label: "Account"          },
    { id: "security",      icon: "🔒", label: "Security"         },
    { id: "privacy",       icon: "🛡️", label: "Privacy & Safety" },
    { id: "accessibility", icon: "♿", label: "Accessibility"    },
    { id: "data",          icon: "📦", label: "Data & Storage"   },
  ];

  const navHTML = sections.map(s => `
    <button class="settings-nav-item ${settingsSection === s.id ? "active" : ""}"
      onclick="renderSettings('${s.id}')">
      <span class="settings-nav-icon">${s.icon}</span>
      <span>${s.label}</span>
    </button>`).join("");

  const panelHTML = buildSettingsPanel(settingsSection);

  document.getElementById("page-content").innerHTML = `
    <div class="settings-layout">
      <nav class="settings-sidebar">
        <div class="settings-sidebar-title">Settings</div>
        ${navHTML}
      </nav>
      <div class="settings-main" id="settings-panel">
        ${panelHTML}
      </div>
    </div>`;
}

function buildSettingsPanel(section) {
  const toggle = (key, label, desc, extra = "") => `
    <div class="settings-row">
      <div class="settings-row-text">
        <div class="settings-row-label">${label}</div>
        ${desc ? `<div class="settings-row-desc">${desc}</div>` : ""}
        ${extra}
      </div>
      <label class="toggle-switch">
        <input type="checkbox" ${appSettings[key] ? "checked" : ""} onchange="toggleSetting('${key}',this.checked)">
        <span class="toggle-slider"></span>
      </label>
    </div>`;

  if (section === "appearance") {
    const accentOptions = [
      { color: "#7c5cfc", label: "Violet"  },
      { color: "#fc5c8a", label: "Rose"    },
      { color: "#5cf0c8", label: "Teal"    },
      { color: "#f7c948", label: "Amber"   },
      { color: "#5c9cfc", label: "Sky"     },
      { color: "#fc9c5c", label: "Peach"   },
      { color: "#c05cfc", label: "Orchid"  },
      { color: "#5cfc7c", label: "Lime"    },
    ];
    const swatches = accentOptions.map(a => `
      <button class="accent-swatch ${appSettings.accentColor === a.color ? "active" : ""}"
        style="background:${a.color}" title="${a.label}"
        onclick="setAccentColor('${a.color}')">
        ${appSettings.accentColor === a.color ? "✓" : ""}
      </button>`).join("");

    const themePreview = (id, label, icon, bg, surface, text) => `
      <button class="theme-preview-card ${appSettings.theme === id ? "active" : ""}"
        onclick="setTheme('${id}')" style="--prev-bg:${bg};--prev-surface:${surface};--prev-text:${text}">
        <div class="theme-preview-mock">
          <div class="theme-preview-bar"></div>
          <div class="theme-preview-line long"></div>
          <div class="theme-preview-line short"></div>
        </div>
        <div class="theme-preview-label">${icon} ${label}</div>
        ${appSettings.theme === id ? `<div class="theme-preview-check">✓</div>` : ""}
      </button>`;

    return `
      <div class="settings-panel-title">Appearance</div>

      <div class="settings-section-label">Theme</div>
      <div class="theme-preview-row">
        ${themePreview("dark",  "Dark",  "🌙", "#0d0d10", "#16161c", "#f0f0f5")}
        ${themePreview("dim",   "Dim",   "🌗", "#1a1a22", "#22222e", "#e8e8f0")}
        ${themePreview("light", "Light", "☀️", "#f5f5f8", "#ffffff", "#111118")}
      </div>

      <div class="settings-section-label" style="margin-top:24px">Accent Colour</div>
      <div class="accent-grid">${swatches}</div>
      <div class="accent-preview-bar" style="background:linear-gradient(135deg,${appSettings.accentColor},${appSettings.accentColor}99)">
        Preview — buttons, links, active states will use this colour
      </div>

      <div class="settings-section-label" style="margin-top:24px">Font Size</div>
      <div class="font-slider-row">
        <span class="font-slider-a small">A</span>
        <div class="font-slider-track">
          <input type="range" min="0" max="2" step="1"
            value="${["small","medium","large"].indexOf(appSettings.fontSize)}"
            class="font-slider" oninput="setFontSizeFromSlider(this.value)">
          <div class="font-slider-labels">
            <span>Small</span><span>Medium</span><span>Large</span>
          </div>
        </div>
        <span class="font-slider-a large">A</span>
      </div>

      <div class="settings-section-label" style="margin-top:24px">Layout</div>
      <div class="settings-card-inner">
        ${toggle("compactMode",  "Compact Mode",   "Reduce spacing between posts for a denser feed")}
        ${toggle("reduceMotion", "Reduce Motion",  "Turn off animations and transitions")}
      </div>

      <div class="settings-section-label" style="margin-top:24px">Feed Density Preview</div>
      <div class="density-preview ${appSettings.compactMode ? "compact" : ""}">
        <div class="density-post"><div class="density-avatar"></div><div class="density-lines"><div></div><div></div></div></div>
        <div class="density-post"><div class="density-avatar"></div><div class="density-lines"><div></div><div></div></div></div>
        <div class="density-post"><div class="density-avatar"></div><div class="density-lines"><div></div><div></div></div></div>
      </div>`;
  }

  if (section === "notifications") {
    return `
      <div class="settings-panel-title">Notifications</div>

      <div class="settings-section-label">Activity on your posts</div>
      <div class="settings-card-inner">
        ${toggle("notif_likes",    "❤️ Likes",    "When someone likes your post")}
        ${toggle("notif_comments", "💬 Comments", "When someone comments")}
        ${toggle("notif_reposts",  "🔁 Reposts",  "When someone reposts your content")}
        ${toggle("notif_mentions", "📣 Mentions", "When someone tags you")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Account activity</div>
      <div class="settings-card-inner">
        ${toggle("notif_follows",  "👤 New Followers",   "When someone follows you")}
        ${toggle("notif_dms",      "✉️ Direct Messages", "New message notifications")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Delivery</div>
      <div class="settings-card-inner">
        ${toggle("notif_push",  "📲 Push Notifications", "Browser and mobile alerts")}
        ${toggle("notif_email", "📧 Email Digest",       "Weekly summary of your activity")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Quiet Hours</div>
      <div class="settings-card-inner">
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Do Not Disturb</div>
            <div class="settings-row-desc">Silence notifications between set hours</div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="dnd-toggle" onchange="toggleDND(this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div class="quiet-hours-row" id="quiet-hours" style="display:none">
          <div class="quiet-time-field">
            <label>From</label>
            <input type="time" class="settings-time-input" value="22:00">
          </div>
          <div class="quiet-hours-dash">→</div>
          <div class="quiet-time-field">
            <label>Until</label>
            <input type="time" class="settings-time-input" value="08:00">
          </div>
        </div>
      </div>`;
  }

  if (section === "account") {
    return `
      <div class="settings-panel-title">Account</div>

      <div class="settings-section-label">Identity</div>
      <div class="settings-card-inner">
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Display Name</div>
            <div class="settings-row-desc">${ownProfile.name}</div>
          </div>
          <button class="settings-action-btn" onclick="openEditProfile()">Edit Profile</button>
        </div>
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Username</div>
            <div class="settings-row-desc">${ownProfile.handle}</div>
          </div>
          <button class="settings-action-btn" onclick="openEditProfile()">Change</button>
        </div>
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Email Address</div>
            <div class="settings-row-desc">alex@example.com · <span style="color:var(--accent3)">Verified ✓</span></div>
          </div>
          <button class="settings-action-btn" onclick="openChangeEmail()">Change</button>
        </div>
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Phone Number</div>
            <div class="settings-row-desc">Not added</div>
          </div>
          <button class="settings-action-btn" onclick="showToast('Phone number setup coming soon')">Add</button>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Connected Accounts</div>
      <div class="settings-card-inner">
        ${buildConnectedAccounts()}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Sessions</div>
      <div class="settings-card-inner">
        <div class="session-row">
          <div class="session-device">💻</div>
          <div class="session-info">
            <div class="session-name">Chrome on macOS</div>
            <div class="session-meta">Current session · Bengaluru, IN</div>
          </div>
          <span class="session-badge current">Current</span>
        </div>
        <div class="session-row">
          <div class="session-device">📱</div>
          <div class="session-info">
            <div class="session-name">Safari on iPhone 15</div>
            <div class="session-meta">2 days ago · Bengaluru, IN</div>
          </div>
          <button class="settings-action-btn danger-sm" onclick="showToast('Session revoked')">Revoke</button>
        </div>
        <div class="settings-row" style="border-top:1px solid var(--border);padding-top:14px;margin-top:4px">
          <div class="settings-row-text">
            <div class="settings-row-label">Sign out everywhere</div>
            <div class="settings-row-desc">Revoke all other active sessions</div>
          </div>
          <button class="settings-action-btn" onclick="showToast('All other sessions revoked ✓')">Sign Out All</button>
        </div>
      </div>`;
  }

  if (section === "security") {
    return `
      <div class="settings-panel-title">Security</div>

      <div class="settings-section-label">Password</div>
      <div class="settings-card-inner">
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Change Password</div>
            <div class="settings-row-desc">Last changed 3 months ago</div>
          </div>
          <button class="settings-action-btn" onclick="openChangePassword()">Change</button>
        </div>
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Password strength</div>
            <div class="settings-row-desc">
              <div class="pw-health-bar">
                <div class="pw-health-fill" style="width:75%;background:#f7c948"></div>
              </div>
              <span style="color:#f7c948;font-size:12px">Good — consider adding a special character</span>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Two-Factor Authentication</div>
      <div class="settings-card-inner">
        <div class="tfa-status-row">
          <div class="tfa-status-icon ${twoFAEnabled ? "enabled" : ""}">
            ${twoFAEnabled ? "🔐" : "🔓"}
          </div>
          <div>
            <div class="settings-row-label">${twoFAEnabled ? "2FA is enabled" : "2FA is not enabled"}</div>
            <div class="settings-row-desc">${twoFAEnabled ? `Active via ${twoFAMethod === "app" ? "Authenticator App" : "SMS"}` : "Add an extra layer of security to your account"}</div>
          </div>
          <button class="settings-action-btn ${twoFAEnabled ? "" : "accent-btn"}"
            onclick="toggle2FA()">
            ${twoFAEnabled ? "Disable" : "Enable 2FA"}
          </button>
        </div>

        ${twoFAEnabled ? `
        <div class="settings-section-label" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">Method</div>
        <div class="tfa-methods">
          <button class="tfa-method-btn ${twoFAMethod === "app" ? "active" : ""}" onclick="set2FAMethod('app')">
            <span class="tfa-icon">📱</span>
            <span>Authenticator App</span>
            ${twoFAMethod === "app" ? `<span class="tfa-active-dot"></span>` : ""}
          </button>
          <button class="tfa-method-btn ${twoFAMethod === "sms" ? "active" : ""}" onclick="set2FAMethod('sms')">
            <span class="tfa-icon">💬</span>
            <span>SMS / Text</span>
            ${twoFAMethod === "sms" ? `<span class="tfa-active-dot"></span>` : ""}
          </button>
        </div>
        <div class="settings-row" style="margin-top:8px">
          <div class="settings-row-text">
            <div class="settings-row-label">Backup Codes</div>
            <div class="settings-row-desc">8 codes remaining</div>
          </div>
          <button class="settings-action-btn" onclick="showBackupCodes()">View Codes</button>
        </div>` : ""}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Login Activity</div>
      <div class="settings-card-inner">
        <div class="login-event">
          <span class="login-event-icon success">✓</span>
          <div>
            <div class="login-event-label">Successful login</div>
            <div class="login-event-meta">Chrome · Bengaluru, IN · Just now</div>
          </div>
        </div>
        <div class="login-event">
          <span class="login-event-icon success">✓</span>
          <div>
            <div class="login-event-label">Successful login</div>
            <div class="login-event-meta">iPhone Safari · Bengaluru, IN · 2 days ago</div>
          </div>
        </div>
        <div class="login-event">
          <span class="login-event-icon warn">!</span>
          <div>
            <div class="login-event-label">Failed login attempt</div>
            <div class="login-event-meta">Unknown device · Mumbai, IN · 1 week ago</div>
          </div>
        </div>
      </div>`;
  }

  if (section === "privacy") {
    return `
      <div class="settings-panel-title">Privacy & Safety</div>

      <div class="settings-section-label">Visibility</div>
      <div class="settings-card-inner">
        ${toggle("isPrivate", "Private Account", "Only approved followers can see your posts",
          ownProfile.isPrivate ? `<div class="privacy-tag">🔒 Private</div>` : `<div class="privacy-tag open">🌐 Public</div>`)}
        ${toggle("hideFollowers", "Hide Follower Count", "Others won't see your follower count")}
        ${toggle("hideOnline",    "Hide Online Status",  "Don't show when you're active")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Interactions</div>
      <div class="settings-card-inner">
        ${toggle("allowComments", "Allow Comments",  "Let others comment on your posts")}
        ${toggle("allowReposts",  "Allow Reposts",   "Let others repost your content")}
        ${toggle("allowTagging",  "Allow Tagging",   "Let others mention or tag you")}
        ${toggle("allowDMs",      "Message Requests","Accept DMs from non-followers")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Muted Words</div>
      <div class="settings-card-inner">
        <div class="muted-words-input-row">
          <input class="settings-text-input" id="muted-word-input"
            placeholder="Add a word or phrase…" onkeydown="handleMutedWordKey(event)">
          <button class="settings-action-btn accent-btn" onclick="addMutedWord()">Add</button>
        </div>
        <div class="muted-words-list" id="muted-words-list">
          ${buildMutedWordsList()}
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Blocked Accounts</div>
      <div class="settings-card-inner">
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Blocked users</div>
            <div class="settings-row-desc">0 accounts blocked</div>
          </div>
          <button class="settings-action-btn" onclick="showToast('No accounts blocked')">Manage</button>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Search & Discovery</div>
      <div class="settings-card-inner">
        ${toggle("searchable", "Searchable by Email",   "People can find you using your email")}
        ${toggle("suggestMe",  "Suggest My Account",    "Appear in 'Who to Follow' suggestions")}
      </div>`;
  }

  if (section === "accessibility") {
    return `
      <div class="settings-panel-title">Accessibility & Language</div>

      <div class="settings-section-label">Language & Region</div>
      <div class="settings-card-inner">
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Display Language</div>
            <div class="settings-row-desc">Language for menus and interface</div>
          </div>
          <select class="settings-select" onchange="setSetting('language',this.value)">
            <option value="en" ${appSettings.language==="en"?"selected":""}>🇬🇧 English</option>
            <option value="es" ${appSettings.language==="es"?"selected":""}>🇪🇸 Español</option>
            <option value="fr" ${appSettings.language==="fr"?"selected":""}>🇫🇷 Français</option>
            <option value="de" ${appSettings.language==="de"?"selected":""}>🇩🇪 Deutsch</option>
            <option value="ja" ${appSettings.language==="ja"?"selected":""}>🇯🇵 日本語</option>
            <option value="pt" ${appSettings.language==="pt"?"selected":""}>🇧🇷 Português</option>
            <option value="hi" ${appSettings.language==="hi"?"selected":""}>🇮🇳 हिंदी</option>
            <option value="zh" ${appSettings.language==="zh"?"selected":""}>🇨🇳 中文</option>
          </select>
        </div>
        <div class="settings-row">
          <div class="settings-row-text">
            <div class="settings-row-label">Date & Time Format</div>
            <div class="settings-row-desc">How dates and times are displayed</div>
          </div>
          <select class="settings-select" onchange="setSetting('dateFormat',this.value)">
            <option value="relative">Relative (2m ago)</option>
            <option value="short">Short (Dec 14)</option>
            <option value="full">Full (14 Dec 2024)</option>
          </select>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Reading & Vision</div>
      <div class="settings-card-inner">
        ${toggle("reduceMotion",  "Reduce Motion",     "Minimise animations and transitions")}
        ${toggle("highContrast",  "High Contrast",     "Increase colour contrast for readability")}
        ${toggle("largeTargets",  "Larger Tap Targets","Make buttons and links easier to tap")}
        ${toggle("altText",       "Always Show Alt Text","Display image descriptions automatically")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Feed & Media</div>
      <div class="settings-card-inner">
        ${toggle("autoplay",      "Autoplay Videos",   "Automatically play videos while scrolling")}
        ${toggle("dataSaver",     "Data Saver",        "Load lower-quality images to save data")}
        ${toggle("showSensitive", "Show Sensitive Content", "Un-blur marked sensitive posts")}
      </div>

      <div class="settings-section-label" style="margin-top:20px">Keyboard Shortcuts</div>
      <div class="settings-card-inner">
        <div class="shortcuts-grid">
          <div class="shortcut-row"><kbd>N</kbd><span>New post</span></div>
          <div class="shortcut-row"><kbd>/</kbd><span>Focus search</span></div>
          <div class="shortcut-row"><kbd>Esc</kbd><span>Close modal</span></div>
          <div class="shortcut-row"><kbd>G H</kbd><span>Go Home</span></div>
          <div class="shortcut-row"><kbd>G N</kbd><span>Go Notifications</span></div>
          <div class="shortcut-row"><kbd>G M</kbd><span>Go Messages</span></div>
          <div class="shortcut-row"><kbd>?</kbd><span>Show shortcuts</span></div>
        </div>
      </div>`;
  }

  if (section === "data") {
    return `
      <div class="settings-panel-title">Data & Storage</div>

      <div class="settings-section-label">Your Data</div>
      <div class="settings-card-inner">
        <div class="data-stats-grid">
          <div class="data-stat-card">
            <div class="data-stat-num">87</div>
            <div class="data-stat-label">Posts</div>
          </div>
          <div class="data-stat-card">
            <div class="data-stat-num">1.2K</div>
            <div class="data-stat-label">Followers</div>
          </div>
          <div class="data-stat-card">
            <div class="data-stat-num">312</div>
            <div class="data-stat-label">Following</div>
          </div>
          <div class="data-stat-card">
            <div class="data-stat-num">${bookmarks.size}</div>
            <div class="data-stat-label">Saved</div>
          </div>
        </div>
        <div class="settings-row" style="margin-top:8px">
          <div class="settings-row-text">
            <div class="settings-row-label">Download Your Data</div>
            <div class="settings-row-desc">Get a copy of your posts, messages, followers and settings</div>
          </div>
          <button class="settings-action-btn accent-btn" onclick="requestDataExport()">Export</button>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Storage & Cache</div>
      <div class="settings-card-inner">
        <div class="storage-bar-wrap">
          <div class="storage-label-row">
            <span>Cache used</span><span class="storage-amount">24 MB</span>
          </div>
          <div class="storage-bar">
            <div class="storage-fill media" style="width:55%" title="Media cache"></div>
            <div class="storage-fill posts" style="width:25%" title="Posts cache"></div>
            <div class="storage-fill other" style="width:10%" title="Other"></div>
          </div>
          <div class="storage-legend">
            <span><span class="legend-dot media"></span>Media</span>
            <span><span class="legend-dot posts"></span>Posts</span>
            <span><span class="legend-dot other"></span>Other</span>
          </div>
        </div>
        <div class="settings-row" style="margin-top:8px">
          <div class="settings-row-text">
            <div class="settings-row-label">Clear Cache</div>
            <div class="settings-row-desc">Free up space by clearing temporary files</div>
          </div>
          <button class="settings-action-btn" onclick="clearCache()">Clear</button>
        </div>
      </div>

      <div class="settings-section-label" style="margin-top:20px">Analytics & Tracking</div>
      <div class="settings-card-inner">
        ${toggle("personalizedAds", "Personalised Ads",      "Use your activity to show relevant ads")}
        ${toggle("analyticsShare",  "Analytics Sharing",     "Help improve Hello with anonymous usage data")}
        ${toggle("thirdParty",      "Third-party Cookies",   "Allow cross-site tracking cookies")}
      </div>`;
  }

  return `<div class="settings-panel-title">${section}</div><p style="color:var(--text3)">Coming soon.</p>`;
}

// ─── SETTINGS HELPERS ─────────────────────────────────────────────────────────

function buildConnectedAccounts() {
  const accounts = [
    { id: "github",   icon: "🐙", label: "GitHub",   color: "#5c9cfc" },
    { id: "google",   icon: "🌐", label: "Google",   color: "#fc5c5c" },
    { id: "twitter",  icon: "𝕏",  label: "Twitter/X",color: "#555568" },
    { id: "linkedin", icon: "💼", label: "LinkedIn", color: "#5c9cfc" },
  ];
  return accounts.map(a => {
    const state = connectedAccounts[a.id];
    return `
      <div class="settings-row">
        <div class="connected-account-info">
          <span class="connected-icon" style="color:${a.color}">${a.icon}</span>
          <div>
            <div class="settings-row-label">${a.label}</div>
            <div class="settings-row-desc">${state.connected ? state.username : "Not connected"}</div>
          </div>
        </div>
        <button class="settings-action-btn ${state.connected ? "" : "accent-btn"}"
          onclick="toggleConnectedAccount('${a.id}')">
          ${state.connected ? "Disconnect" : "Connect"}
        </button>
      </div>`;
  }).join("");
}

function buildMutedWordsList() {
  if (!mutedWords.length) return `<div class="muted-empty">No muted words yet</div>`;
  return mutedWords.map((w, i) => `
    <div class="muted-word-chip">
      <span>${w}</span>
      <button onclick="removeMutedWord(${i})">✕</button>
    </div>`).join("");
}

function toggleConnectedAccount(id) {
  const acc = connectedAccounts[id];
  acc.connected = !acc.connected;
  if (acc.connected) {
    const names = { github: "github/alexrivera", google: "alex@example.com", twitter: "@alexrivera", linkedin: "in/alexrivera" };
    acc.username = names[id];
    showToast(`Connected to ${id} ✓`);
  } else {
    acc.username = "";
    showToast(`Disconnected from ${id}`);
  }
  renderSettings("account");
}

function toggleDND(val) {
  const row = document.getElementById("quiet-hours");
  if (row) row.style.display = val ? "flex" : "none";
  showToast(val ? "Do Not Disturb on" : "Do Not Disturb off");
}

function addMutedWord() {
  const input = document.getElementById("muted-word-input");
  const word  = input?.value.trim();
  if (!word) return;
  if (mutedWords.includes(word)) { showToast("Word already muted"); return; }
  mutedWords.push(word);
  input.value = "";
  const list = document.getElementById("muted-words-list");
  if (list) list.innerHTML = buildMutedWordsList();
  showToast(`"${word}" muted ✓`);
}

function removeMutedWord(i) {
  const word = mutedWords[i];
  mutedWords.splice(i, 1);
  const list = document.getElementById("muted-words-list");
  if (list) list.innerHTML = buildMutedWordsList();
  showToast(`"${word}" unmuted`);
}

function handleMutedWordKey(e) {
  if (e.key === "Enter") addMutedWord();
}

function toggle2FA() {
  twoFAEnabled = !twoFAEnabled;
  showToast(twoFAEnabled ? "Two-factor authentication enabled 🔐" : "Two-factor authentication disabled");
  renderSettings("security");
}

function set2FAMethod(method) {
  twoFAMethod = method;
  showToast(`2FA method: ${method === "app" ? "Authenticator App" : "SMS"}`);
  renderSettings("security");
}

function showBackupCodes() {
  const codes = ["8f2k-9x1p","3m7n-6qr2","p4k1-9wz8","x2j5-4ts6","9c8b-3vq7","7y2a-1nm5","6r9f-8dx3","5p3k-2wy9"];
  alert("Backup codes (save these somewhere safe):\n\n" + codes.join("\n"));
}

function requestDataExport() {
  showToast("Export request submitted — check alex@example.com in 24h 📦");
}

function clearCache() {
  showToast("Cache cleared (24 MB freed) ✓");
}

function openChangeEmail() {
  const newEmail = prompt("Enter your new email address:");
  if (newEmail && newEmail.includes("@")) {
    showToast(`Verification sent to ${newEmail}`);
  }
}


// ─── SETTINGS ACTIONS ─────────────────────────────────────────────────────────

function toggleSetting(key, value) {
  appSettings[key] = value;
  // Some toggles have live effects
  if (key === "compactMode") {
    document.body.classList.toggle("compact-mode", value);
  }
  if (key === "reduceMotion") {
    document.body.classList.toggle("reduce-motion", value);
  }
  if (key === "highContrast") {
    document.body.classList.toggle("high-contrast", value);
  }
  showToast(value ? "Enabled ✓" : "Disabled");
}

function setSetting(key, value) {
  appSettings[key] = value;
}

function setTheme(theme) {
  appSettings.theme = theme;
  const root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--bg",        "#f5f5f8");
    root.style.setProperty("--surface",   "#ffffff");
    root.style.setProperty("--surface2",  "#f0f0f5");
    root.style.setProperty("--border",    "#e0e0ea");
    root.style.setProperty("--text",      "#111118");
    root.style.setProperty("--text2",     "#555570");
    root.style.setProperty("--text3",     "#9999b0");
    root.style.setProperty("--card-hover","#eaeaf5");
  } else if (theme === "dim") {
    root.style.setProperty("--bg",        "#1a1a22");
    root.style.setProperty("--surface",   "#22222e");
    root.style.setProperty("--surface2",  "#2a2a38");
    root.style.setProperty("--border",    "#35354a");
    root.style.setProperty("--text",      "#e8e8f0");
    root.style.setProperty("--text2",     "#8888a8");
    root.style.setProperty("--text3",     "#5a5a78");
    root.style.setProperty("--card-hover","#252535");
  } else {
    root.style.setProperty("--bg",        "#0d0d10");
    root.style.setProperty("--surface",   "#16161c");
    root.style.setProperty("--surface2",  "#1e1e26");
    root.style.setProperty("--border",    "#2a2a35");
    root.style.setProperty("--text",      "#f0f0f5");
    root.style.setProperty("--text2",     "#8888a0");
    root.style.setProperty("--text3",     "#555568");
    root.style.setProperty("--card-hover","#1c1c25");
  }
  renderSettings("appearance");
  showToast(`${theme.charAt(0).toUpperCase()+theme.slice(1)} theme ✓`);
}

function setAccentColor(color) {
  appSettings.accentColor = color;
  document.documentElement.style.setProperty("--accent", color);
  renderSettings("appearance");
  showToast("Accent colour updated ✓");
}

function setFontSize(size) {
  appSettings.fontSize = size;
  const sizes = { small: "13px", medium: "15px", large: "17px" };
  document.body.style.fontSize = sizes[size];
  renderSettings("appearance");
  showToast(`Font: ${size}`);
}

function setFontSizeFromSlider(val) {
  const sizes = ["small", "medium", "large"];
  setFontSize(sizes[parseInt(val)] || "medium");
}

function showShortcutsModal() {
  renderSettings("accessibility");
}


function handleHashtag(tag) { showToast(`Exploring ${tag} 🔍`); }

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────

function renderNotifications() {
  const unread = NOTIF_DATA.filter(n => !n.read);
  const read   = NOTIF_DATA.filter(n =>  n.read);

  const buildRow = n => `
    <div class="notif-row ${n.read ? "" : "notif-unread"}" onclick="markNotifRead(${n.id})">
      <div class="notif-avatar-wrap">
        <div class="notif-avatar" style="background:linear-gradient(${n.grad})">${n.avatar}</div>
        <span class="notif-type">${NOTIF_ICONS[n.type] || "🔔"}</span>
      </div>
      <div class="notif-body">
        <span class="notif-name">${n.name}</span> ${n.text}
        ${n.preview ? `<div class="notif-preview">${n.preview}</div>` : ""}
        <div class="notif-time">${n.time}</div>
      </div>
      ${n.read ? "" : `<span class="notif-dot"></span>`}
    </div>`;

  document.getElementById("page-content").innerHTML = `
    <div class="feed">
      <div class="notif-header">
        <div class="section-heading" style="margin:0">New</div>
        <button class="mark-all-btn" onclick="markAllRead()">Mark all read</button>
      </div>
      <div id="notif-new">
        ${unread.length ? unread.map(buildRow).join("") : `<p class="empty-note">You're all caught up 🎉</p>`}
      </div>
      <div class="section-heading" style="margin-top:24px">Earlier</div>
      <div>${read.map(buildRow).join("")}</div>
    </div>`;
}

function markNotifRead(id) {
  const n = NOTIF_DATA.find(x => x.id === id);
  if (!n || n.read) return;
  n.read = true;
  renderNotifications();
  syncNotifBadge();
}

function markAllRead() {
  NOTIF_DATA.forEach(n => n.read = true);
  renderNotifications();
  syncNotifBadge();
  showToast("All caught up ✓");
}

function syncNotifBadge() {
  const count = NOTIF_DATA.filter(n => !n.read).length;
  const badge = document.querySelector('[data-page="notifications"] .badge');
  if (!badge) return;
  badge.textContent   = count;
  badge.style.display = count ? "inline" : "none";
}

// ─── MESSAGES ─────────────────────────────────────────────────────────────────

function syncMsgBadge() {
  const totalUnread = MSG_DATA.reduce((sum, c) => sum + (c.unread || 0), 0);
  const badge = document.querySelector('[data-page="messages"] .badge');
  if (totalUnread > 0) {
    if (!badge) {
      const nav = document.querySelector('[data-page="messages"]');
      if (nav) {
        const b = document.createElement("span");
        b.className = "badge";
        b.style.background = "var(--accent2)";
        b.textContent = totalUnread;
        nav.appendChild(b);
      }
    } else {
      badge.textContent = totalUnread;
      badge.style.display = "inline";
    }
  } else {
    if (badge) badge.style.display = "none";
  }
}

function renderMessages(convId) {
  if (convId !== undefined) activeConvId = convId;
  const conv = MSG_DATA.find(c => c.id === activeConvId) || MSG_DATA[0];
  activeConvId = conv.id;
  conv.unread  = 0;   // mark this conversation as read

  const convListHTML = MSG_DATA.map(c => `
    <div class="conv-item ${c.id === activeConvId ? "conv-active" : ""}" onclick="renderMessages(${c.id})">
      <div class="conv-avatar-wrap">
        <div class="conv-avatar" style="background:linear-gradient(${c.grad})">${c.avatar}</div>
        ${c.online ? `<span class="online-dot"></span>` : ""}
      </div>
      <div class="conv-meta">
        <div class="conv-top">
          <span class="conv-name">${c.name}</span>
          <span class="conv-time">${c.thread.at(-1)?.time ?? ""}</span>
        </div>
        <div class="conv-preview ${c.unread ? "conv-preview-unread" : ""}">${c.thread.at(-1)?.text ?? ""}</div>
      </div>
      ${c.unread ? `<span class="conv-badge">${c.unread}</span>` : ""}
    </div>`).join("");

  const threadHTML = conv.thread.map(m => `
    <div class="bubble-row ${m.from === "me" ? "bubble-row-me" : "bubble-row-them"}">
      ${m.from === "them" ? `<div class="bubble-avatar" style="background:linear-gradient(${conv.grad})">${conv.avatar}</div>` : ""}
      <div class="bubble ${m.from === "me" ? "bubble-me" : "bubble-them"}">
        ${m.text}
        <span class="bubble-time">${m.time}</span>
      </div>
    </div>`).join("");

  document.getElementById("page-content").innerHTML = `
    <div class="messages-wrap">
      <div class="conv-list">${convListHTML}</div>
      <div class="chat-area">
        <div class="chat-header">
          <div class="chat-header-avatar" style="background:linear-gradient(${conv.grad})">${conv.avatar}</div>
          <div>
            <div class="chat-header-name">${conv.name}</div>
            <div class="chat-header-status">${conv.online ? "🟢 Active now" : "Offline"}</div>
          </div>
        </div>
        <div class="chat-thread" id="chat-thread">${threadHTML}</div>
        <div class="chat-input-row">
          <input class="chat-input" id="msg-input"
            placeholder="Message ${conv.name}…" onkeydown="handleMsgKey(event)">
          <button class="send-btn" onclick="sendMessage()">➤</button>
        </div>
      </div>
    </div>`;

  // Update sidebar badge to reflect read state
  syncMsgBadge();

  requestAnimationFrame(() => {
    const t = document.getElementById("chat-thread");
    if (t) t.scrollTop = t.scrollHeight;
  });
}

function sendMessage() {
  const input = document.getElementById("msg-input");
  const text  = input?.value.trim();
  if (!text) return;
  const conv = MSG_DATA.find(c => c.id === activeConvId);
  if (!conv) return;

  const msg = { from: "me", text, time: "Just now" };
  conv.thread.push(msg);
  input.value = "";

  // Append bubble directly — no full re-render (avoids focus loss & scroll jump)
  const thread = document.getElementById("chat-thread");
  if (thread) {
    const bubble = document.createElement("div");
    bubble.className = "bubble-row bubble-row-me";
    bubble.innerHTML = `<div class="bubble bubble-me">${text}<span class="bubble-time">Just now</span></div>`;
    thread.appendChild(bubble);
    thread.scrollTop = thread.scrollHeight;
  } else {
    renderMessages();
  }

  // Update conv list preview without full re-render
  const convItems = document.querySelectorAll(".conv-item");
  convItems.forEach(item => {
    if (item.onclick?.toString().includes(`renderMessages(${conv.id})`)) {
      const preview = item.querySelector(".conv-preview");
      const time    = item.querySelector(".conv-time");
      if (preview) preview.textContent = text;
      if (time)    time.textContent    = "Just now";
    }
  });

  input.focus();
}

function handleMsgKey(e) {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

// ─── SIDEBAR WIDGETS ──────────────────────────────────────────────────────────

function renderTrending() {
  document.getElementById("trending-list").innerHTML = TRENDING_DATA.map(t => `
    <div class="trend-item" onclick="handleHashtag('${t.tag}')">
      <div class="trend-cat">${t.cat}</div>
      <div class="trend-tag">${t.tag}</div>
      <div class="trend-count">${t.count}</div>
    </div>`).join("");
}

function renderSuggestions() {
  document.getElementById("suggestions-list").innerHTML = SUGGESTIONS_DATA.map((u, i) => `
    <div class="suggestion" onclick="openProfileModal(${JSON.stringify(u).replace(/"/g,"&quot;")})">
      <div class="sug-avatar" style="background:linear-gradient(${u.grad})">${u.avatar}</div>
      <div class="sug-info">
        <div class="sug-name">${u.name}</div>
        <div class="sug-handle">${u.handle}</div>
      </div>
      <button class="follow-btn ${u.followed ? "following" : ""}" id="sug-follow-${i}"
        onclick="event.stopPropagation(); toggleSugFollow(${i},this)">
        ${u.followed ? "Following" : "Follow"}
      </button>
    </div>`).join("");
}

function toggleSugFollow(i, btn) {
  SUGGESTIONS_DATA[i].followed = !SUGGESTIONS_DATA[i].followed;
  const f   = SUGGESTIONS_DATA[i].followed;
  const sug = SUGGESTIONS_DATA[i];
  btn.classList.toggle("following", f);
  btn.textContent = f ? "Following" : "Follow";

  // Sync into FOLLOWING_DATA so the Following tab reflects the change
  const existing = FOLLOWING_DATA.find(u => u.handle === sug.handle);
  if (f && !existing) {
    FOLLOWING_DATA.push({ ...sug, followed: true });
    ownProfile.following++;
  } else if (!f && existing) {
    existing.followed = false;
    ownProfile.following = Math.max(0, ownProfile.following - 1);
  } else if (existing) {
    existing.followed = f;
  }

  showToast(f ? `Following ${sug.name} ✓` : `Unfollowed ${sug.name}`);
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function handleSearch(q) {
  if (activePage !== "home") return;
  q = q.trim().toLowerCase();
  const c = document.getElementById("posts-container");
  if (!c) return;
  if (!q) {
    if (activeTab === "following") renderFollowingFeed();
    else renderForYouFeed();
    return;
  }
  const found = posts.filter(p =>
    p.body.toLowerCase().includes(q) ||
    p.name.toLowerCase().includes(q) ||
    p.handle.toLowerCase().includes(q)
  );
  c.innerHTML = found.length
    ? found.map(p => buildPostHTML(p)).join("")
    : `<div class="empty-note">No posts for "<strong>${q}</strong>"</div>`;
}

// ─── SUBMIT POST ──────────────────────────────────────────────────────────────

function submitPost() {
  const input = document.getElementById("postInput");
  const text  = input?.value.trim();
  if (!text) { showToast("Write something first ✍️"); return; }
  const np = {
    id: nextId++, name: ownProfile.name, handle: ownProfile.handle,
    avatar: ownProfile.avatar, grad: ownProfile.grad, time: "Just now",
    body: text, likes: 0, comments: 0, reposts: 0,
    liked: false, showComments: false, commentList: [], image: null
  };
  posts.unshift(np);
  input.value = "";
  document.getElementById("posts-container")?.insertAdjacentHTML("afterbegin", buildPostHTML(np));
  showToast("Posted ✦");
}

// ─── PROFILE MODAL ────────────────────────────────────────────────────────────

let _modalIsOwnProfile = false;

function openProfileModal(user) {
  const isOwn = user.handle === ownProfile.handle;
  _modalIsOwnProfile = isOwn;
  const u = isOwn ? ownProfile : user;

  document.getElementById("modalAvatar").textContent = u.avatar;
  document.getElementById("modalAvatar").style.background = `linear-gradient(${u.grad})`;
  document.getElementById("modalCover").style.background   = `linear-gradient(${u.grad})`;
  document.getElementById("modalName").textContent      = u.name;
  document.getElementById("modalHandle").textContent    = u.handle || "";
  document.getElementById("modalBio").textContent       = u.bio || "Hello member";
  document.getElementById("modalPosts").textContent     = u.posts ?? "—";
  document.getElementById("modalFollowers").textContent = formatNum(u.followers);
  document.getElementById("modalFollowing").textContent = formatNum(u.following);

  const metaRow = document.getElementById("modalMetaRow");
  if (isOwn) {
    const bits = [];
    if (ownProfile.location)   bits.push(`<span class="modal-meta-item">📍 ${ownProfile.location}</span>`);
    if (ownProfile.occupation) bits.push(`<span class="modal-meta-item">💼 ${ownProfile.occupation}</span>`);
    if (ownProfile.website)    bits.push(`<span class="modal-meta-item">🌐 <a href="${ownProfile.website}" target="_blank">${ownProfile.website.replace(/^https?:\/\//,"")}</a></span>`);
    metaRow.innerHTML = bits.join("");
  } else {
    metaRow.innerHTML = "";
  }

  const actions = document.getElementById("modalActions");
  if (isOwn) {
    actions.innerHTML = `<button class="modal-follow-btn" style="background:var(--surface2);border:1px solid var(--border);color:var(--text)" onclick="openEditProfile()">✏️ Edit Profile</button>`;
  } else {
    const following = !!_followStates[user.handle];
    actions.innerHTML = `
      <button class="modal-follow-btn" onclick="toggleModalFollow(this,'${user.handle}')">
        ${following ? "Following ✓" : "Follow"}
      </button>
      <button class="modal-msg-btn" onclick="goToMessages('${user.name}')">✉️ Message</button>`;
  }

  document.getElementById("modalOptions").innerHTML = isOwn ? `
    <button class="profile-option-btn" onclick="openChangePassword()"><span class="opt-icon">🔒</span> Change Password</button>
    <button class="profile-option-btn" onclick="openPrivacySettings()"><span class="opt-icon">🛡️</span> Privacy & Safety</button>
    <button class="profile-option-btn" onclick="goToSettings()"><span class="opt-icon">⚙️</span> Settings</button>
    <button class="profile-option-btn" onclick="goToBookmarks()"><span class="opt-icon">🔖</span> Saved Posts</button>
    <button class="profile-option-btn danger" onclick="showToast('Signed out (demo only)')"><span class="opt-icon">🚪</span> Log Out</button>` : "";

  document.getElementById("profileModal").classList.add("open");
}

function goToMessages(name) {
  document.getElementById("profileModal").classList.remove("open");
  // Try to open the conversation with this person if it exists
  const conv = MSG_DATA.find(c => c.name === name);
  if (conv) activeConvId = conv.id;
  const navEl = document.querySelector('[data-page="messages"]');
  if (navEl) setPage("messages", navEl);
  showToast(`Opening chat with ${name} ✉️`);
}

function goToSettings() {
  document.getElementById("profileModal").classList.remove("open");
  const navEl = document.querySelector('[data-page="settings"]');
  if (navEl) setPage("settings", navEl);
}

function goToBookmarks() {
  document.getElementById("profileModal").classList.remove("open");
  const navEl = document.querySelector('[data-page="saved"]');
  if (navEl) setPage("saved", navEl);
}

function closeModal(e) {
  if (e.target === document.getElementById("profileModal"))
    document.getElementById("profileModal").classList.remove("open");
}

function toggleModalFollow(btn, handle) {
  const was = btn.textContent.includes("Following");
  _followStates[handle] = !was;
  btn.textContent = was ? "Follow" : "Following ✓";

  // Sync with FOLLOWING_DATA
  const existing = FOLLOWING_DATA.find(u => u.handle === handle);
  if (!was && existing) {
    existing.followed = true;
    ownProfile.following++;
  } else if (was && existing) {
    existing.followed = false;
    ownProfile.following = Math.max(0, ownProfile.following - 1);
  }
  // Sync with SUGGESTIONS_DATA
  const sug = SUGGESTIONS_DATA.find(u => u.handle === handle);
  if (sug) sug.followed = !was;

  showToast(was ? "Unfollowed" : "Following ✓");
}

// ─── EDIT PROFILE ─────────────────────────────────────────────────────────────

function openEditProfile() {
  document.getElementById("profileModal").classList.remove("open");
  const f = id => document.getElementById(id);
  f("ep-name").value             = ownProfile.name;
  f("ep-name-count").textContent = `${ownProfile.name.length}/50`;
  f("ep-handle").value           = ownProfile.handle.replace(/^@/, "");
  f("ep-bio").value              = ownProfile.bio;
  f("ep-bio-count").textContent  = `${ownProfile.bio.length}/160`;
  f("ep-location").value         = ownProfile.location   || "";
  f("ep-website").value          = ownProfile.website    || "";
  f("ep-dob").value              = ownProfile.dob        || "";
  f("ep-occupation").value       = ownProfile.occupation || "";
  f("ep-twitter").value          = ownProfile.twitter    || "";
  f("ep-linkedin").value         = ownProfile.linkedin   || "";
  f("ep-github").value           = ownProfile.github     || "";
  f("ep-private").checked        = ownProfile.isPrivate  || false;
  f("ep-online").checked         = ownProfile.showOnline !== false;
  f("ep-dms").checked            = ownProfile.allowDMs   !== false;
  f("editCoverPreview").style.background = `linear-gradient(${ownProfile.grad})`;
  f("editAvatarPreview").textContent     = ownProfile.avatar;
  f("editProfileModal").classList.add("open");
}

function closeEditModal(e) {
  if (e.target === document.getElementById("editProfileModal"))
    document.getElementById("editProfileModal").classList.remove("open");
}

function saveProfile() {
  const f   = id => document.getElementById(id);
  const raw = f("ep-handle").value.trim();
  ownProfile.name       = f("ep-name").value.trim()     || ownProfile.name;
  ownProfile.handle     = raw ? `@${raw.replace(/^@/,"")}` : ownProfile.handle;
  ownProfile.bio        = f("ep-bio").value.trim();
  ownProfile.location   = f("ep-location").value.trim();
  ownProfile.website    = f("ep-website").value.trim();
  ownProfile.dob        = f("ep-dob").value;
  ownProfile.occupation = f("ep-occupation").value.trim();
  ownProfile.twitter    = f("ep-twitter").value.trim();
  ownProfile.linkedin   = f("ep-linkedin").value.trim();
  ownProfile.github     = f("ep-github").value.trim();
  ownProfile.isPrivate  = f("ep-private").checked;
  ownProfile.showOnline = f("ep-online").checked;
  ownProfile.allowDMs   = f("ep-dms").checked;
  const spName   = document.querySelector(".sp-name");
  const spHandle = document.querySelector(".sp-handle");
  const spAvatar = document.querySelector(".sp-avatar");
  if (spName)   spName.textContent   = ownProfile.name;
  if (spHandle) spHandle.textContent = ownProfile.handle;
  if (spAvatar) spAvatar.textContent = ownProfile.avatar;
  f("editProfileModal").classList.remove("open");
  showToast("Profile saved ✓");
}

// ─── CHANGE PASSWORD ──────────────────────────────────────────────────────────

function openChangePassword() {
  ["profileModal","settingsPage"].forEach(id => document.getElementById(id)?.classList.remove("open"));
  ["pw-current","pw-new","pw-confirm"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("pw-strength-fill").style.width = "0%";
  document.getElementById("pw-strength-label").textContent = "";
  ["rule-len","rule-upper","rule-num","rule-special"]
    .forEach(id => document.getElementById(id)?.classList.remove("pass"));
  document.getElementById("changePasswordModal").classList.add("open");
}

function closePasswordModal(e) {
  if (e.target === document.getElementById("changePasswordModal"))
    document.getElementById("changePasswordModal").classList.remove("open");
}

function savePassword() {
  const current = document.getElementById("pw-current").value;
  const newPw   = document.getElementById("pw-new").value;
  const confirm = document.getElementById("pw-confirm").value;
  if (!current)          { showToast("Enter your current password ⚠️"); return; }
  if (newPw.length < 8)  { showToast("Password must be at least 8 characters ⚠️"); return; }
  if (newPw !== confirm)  { showToast("Passwords don't match ⚠️"); return; }
  document.getElementById("changePasswordModal").classList.remove("open");
  showToast("Password updated 🔒");
}

function togglePwVisibility(inputId, btn) {
  const el = document.getElementById(inputId);
  if (!el) return;
  el.type = el.type === "password" ? "text" : "password";
  btn.textContent = el.type === "password" ? "👁️" : "🙈";
}

function checkPwStrength(val) {
  const rules = {
    "rule-len":     val.length >= 8,
    "rule-upper":   /[A-Z]/.test(val),
    "rule-num":     /[0-9]/.test(val),
    "rule-special": /[^A-Za-z0-9]/.test(val)
  };
  const labels = {
    "rule-len": "At least 8 characters", "rule-upper": "One uppercase letter",
    "rule-num": "One number", "rule-special": "One special character"
  };
  let score = 0;
  for (const [id, pass] of Object.entries(rules)) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.classList.toggle("pass", pass);
    el.textContent = `${pass ? "✓" : "✗"} ${labels[id]}`;
    if (pass) score++;
  }
  const fill  = document.getElementById("pw-strength-fill");
  const label = document.getElementById("pw-strength-label");
  fill.style.width      = `${(score/4)*100}%`;
  fill.style.background = ["#fc5c5c","#fc9c5c","#f7c948","#5cf0c8"][score-1] || "#fc5c5c";
  label.textContent     = score ? ["Weak","Fair","Good","Strong"][score-1] : "";
}

// ─── PRIVACY ──────────────────────────────────────────────────────────────────

function openPrivacySettings() {
  document.getElementById("profileModal").classList.remove("open");
  document.getElementById("priv-private").checked = ownProfile.isPrivate || false;
  document.getElementById("privacyModal").classList.add("open");
}

function closePrivacyModal(e) {
  if (e.target === document.getElementById("privacyModal"))
    document.getElementById("privacyModal").classList.remove("open");
}

function savePrivacy() {
  ownProfile.isPrivate = document.getElementById("priv-private").checked;
  document.getElementById("privacyModal").classList.remove("open");
  showToast("Privacy settings saved 🛡️");
}

// ─── TOAST & UTILS ────────────────────────────────────────────────────────────

let _toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  clearTimeout(_toastTimer);
  toast.textContent = msg;
  toast.classList.add("show");
  _toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function formatNum(n) {
  if (n == null) return "—";
  return n >= 1000 ? (n / 1000).toFixed(1) + "K" : String(n);
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    ["profileModal","editProfileModal","changePasswordModal","privacyModal"]
      .forEach(id => document.getElementById(id)?.classList.remove("open"));
    closePostMenus();
  }
  // Quick nav shortcuts
  if (e.key === "n" && !e.target.matches("input,textarea")) {
    const navEl = document.querySelector('[data-page="home"]');
    if (navEl) { setPage("home", navEl); setTimeout(() => document.getElementById("postInput")?.focus(), 100); }
  }
});
