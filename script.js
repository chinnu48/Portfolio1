// ---- Config: Your data ----
const CONTACT = {
  email: "mailto:atulsp48@gmail.com",
  linkedin: "https://www.linkedin.com/in/atul-pachnure",
  github: "https://github.com/chinnu48",
  resumeUrl: "Pachnure_Atul.pdf",
};

// All projects with Impact Metrics and Dashboards
const PROJECTS = [
  {
    id: "codeprism",
    title: "CodePrism",
    desc: "- <strong>Impact:</strong> Developed an end-to-end skill intelligence platform that profiles code using AST to detect structural patterns and algorithmic heuristics.<br>- <strong>Data Engineer:</strong> Engineered an analytics engine calculating Brier Scores, Speed Indices, and Topic Mastery metrics.<br>- <strong>Full Stack:</strong> Integrated LeetCode/Codeforces APIs via GraphQL/REST and built a Streamlit dashboard for visualizing performance trends and learning gaps.",
    tech: ["Python", "Streamlit", "AST", "SQLite", "Data Analytics"],
    categories: ["Python", "Data Science", "Backend"],
    github: "https://github.com/chinnu48",
    thumb: "assets/thumbs/CodePrism.jpeg",
    featured: true,
    icon: "terminal"
  },
  {
    id: "eda_recommendation",
    title: "Intelligent EDA Recommendation Engine",
    desc: "- <strong>Impact:</strong> Optimized exploratory data analysis workflows by recommending tools based on dataset characteristics.<br>- <strong>Python Developer:</strong> Developed a system that profiles uploaded datasets and recommends optimal exploratory data analysis tools based on structural and computational characteristics.<br>- <strong>Data Analyst:</strong> Benchmarked multiple automated EDA libraries to analyze scalability, memory efficiency, and dimensional sensitivity.",
    tech: ["Python", "Pandas", "Data Profiling", "Performance Analysis"],
    categories: ["Python", "Data Science", "Data Analysis"],
    github: "https://github.com/chinnu48",
    thumb: "assets/thumbs/OptiEDA_Engine.jpeg",
    featured: true,
    icon: "search-code"
  },
  {
    id: "ai_resume_screener",
    title: "AI Resume Screener",
    desc: "- <strong>Impact:</strong> Reduced initial screening time by 65% through automated ranking.<br>- <strong>NLP Specialist:</strong> Built an end-to-end pipeline using NLTK and SpaCy for entity extraction and semantic matching.<br>- <strong>ML Engineer:</strong> Leveraged LLMs (GPT-based) to perform complex resume-to-job-description scoring with 90% accuracy.",
    tech: ["Python", "NLP", "LLM", "OpenAI", "SpaCy", "Flask"],
    categories: ["Python", "Machine Learning", "NLP", "Backend"],
    github: "https://github.com/chinnu48/AI_Resume_Screener",
    thumb: "assets/thumbs/ai_resume_screener.png",
    featured: true,
    icon: "brain-circuit"
  },
  {
    id: "car_rental_dbms",
    title: "Car Rental DBMS",
    desc: "- <strong>Impact:</strong> Optimized database schema reducing query latency by 30% for high-concurrency rental lookups.<br>- <strong>Database Developer:</strong> Designed normalized relational schemas and complex SQL queries for inventory management.<br>- <strong>Backend:</strong> Built a robust management system using Python and MySQL to handle bookings, tracking, and billing.",
    tech: ["Python", "MySQL", "Database Design", "SQL"],
    categories: ["Python", "Backend", "Database"],
    github: "https://github.com/chinnu48/car_rental_dbms",
    thumb: "assets/thumbs/car_rental_dbms.png",
    featured: false,
    icon: "database"
  },
  {
    id: "car_price_prediction",
    title: "Car Price Prediction",
    desc: "- <strong>Impact:</strong> Achieved an R² score of 0.89 using advanced regression techniques on 10k+ vehicle records.<br>- <strong>Data Scientist:</strong> Conducted thorough EDA, feature engineering, and hyperparameter tuning for Random Forest models.<br>- <strong>Python Developer:</strong> Deployed the model as a live Streamlit application for real-time price estimation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
    categories: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/chinnu48/Car_price_prediction",
    thumb: "assets/thumbs/car_price_prediction.png",
    featured: true,
    icon: "trending-up"
  },
  {
    id: "fire_initiative",
    title: "Fire Safety Initiative",
    desc: "- <strong>Impact:</strong> Improved fire risk prediction accuracy by 20% using historical incident trend analysis.<br>- <strong>Data Analyst:</strong> Analyzed multi-year incident data to identify high-risk zones and seasonal trends.<br>- <strong>Data Engineer:</strong> Developed automated ETL scripts in Python to clean and aggregate raw emergency service logs into a structured SQLite database.",
    tech: ["Python", "SQLite", "Data Analysis", "ETL"],
    categories: ["Python", "Data Analysis", "Data Engineering"],
    github: "https://github.com/chinnu48/Fire_safety_initiative",
    thumb: "assets/thumbs/fire_safety_initiative.png",
    featured: true,
    icon: "flame"
  },
  {
    id: "styleswap",
    title: "StyleSwap (E-commerce)",
    desc: "- <strong>Impact:</strong> Built a high-performance fashion marketplace, improving image load performance by 40%.<br>- <strong>Backend Developer:</strong> Designed RESTful APIs for product management and sustainable shopping toggles.<br>- <strong>Web Dev:</strong> Created a responsive, modern UI with Tailwind CSS.",
    tech: ["Node.js", "Tailwind"],
    categories: ["Web", "Backend"],
    github: "https://github.com/chinnu48",
    thumb: "assets/thumbs/styleswap.png",
    featured: true,
    icon: "shopping-bag"
  },
  {
    id: "wheels_on_demand",
    title: "Wheels on Demand",
    desc: "- <strong>Impact:</strong> Optimized JDBC connection pooling to handle 100+ concurrent user requests.<br>- <strong>Backend (Java):</strong> Built a car rental management system with full CRUD functionality using Java and MySQL.<br>- <strong>Database:</strong> Developed complex stored procedures for inventory tracking.",
    tech: ["Java", "JDBC", "MySQL"],
    categories: ["Backend", "Database"],
    github: "https://github.com/chinnu48/Wheels_on_Demand",
    thumb: "assets/thumbs/wheels_on_demand.png",
    featured: false,
    icon: "database"
  },
  {
    id: "mess_oversight",
    title: "Mess Oversight System",
    desc: "- <strong>Impact:</strong> Automated mess billing and inventory tracking, saving 15+ manual work hours per week.<br>- <strong>Python Developer:</strong> Built a full-featured management tool for hostel mess services.<br>- <strong>Database:</strong> Designed an efficient relational schema to track daily consumption and financial logs.",
    tech: ["Python", "SQL", "Flask", "Matplotlib"],
    categories: ["Python", "Backend", "Database"],
    github: "https://github.com/chinnu48",
    thumb: "assets/thumbs/mess_oversight.png",
    featured: false,
    icon: "utensils"
  },
  {
    id: "bank_account_test",
    title: "Banking Logic Suite",
    desc: "- <strong>Impact:</strong> Ensured 100% reliability of core banking operations through rigorous unit testing.<br>- <strong>Backend:</strong> Developed complex transactional logic (deposits, transfers) in Java.<br>- <strong>Testing:</strong> Implemented comprehensive JUnit test cases for all edge cases.",
    tech: ["Java", "JUnit", "Software Testing"],
    categories: ["Backend", "Testing"],
    github: "https://github.com/chinnu48/bank_account_test",
    thumb: "assets/thumbs/bank_account_test.png",
    featured: false,
    icon: "wallet"
  },
];

// ---- Utilities ----
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "dataset") Object.assign(node.dataset, v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  });
  children.forEach(c => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}

function safeImage(src, alt, fallbackText) {
  const wrap = el("div", { class: "thumb" });
  const fb = el("div", { class: "fallback" }, [document.createTextNode(fallbackText || "Preview")]);
  wrap.appendChild(fb);

  const img = new Image();
  img.alt = alt || "";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.display = "block";

  img.onload = () => { if (wrap.querySelector(".fallback")) wrap.querySelector(".fallback").remove(); wrap.appendChild(img); };
  img.onerror = () => { console.warn(`Failed: ${src}`); };
  img.src = src;
  return wrap;
}

// ---- Render cards ----
function projectCard(p) {
  const card = el("article", { class: "card", tabindex: "0" });
  const thumb = safeImage(p.thumb, p.title, p.title[0]);

  const content = el("div", { class: "card-content" });
  
  // Icon + Title Row
  const header = el("div", { style: "display: flex; align-items: center; gap: 10px; margin-bottom: 8px;" });
  if (p.icon) header.appendChild(el("i", { dataset: { lucide: p.icon }, style: "width: 20px; color: var(--primary);" }));
  header.appendChild(el("h3", { class: "title" }, [p.title]));

  const desc = el("p", { class: "desc" });
  desc.innerHTML = p.desc.split("<br>")[0]; // Just show impact/first line on card
  
  const badges = el("div", { class: "badges" }, p.tech.slice(0, 3).map(t => el("span", { class: "badge" }, [t])));

  content.append(header, desc, badges);

  const actionsWrapper = el("div", { class: "card-actions" });
  const githubLink = el("a", { class: "btn-link", href: p.github, target: "_blank", rel: "noopener" }, ["View Code ->"]);
  githubLink.onclick = e => e.stopPropagation();

  actionsWrapper.appendChild(githubLink);
  content.appendChild(actionsWrapper);

  card.append(thumb, content);
  card.onclick = (e) => { if (e.target.tagName !== "A") openModal(p); };
  
  card.dataset.categories = p.categories.join("|");
  card.dataset.title = p.title.toLowerCase();
  return card;
}

function mountProjects() {
  const featuredGrid = $("#featuredGrid");
  const allGrid = $("#allGrid");
  if (!featuredGrid) return;

  PROJECTS.filter(p => p.featured).forEach(p => featuredGrid.appendChild(projectCard(p)));
  PROJECTS.forEach(p => allGrid.appendChild(projectCard(p)));
  lucide.createIcons(); // Initialize icons
}

// ---- Modal ----
const modalEl = $("#modal");
const modalTitle = $(".modal-title", modalEl);
const modalDesc = $(".modal-desc", modalEl);
const modalTags = $(".tags", modalEl);
const modalLinks = $(".links", modalEl);
const modalMedia = $(".modal-media", modalEl);

function openModal(p) {
  modalTitle.textContent = p.title;
  modalDesc.innerHTML = p.desc;

  modalTags.innerHTML = "";
  const uniqueTags = Array.from(new Set([...p.tech, ...p.categories]));
  uniqueTags.forEach(tag => modalTags.appendChild(el("span", { class: "badge" }, [tag])));

  modalLinks.innerHTML = "";
  if (p.github) modalLinks.appendChild(el("a", { class: "btn outline", href: p.github, target: "_blank" }, [
    el("i", { dataset: { lucide: "github" }, style: "width: 18px; margin-right: 8px;" }), "View Code"
  ]));
  if (p.demo) modalLinks.appendChild(el("a", { class: "btn primary", href: p.demo, target: "_blank" }, [
    el("i", { dataset: { lucide: "external-link" }, style: "width: 18px; margin-right: 8px;" }), p.categories.includes("Web") ? "Live Demo" : "View Dashboard"
  ]));

  modalMedia.innerHTML = "";
  const img = el("img", { src: p.thumb, alt: p.title });
  modalMedia.appendChild(img);

  modalEl.classList.add("open");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeModal() { modalEl.classList.remove("open"); document.body.style.overflow = ""; }
$(".modal-close", modalEl).onclick = closeModal;
$(".modal-backdrop", modalEl).onclick = closeModal;

// ---- Back to Top ----
function setupBackToTop() {
  const btn = el("button", { id: "backToTop", ariaLabel: "Back to top" }, [
    el("i", { dataset: { lucide: "chevron-up" } })
  ]);
  document.body.appendChild(btn);
  lucide.createIcons();

  window.onscroll = () => {
    if (window.scrollY > 500) btn.classList.add("show");
    else btn.classList.remove("show");
  };

  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- Theme toggle ----
function setupTheme() {
  const btn = $("#themeToggle");
  btn.onclick = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    
    // Toggle icons
    $(".theme-icon-sun").style.display = isDark ? "block" : "none";
    $(".theme-icon-moon").style.display = isDark ? "none" : "block";
    lucide.createIcons();
  };
}

// ---- Filters & Reveal ----
function setupFilters() {
  $$(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      $$(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      $$(".project-grid .card").forEach(card => {
        const show = cat === "all" || card.dataset.categories.split("|").includes(cat);
        card.style.display = show ? "" : "none";
      });
    };
  });
}

function setupSearch() {
  const input = $("#projectSearch");
  if (input) {
    input.oninput = (e) => {
      const q = e.target.value.toLowerCase();
      $$(".project-grid .card").forEach(card => {
        const title = card.dataset.title;
        const cats = card.dataset.categories.toLowerCase();
        const show = title.includes(q) || cats.includes(q);
        card.style.display = show ? "" : "none";
      });
    };
  }
}

function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  $$(".reveal").forEach(el => obs.observe(el));
}

function setupResume() {
  const btn = $("#resumeBtn");
  if (CONTACT.resumeUrl) { btn.href = CONTACT.resumeUrl; btn.download = "Atul_Pachnure_Resume.pdf"; }
}

function setupArchiveToggle() {
  const btn = $("#toggleAll");
  const grid = $("#allGrid");
  if (btn && grid) {
    btn.onclick = () => {
      const isCollapsed = grid.classList.contains("collapsed");
      if (isCollapsed) {
        grid.classList.remove("collapsed");
        btn.textContent = "Close Archive";
      } else {
        grid.classList.add("collapsed");
        btn.textContent = "View Archive";
        $("#all").scrollIntoView({ behavior: "smooth" });
      }
    };
  }
}

// ---- Boot ----
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  mountProjects();
  setupFilters();
  setupSearch();
  setupTheme();
  setupReveal();
  setupResume();
  setupBackToTop();
  setupArchiveToggle();
});
