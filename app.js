/* Renders window.SITE_DATA (from data.js) into index.html. No content lives here. */
(function () {
  "use strict";

  var data = window.SITE_DATA;
  if (!data) return;

  // Octicons (MIT, github.com/primer/octicons) plus simple LinkedIn / Scholar glyphs.
  var ICONS = {
    github: "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z",
    linkedin: "M13.6 1H2.4C1.63 1 1 1.63 1 2.4v11.2c0 .77.63 1.4 1.4 1.4h11.2c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4ZM5.15 12.93H3.08V6.25h2.07v6.68ZM4.11 5.34a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm8.82 7.59h-2.07V9.68c0-.78-.01-1.77-1.08-1.77-1.08 0-1.25.84-1.25 1.71v3.31H6.46V6.25h1.99v.91h.03c.28-.52.95-1.08 1.96-1.08 2.1 0 2.49 1.38 2.49 3.18v3.67Z",
    scholar: "M8 1 0 5.6l8 4.6 6.5-3.74V11H16V5.6L8 1ZM3.2 8.75v2.9C4.25 13.07 6 14 8 14s3.75-.93 4.8-2.35v-2.9L8 11.5 3.2 8.75Z",
    repo: "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z",
    paper: "M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z",
    code: "m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z",
    demo: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z",
    external: "M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"
  };

  // ORCID "iD" mark: circle with the letters cut out (drawn with the even-odd fill rule)
  ICONS.orcid = "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM5.2 3.6a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6ZM4.6 6.1h1.2v5.4H4.6Z" +
                "M7 6.1h2.15c1.9 0 3.05 1.1 3.05 2.7s-1.15 2.7-3.05 2.7H7ZM8.2 7.15v3.3h.9c1.15 0 1.85-.65 1.85-1.65S10.25 7.15 9.1 7.15Z";
  var EVENODD = { orcid: true };

  var SVG_NS = "http://www.w3.org/2000/svg";

  function icon(name) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", ICONS[name] || ICONS.external);
    if (EVENODD[name]) path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);
    return svg;
  }

  // Small element builder: el("a", {href: "..."}, child1, "text", ...)
  function el(tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (attrs[key] == null || attrs[key] === false) return;
        if (key === "text") node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (child == null) continue;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }

  // An <img>, or for an animation with a `still` frame, a <picture> that shows the still
  // to visitors who ask their system for reduced motion.
  function media(src, still, attrs) {
    var img = el("img", Object.assign({ src: src }, attrs));
    if (!still) return img;
    return el("picture", null, el("source", { media: "(prefers-reduced-motion: reduce)", srcset: still }), img);
  }

  function extLink(url, children, extra) {
    var attrs = Object.assign({ href: url, rel: "noopener" }, extra || {});
    var a = el("a", attrs);
    children.forEach(function (c) { a.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return a;
  }

  function byId(id) { return document.getElementById(id); }

  /* ---------- Profile ---------- */
  var p = data.profile;
  var avatar = p.photo
    ? el("img", { class: "avatar", src: p.photo, alt: p.photoAlt, width: "296", height: "296" })
    : el("div", { class: "avatar avatar-initials", role: "img",
                  "aria-label": "Placeholder avatar showing the initials " + p.initials, text: p.initials });

  var profileEl = byId("profile");
  profileEl.appendChild(
    el("div", { class: "profile-head" },
      avatar,
      el("h1", { class: "profile-name" },
        p.name,
        el("span", { class: "profile-handle", text: p.handle })))
  );
  profileEl.appendChild(el("p", { class: "tagline", text: p.tagline }));

  var linkList = el("ul", { class: "link-list", "aria-label": "Profiles elsewhere" });
  p.links.forEach(function (l) {
    linkList.appendChild(el("li", null,
      extLink(l.url, [icon(l.icon), l.text], { "aria-label": l.label + ": " + l.text })));
  });
  profileEl.appendChild(linkList);

  /* ---------- Skills ---------- */
  var skillsEl = byId("skills-list");
  data.skills.forEach(function (g) {
    var chips = el("ul", { class: "chips" });
    g.items.forEach(function (s) { chips.appendChild(el("li", { class: "chip", text: s })); });
    skillsEl.appendChild(el("div", { class: "skill-group" }, el("h3", { text: g.group }), chips));
  });

  /* ---------- README card ---------- */
  byId("readme-handle").textContent = p.handle;
  var readme = byId("readme-body");
  readme.appendChild(el("p", { text: data.intro.summary }));
  var bullets = el("ul", { class: "readme-list" });
  data.intro.bullets.forEach(function (b) {
    var text = el("span", null, b.text);
    if (b.link) text.appendChild(extLink(b.link.url, [b.link.label]));
    if (b.after) text.appendChild(document.createTextNode(b.after));
    bullets.appendChild(el("li", null, el("span", { class: "emoji", "aria-hidden": "true", text: b.icon }), text));
  });
  readme.appendChild(bullets);

  /* ---------- Projects ---------- */
  var projectList = byId("project-list");
  data.projects.forEach(function (proj) {
    var primary = proj.links && proj.links[0];
    var title = el("h3", { class: "card-title" },
      icon("repo"),
      primary ? extLink(primary.url, [el("span", { class: "name", text: proj.title })]) : el("span", { class: "name", text: proj.title }),
      proj.status ? el("span", { class: "pill" + (/ongoing/i.test(proj.status) ? " pill-ongoing" : ""), text: proj.status }) : null);

    var card = el("article", { class: "card" }, title, el("p", { class: "card-desc", text: proj.description }));

    if (proj.credit) {
      card.appendChild(el("p", { class: "card-credit" },
        proj.credit.url ? extLink(proj.credit.url, [proj.credit.text]) : proj.credit.text));
    }

    var meta = el("div", { class: "card-meta" });
    if (proj.kind) {
      var dot = el("span", { class: "lang-dot", "aria-hidden": "true" });
      dot.style.backgroundColor = proj.kind.color;
      meta.appendChild(el("span", { class: "lang" }, dot, proj.kind.label));
    }
    var links = el("span", { class: "card-links" });
    (proj.links || []).forEach(function (l) {
      links.appendChild(extLink(l.url, [icon(l.type), l.label], { "aria-label": l.label + ": " + proj.title }));
    });
    meta.appendChild(links);
    card.appendChild(meta);

    projectList.appendChild(el("li", null, card));
  });

  /* ---------- Publications ---------- */
  var myNames = (p.authorNames || [p.name]).map(function (n) { return n.toLowerCase(); });

  function authorLine(authors) {
    var line = el("p", { class: "pub-authors" });
    var equal = false;
    authors.forEach(function (raw, i) {
      var star = /\*$/.test(raw);
      var name = raw.replace(/\*$/, "");
      if (star) equal = true;
      var isMe = myNames.indexOf(name.toLowerCase()) !== -1;
      line.appendChild(el("span", { class: isMe ? "me" : null, text: name + (star ? "*" : "") }));
      if (i < authors.length - 2) line.appendChild(document.createTextNode(", "));
      else if (i === authors.length - 2) line.appendChild(document.createTextNode(authors.length > 2 ? ", and " : " and "));
    });
    return { node: line, equal: equal };
  }

  var pubList = byId("pub-list");
  data.publications.forEach(function (pub, idx) {
    var panelId = "pub-panel-" + idx;
    var hasPanel = pub.summary || (pub.figures && pub.figures.length);
    var toggles = [];

    function setOpen(open) {
      panel.hidden = !open;
      toggles.forEach(function (t) { t.setAttribute("aria-expanded", String(open)); });
      summaryBtn.textContent = open ? "Hide summary" : "Summary";
    }

    // Thumbnail with journal badge (a button that opens the summary panel)
    var thumb = null;
    if (pub.thumb) {
      var img = media(pub.thumb.src, pub.thumb.still, { alt: pub.thumb.alt, loading: "lazy", width: "480", height: "360" });
      if (hasPanel) {
        thumb = el("button", { type: "button", class: "pub-thumb", "aria-controls": panelId, "aria-expanded": "false",
                               "aria-label": "Show summary and figures: " + pub.title }, img);
        toggles.push(thumb);
      } else {
        thumb = el("div", { class: "pub-thumb" }, img);
      }
    }

    var authors = authorLine(pub.authors || []);
    var venue = el("p", { class: "pub-venue" },
      el("span", null, el("em", { text: pub.venue }), ", " + pub.year),
      pub.role ? el("span", { class: "pill", text: pub.role }) : null);

    var actions = el("div", { class: "pub-actions" },
      extLink(pub.url, [icon("paper"), "DOI"], { class: "btn", "aria-label": "DOI: " + pub.title }));
    var summaryBtn = el("button", { type: "button", class: "btn", "aria-controls": panelId, "aria-expanded": "false", text: "Summary" });
    if (hasPanel) { actions.appendChild(summaryBtn); toggles.push(summaryBtn); }

    var body = el("div", { class: "pub-body" },
      pub.abbr ? el("span", { class: "pub-abbr", text: pub.abbr }) : null,
      el("h3", { class: "pub-title" }, extLink(pub.url, [pub.title])),
      authors.node,
      venue,
      authors.equal ? el("p", { class: "pub-note", text: "* Equal contribution" }) : null,
      actions);

    // Expandable panel: summary, figures, credit
    var panel = el("div", { class: "pub-panel", id: panelId, hidden: "hidden" });
    if (pub.summary) panel.appendChild(el("p", { class: "pub-summary", text: pub.summary }));
    if (pub.figures && pub.figures.length) {
      var figs = el("div", { class: "pub-figs" });
      pub.figures.forEach(function (f) {
        figs.appendChild(el("figure", null,
          extLink(f.src, [media(f.src, f.still, { alt: f.alt, loading: "lazy" })],
                  { class: "fig-frame", "aria-label": "Open full-size figure: " + (f.caption || f.alt) }),
          f.caption ? el("figcaption", { text: f.caption }) : null));
      });
      panel.appendChild(figs);
    }
    if (pub.credit) panel.appendChild(el("p", { class: "pub-credit", text: pub.credit }));

    toggles.forEach(function (t) {
      t.addEventListener("click", function () { setOpen(panel.hidden); });
    });

    var li = el("li", { class: "pub" + (thumb ? "" : " no-thumb") }, thumb, body);
    if (hasPanel) li.appendChild(panel);
    pubList.appendChild(li);
  });
  if (data.publicationsMore) {
    byId("pub-more").appendChild(extLink(data.publicationsMore.url, [data.publicationsMore.label, icon("external")]));
  }

  /* ---------- Background ---------- */
  var expList = byId("experience-list");
  data.experience.forEach(function (x) {
    expList.appendChild(el("li", null,
      el("div", { class: "tl-period", text: x.period }),
      el("div", null, el("span", { class: "tl-role", text: x.role }), el("span", { class: "tl-org", text: " · " + x.org })),
      el("p", { class: "tl-text", text: x.text })));
  });
  var eduList = byId("education-list");
  data.education.forEach(function (e) {
    eduList.appendChild(el("li", null,
      el("div", { class: "tl-period", text: e.year }),
      el("div", { class: "tl-role", text: e.degree }),
      el("p", { class: "tl-text", text: e.org })));
  });

  /* ---------- Tab counts, footer ---------- */
  document.querySelectorAll("[data-count]").forEach(function (span) {
    var list = data[span.getAttribute("data-count")];
    if (list) span.textContent = list.length;
  });
  byId("footer-text").textContent = "© " + new Date().getFullYear() + " " + p.name;

  /* ---------- Sticky sidebar offset ---------- */
  var sidebar = document.querySelector(".sidebar");
  function fitSidebar() {
    var header = document.querySelector(".topbar").offsetHeight;
    var top = Math.min(header + 24, window.innerHeight - sidebar.offsetHeight - 24);
    document.documentElement.style.setProperty("--sidebar-top", top + "px");
  }
  fitSidebar();
  window.addEventListener("resize", fitSidebar);

  /* ---------- Highlight the tab of the section in view ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  function setActive(id) {
    tabs.forEach(function (t) {
      if (t.getAttribute("href") === "#" + id) t.setAttribute("aria-current", "true");
      else t.removeAttribute("aria-current");
    });
  }
  setActive("overview");
  if ("IntersectionObserver" in window) {
    var sections = tabs.map(function (t) { return byId(t.getAttribute("href").slice(1)); }).filter(Boolean);
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
    // The last section may never reach the trigger band; select it at page bottom.
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id);
      }
    }, { passive: true });
  }
})();
