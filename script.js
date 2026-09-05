/* =========================================================
   SOCIAL PROFILES ARRAY
   Add or remove entries here — each renders as a pill in the header.
========================================================= */
const socialProfiles = [
  {
    label: "Discord",
    value: "View profile",
    url: "https://discord.com/users/978988982375415808",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.6 3c-.2.4-.5 1-.7 1.4a18.3 18.3 0 0 0-5.8 0A13 13 0 0 0 8.4 3a19.7 19.7 0 0 0-4.7 1.4C1 9 .3 13.5.6 18a20 20 0 0 0 6 3c.5-.7.9-1.4 1.3-2.2-.7-.3-1.4-.6-2-1.1l.5-.4a14.2 14.2 0 0 0 12 0l.5.4c-.6.4-1.3.8-2 1.1.4.8.8 1.5 1.3 2.2a20 20 0 0 0 6-3c.4-5.2-.9-9.6-3.4-13.6ZM8.7 15.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2Z"/></svg>`
  },
  {
    label: "Email",
    value: "foxyydeveloper@gmail.com",
    url: "mailto:foxyydeveloper@gmail.com",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
  }
];

/* =========================================================
   PORTFOLIO ARRAY (outer array)
   One element per server or bot shown as a card.
   Swap the placeholder "media" links for real screenshots any time.
   kind        -> "Server" or "Bot", shown as the small tag on the card
   media[]     -> inner array, the images that auto-play in the card
========================================================= */
const portfolioItems = [
  {
    kind: "Server",
    title: "Aurora Gaming Hub",
    titleColor: "#c9cdff",
    description: "A 12k-member gaming community rebuilt from the ground up: clearer categories, a level and reputation system, and channels people actually use instead of scrolling past.",
    descColor: "#b7bac2",
    linkText: "Join server",
    link: "https://discord.gg/example-aurora",
    linkBoxColor: "#8f9bff",
    cardBg: "#20213a",
    cardBorder: "#7c8bff",
    media: [
      "https://placehold.co/900x506/1c1d33/8f9bff?text=Server+overview",
      "https://placehold.co/900x506/1c1d33/8f9bff?text=Role+%26+level+system",
      "https://placehold.co/900x506/1c1d33/8f9bff?text=Custom+emojis"
    ]
  },
  {
    kind: "Bot",
    title: "WardenBot",
    titleColor: "#9dffce",
    description: "Custom moderation bot with raid protection, auto-mod filters tuned per channel, and a case log so staff can actually track what happened and why.",
    descColor: "#b2c2ba",
    linkText: "Invite bot",
    link: "https://discord.com/oauth2/example-warden",
    linkBoxColor: "#5be8a2",
    cardBg: "#132420",
    cardBorder: "#4be79e",
    media: [
      "https://placehold.co/900x506/0f1e1a/5be8a2?text=Moderation+log",
      "https://placehold.co/900x506/0f1e1a/5be8a2?text=Auto-mod+rules",
      "https://placehold.co/900x506/0f1e1a/5be8a2?text=Case+history"
    ]
  },
  {
    kind: "Server",
    title: "Nightfall RP",
    titleColor: "#ffb3d6",
    description: "A roleplay server with a full lore hub, character sheet templates, and a channel layout that keeps in-character and out-of-character chat from colliding.",
    descColor: "#c2b6bd",
    linkText: "Join server",
    link: "https://discord.gg/example-nightfall",
    linkBoxColor: "#ff6fb0",
    cardBg: "#2a1620",
    cardBorder: "#ff5fa8",
    media: [
      "https://placehold.co/900x506/24121a/ff6fb0?text=Lore+hub",
      "https://placehold.co/900x506/24121a/ff6fb0?text=Character+sheets",
      "https://placehold.co/900x506/24121a/ff6fb0?text=Event+channel"
    ]
  },
  {
    kind: "Bot",
    title: "EchoTunes",
    titleColor: "#ffd08a",
    description: "Music bot built for stability during peak hours: queue persistence, per-server volume presets, and a lightweight footprint so it never lags the voice channel.",
    descColor: "#c9beac",
    linkText: "Invite bot",
    link: "https://discord.com/oauth2/example-echotunes",
    linkBoxColor: "#ffab3d",
    cardBg: "#2a1e0f",
    cardBorder: "#ffa63d",
    media: [
      "https://placehold.co/900x506/241a0f/ffab3d?text=Now+playing",
      "https://placehold.co/900x506/241a0f/ffab3d?text=Queue+view",
      "https://placehold.co/900x506/241a0f/ffab3d?text=Server+presets"
    ]
  },
  {
    kind: "Server",
    title: "PixelForge Studio",
    titleColor: "#9fe0ff",
    description: "A dev community for a small indie studio: feedback channels that map to their build pipeline, a bug-report form bot, and a devlog channel with auto-embeds.",
    descColor: "#b6c4cb",
    linkText: "Join server",
    link: "https://discord.gg/example-pixelforge",
    linkBoxColor: "#4fc7ff",
    cardBg: "#0f2230",
    cardBorder: "#39c1ff",
    media: [
      "https://placehold.co/900x506/0c1c27/4fc7ff?text=Devlog+channel",
      "https://placehold.co/900x506/0c1c27/4fc7ff?text=Bug+report+form",
      "https://placehold.co/900x506/0c1c27/4fc7ff?text=Feedback+board"
    ]
  },
  {
    kind: "Server",
    title: "Anime Haven",
    titleColor: "#f4e88a",
    description: "A 20k-member anime community server redesigned around seasonal watch parties, spoiler-safe channels, and a self-role menu people can actually find.",
    descColor: "#c9c5a8",
    linkText: "Join server",
    link: "https://discord.gg/example-animehaven",
    linkBoxColor: "#e8d24a",
    cardBg: "#28230f",
    cardBorder: "#e0cc3f",
    media: [
      "https://placehold.co/900x506/221e0c/e8d24a?text=Self-role+menu",
      "https://placehold.co/900x506/221e0c/e8d24a?text=Spoiler+channels",
      "https://placehold.co/900x506/221e0c/e8d24a?text=Watch+party+event"
    ]
  }
];

/* ---------------------------------------------------------
   Render: social pills
--------------------------------------------------------- */
const socialWrap = document.getElementById("socialLinks");
socialProfiles.forEach(profile => {
  const a = document.createElement("a");
  a.className = "social-pill";
  a.href = profile.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = `${profile.icon}<span>${profile.label}</span>`;
  a.title = profile.value;
  socialWrap.appendChild(a);
});

/* ---------------------------------------------------------
   Render: cards + per-card autoplay media
--------------------------------------------------------- */
const grid = document.getElementById("cardGrid");
const cardTimers = [];

portfolioItems.forEach((item, itemIndex) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.background = `linear-gradient(180deg, ${item.cardBg} 0%, #1a1b1f 100%)`;
  card.style.borderColor = item.cardBorder;
  card.style.boxShadow = `0 0 0 1px ${item.cardBorder}22, 0 0 26px -6px ${item.cardBorder}88`;

  const dotsHtml = item.media.map((_, i) => `<span class="${i === 0 ? "on" : ""}"></span>`).join("");

  card.innerHTML = `
    <div class="card-media" data-item="${itemIndex}">
      <span class="card-tag" style="color:${item.cardBorder}">${item.kind}</span>
      <img src="${item.media[0]}" alt="${item.title} preview">
      <div class="media-dots">${dotsHtml}</div>
      <span class="expand-hint">View gallery</span>
    </div>
    <div class="card-body">
      <h3 style="color:${item.titleColor}">${item.title}</h3>
      <p style="color:${item.descColor}">${item.description}</p>
      <a class="card-link" href="${item.link}" target="_blank" rel="noopener" style="background:${item.linkBoxColor}">${item.linkText}</a>
    </div>
  `;

  grid.appendChild(card);

  // Autoplay the inner media array for this card, staggered so cards don't flip in sync
  const img = card.querySelector(".card-media img");
  const dots = card.querySelectorAll(".media-dots span");
  let mediaIndex = 0;

  function stepMedia() {
    img.style.opacity = 0;
    setTimeout(() => {
      mediaIndex = (mediaIndex + 1) % item.media.length;
      img.src = item.media[mediaIndex];
      dots.forEach((d, i) => d.classList.toggle("on", i === mediaIndex));
      img.onload = () => { img.style.opacity = 1; };
    }, 380);
  }

  const timer = setInterval(stepMedia, 4000 + itemIndex * 350);
  cardTimers.push(timer);

  // Open full gallery mode on click
  card.querySelector(".card-media").addEventListener("click", () => openGallery(itemIndex));
});

/* ---------------------------------------------------------
   Gallery modal (media gallery mode)
--------------------------------------------------------- */
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const modalDots = document.getElementById("modalDots");

let activeItem = null;
let activeMediaIndex = 0;
let modalTimer = null;

function openGallery(itemIndex) {
  activeItem = portfolioItems[itemIndex];
  activeMediaIndex = 0;

  modalTag.textContent = activeItem.kind;
  modalTag.style.color = activeItem.cardBorder;
  modalTitle.textContent = activeItem.title;
  modalTitle.style.color = activeItem.titleColor;
  modalDesc.textContent = activeItem.description;
  modalLink.href = activeItem.link;
  modalLink.textContent = activeItem.linkText;
  modalLink.style.background = activeItem.linkBoxColor;

  modalDots.innerHTML = activeItem.media
    .map((_, i) => `<span data-i="${i}" class="${i === 0 ? "on" : ""}"></span>`)
    .join("");
  modalDots.querySelectorAll("span").forEach(dot => {
    dot.addEventListener("click", () => showMedia(parseInt(dot.dataset.i, 10)));
  });

  showMedia(0);
  startModalAutoplay();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function showMedia(index) {
  activeMediaIndex = index;
  modalImg.style.opacity = 0;
  setTimeout(() => {
    modalImg.src = activeItem.media[activeMediaIndex];
    modalImg.alt = `${activeItem.title} media ${activeMediaIndex + 1}`;
    modalImg.onload = () => { modalImg.style.opacity = 1; };
    modalDots.querySelectorAll("span").forEach((d, i) => d.classList.toggle("on", i === activeMediaIndex));
  }, 200);
}

function startModalAutoplay() {
  clearInterval(modalTimer);
  modalTimer = setInterval(() => {
    showMedia((activeMediaIndex + 1) % activeItem.media.length);
  }, 3500);
}

function closeGallery() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  clearInterval(modalTimer);
}

document.getElementById("modalPrev").addEventListener("click", () => {
  showMedia((activeMediaIndex - 1 + activeItem.media.length) % activeItem.media.length);
  startModalAutoplay();
});
document.getElementById("modalNext").addEventListener("click", () => {
  showMedia((activeMediaIndex + 1) % activeItem.media.length);
  startModalAutoplay();
});
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeGallery));
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowLeft") { showMedia((activeMediaIndex - 1 + activeItem.media.length) % activeItem.media.length); startModalAutoplay(); }
  if (e.key === "ArrowRight") { showMedia((activeMediaIndex + 1) % activeItem.media.length); startModalAutoplay(); }
});
