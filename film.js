document.addEventListener("DOMContentLoaded", function () {
  let i = 0;
  let autoSlideInterval;

  // تهيئة الـ nav و footer
  document.querySelectorAll("nav").forEach(nav => {
    nav.innerHTML = `
    
        <div class="list">
            <div class="list1">
                <ul>
                    <li class="li">
                        <svg class="icon" width="60" height="66" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" fill="none" />
                            <line x1="10" y1="5" x2="40" y2="5" stroke="currentColor" stroke-width="4"
                                stroke-linecap="round" />
                            <line x1="15" y1="15" x2="45" y2="15" stroke="currentColor" stroke-width="4"
                                stroke-linecap="round" />
                            <line x1="20" y1="25" x2="50" y2="25" stroke="currentColor" stroke-width="4"
                                stroke-linecap="round" />
                        </svg>
                    </li>
                    <li >
                        <ul class="li2">
                            <li><a href="index.html">HOME</a></li>
                            <li>
                                <a id="home-genre">Genre</a>
                                <ul class="genre">
                                    <li><a href="list.html?genre=Action">Action</a></li>
                                    <li><a href="list.html?genre=Animation">Animation</a></li>
                                    <li><a href="list.html?genre=Comedy">Comedy</a></li>
                                    <li><a href="list.html?genre=Drama">Drama</a></li>
                                    <li><a href="list.html?genre=Family">Family</a></li>
                                    <li><a href="list.html?genre=Fantasy">Fantasy</a></li>
                                    <li><a href="list.html?genre=Adventure">Adventure</a></li>
                                    <li><a href="list.html?genre=Romance">Romance</a></li>
                                    <li><a href="list.html?genre=War">War</a></li>
                                    <li><a href="list.html?genre=Crime">Crime</a></li>
                                </ul>
                            </li>
                            <li><a href="list.html?type=film">Movie</a></li>
                            <li><a href="list.html?type=series">Series</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="iconb">
                    <!-- الخلفية سوداء -->

                    <!-- حرف R -->
                    <text x="18" y="70" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="bold"
                        fill="#E50914">
                        R
                    </text>

                    <!-- حرف Z -->
                    <text x="48" y="70" class="text" font-family="Arial, Helvetica, sans-serif" font-size="48"
                        font-weight="bold" fill="black" id="z">
                        Z
                    </text>
                </svg>
                <svg width="100" height="100"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="lgogow">
                    <rect  fill="white" />
                    <text x="18" y="70" font-family="Arial, sans-serif" font-size="48" font-weight="bold">
                        <tspan fill="red">R</tspan>
                        <tspan fill="black">Z</tspan>
                    </text>
                </svg>

            </div>
        </div>
  <div class="search-box">
  <input type="search" id="searchInput" placeholder="Search movies, series..." aria-label="Search" />
  <button class="search-btn" aria-label="Search">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </button>
  <div class="result-serch" id="results"></div>
</div>
        <div class="dark">

            <svg class="moon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="800px" height="800px" viewBox="-5 0 32 32"
                version="1.1">
                <title>moon</title>
                <desc>Created with Sketch Beta.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-575.000000, -829.000000)"
                        fill="red">
                        <path
                            d="M586.256,845 C586.256,838.1 590.735,832.236 597,829.991 C595.243,829.361 593.353,829 591.372,829 C582.33,829 575,836.164 575,845 C575,853.837 582.33,861 591.372,861 C593.353,861 595.243,860.639 597,860.009 C590.735,857.764 586.256,851.901 586.256,845"
                            id="moon" sketch:type="MSShapeGroup"></path>
                    </g>
                </g>
            </svg>
            <svg class="soleil" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16"
                fill="none">
                <path d="M7 3V0H9V3H7Z" fill="#000000" />
                <path d="M9 13V16H7V13H9Z" fill="#000000" />
                <path
                    d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                    fill="#000000" />
                <path d="M0 9H3V7H0V9Z" fill="#000000" />
                <path d="M16 7H13V9H16V7Z" fill="#000000" />
                <path d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z"
                    fill="#000000" />
                <path d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z"
                    fill="#000000" />
                <path d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z"
                    fill="#000000" />
                <path d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z"
                    fill="#000000" />
            </svg>
        </div>    
    `;
  });

  document.querySelectorAll("footer").forEach(footer => {
    footer.innerHTML = `
      <img src="logo.svg" alt="" >
      <p style="color: white;margin-left: 3vw;padding: 2vw;width: 90vw;text-align: center;" id='p_footer'>
        ReelZone is top of free streaming website, where to watch movies online free without registration
        required. With a big database and great features, we're confident ReelZone is the best free movies
        online website in the space that you can't simply miss!
        <div class="svg-media"></div>
      </p>
    `;
  });

  // دالة التمرير (Slider)
  function scrol() {
    const buttons = document.querySelectorAll('.scrol');
    const slideIds = ['div-scl', 'div-scl2', 'div-scl3', 'div-scl4', 'div-scl5', 'div-scl6'];
    const slides = slideIds.map(id => document.getElementById(id)).filter(el => el !== null);

    function activateSlide(index) {
      buttons.forEach((btn, idx) => {
        btn.style.backgroundColor = (idx === index) ? 'black' : '#ccc';
        btn.style.color = (idx === index) ? 'white' : 'black';
      });
      slides.forEach((slide, idx) => {
        if (slide) slide.style.order = (idx === index) ? 0 : idx + 1;
      });
      i = index;
    }

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        activateSlide(index);
        resetAutoSlide();
      });
    });

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        i++;
        if (i >= slides.length) i = 0;
        activateSlide(i);
      }, 8000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    activateSlide(0);
    startAutoSlide();
  }
  scrol();

  // القوائم (Genre and Menu)
  const homeGenre = document.querySelector("#home-genre");
  const genre = document.querySelector(".genre");
  const listIcon = document.querySelector("li svg");
  const li2 = document.querySelector(".li2");

  homeGenre.addEventListener("click", (e) => {
    e.stopPropagation();
    genre.style.display = "block";
  });

  listIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    li2.style.display = (li2.style.display === "flex") ? "none" : "flex";
  });

  document.addEventListener("click", (e) => {
    if (!homeGenre.contains(e.target) && !genre.contains(e.target)) {
      genre.style.display = "none";
    }
    if (!listIcon.contains(e.target) && !li2.contains(e.target)) {
      li2.style.display = "none";
    }
  });

  // الوضع الليلي / النهاري
  let darkMode = localStorage.getItem("mode");
  if (darkMode === null) {
    darkMode = 1;
  } else {
    darkMode = Number(darkMode);
  }

  function applyDarkMode() {
    const container = document.querySelector(".container");
    const z = document.querySelector("#z");
    const soleil = document.querySelector(".soleil");
    const moon = document.querySelector(".moon");
    const lgogow = document.querySelector(".lgogow");
    const iconb = document.querySelector(".iconb");
    const footer = document.querySelector("footer");
    const filmtitle = document.querySelectorAll("#film-title, .list-title");
    const moveh = document.querySelectorAll(".move");

    const textElements = document.querySelectorAll(
      "h2:not(#bbdy h2, #div-scl h2, #div-scl2 h2, #div-scl3 h2, #div-scl4 h2, #div-scl5 h2, #div-scl6 h2, .list-title),.mn a h4, p:not(#div-scl p, #div-scl2 p, #div-scl3 p, #div-scl4 p, #div-scl5 p, #div-scl6 p), h4:not(#mayalso h4,.list-title h4,mm h4,.you-want h4,.mm h4)"
    );
    const ghg=document.querySelectorAll(".mn a h4")
    if (darkMode % 2 === 0) {
      // Light Mode
      document.body.style.backgroundColor = "white";
      if (container) container.style.backgroundColor = "white";
      if (z) z.style.fill = "black";
      if (soleil) soleil.style.display = "block";
      if (moon) moon.style.display = "none";
      if (lgogow) lgogow.style.display = "block";
      if (iconb) iconb.style.display = "none";
      if (footer) footer.style.backgroundColor = "#86868621";
      ghg.forEach(e => e.style.color = "black");
      textElements.forEach(e => e.style.color = "black");
      document.body.classList="darkn"
    } else {
      // Dark Mode
      document.body.style.backgroundColor = "black";
      if (container) container.style.backgroundColor = "black";
      if (z) z.style.fill = "white";
      if (soleil) soleil.style.display = "none";
      if (moon) moon.style.display = "block";
      if (lgogow) lgogow.style.display = "none";
      if (iconb) iconb.style.display = "block";
      if (footer) footer.style.backgroundColor = "black";
      ghg.forEach(e => e.style.color = "white");
      textElements.forEach(e => e.style.color = "white");
      document.body.classList.remove("darkn")
    }

    // عناوين الأفلام والـ hover effects
    filmtitle.forEach(title => title.style.color = "goldenrod");

    if (darkMode % 2 === 0) {
      moveh.forEach(move => {
        move.addEventListener("mouseenter", () => {
          move.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.48)";
        });
        move.addEventListener("mouseleave", () => {
          move.style.boxShadow = "none";
        });
      });
    } else {
      moveh.forEach(move => {
        move.addEventListener("mouseenter", () => {
          move.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.295)";
          move.style.zIndex = "5";
        });
        move.addEventListener("mouseleave", () => {
          move.style.boxShadow = "none";
          move.style.zIndex = "1";
        });
      });
    }
  }
  applyDarkMode();
  function toggleDarkMode() {
    darkMode++;
    localStorage.setItem("mode", darkMode);
    applyDarkMode();
  }



  document.querySelectorAll(".dark").forEach(e => {
    e.addEventListener("click", () => {
      toggleDarkMode();
    });
  });

  // بحث الأفلام
  const searchInput = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("results");

  let films = [];

  fetch("film.json")
    .then(res => res.json())
    .then(data => {
      films = data;
    })
    .catch(err => console.error("خطأ في تحميل الفيلم:", err));

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (query.length > 0) {
      const filtered = films.filter(film =>
        film.title.toLowerCase().includes(query)
      );

      if (filtered.length > 0) {
        resultsContainer.style.display = "block";
        filtered.forEach(film => {
          const item = document.createElement("div");
          item.classList.add("result-item");
          let link = `move.html?id=${film.id}`;

          if (film.type && film.type.toLowerCase() === "series" && film.linck) {
            if (!film.linck.startsWith("http://") && !film.linck.startsWith("https://")) {
              link = "https://" + film.linck;
            } else {
              link = film.linck;
            }
          }

          item.innerHTML = `
            <a href="${link}">
              <div class="result-item-content">
                <img src="${film.img}" alt="${film.title}">
                <h5 class='h-result'>${film.title}</h5>
              </div>
            </a>
          `;

          resultsContainer.appendChild(item);
        });
      } else {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = "<div style='padding:10px;'>لا توجد نتائج</div>";
      }
    } else {
      resultsContainer.style.display = "none";
    }
  });

  // إخفاء نتائج البحث عند الضغط خارجها
  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.style.display = "none";
    }
  });

  // زر البحث
  const searchBtns = document.querySelectorAll(".search-btn");
  searchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const searchInputVal = searchInput.value.trim();
      if (searchInputVal !== "") {
        window.location.href = `list.html?title=${encodeURIComponent(searchInputVal)}`;
      }
    });
  });

});

