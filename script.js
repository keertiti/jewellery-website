
/* ==========================================
   GEHNE BY JIPPY
   MAIN WEBSITE INTERACTIONS AND GALLERIES
========================================== */


/* ------------------------------------------
   NAVIGATION: DESKTOP + MOBILE
------------------------------------------ */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function closeMobileMenu() {
    if (!menuButton || !nav) return;

    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
}

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuButton.textContent = isOpen ? "×" : "☰";

    });


    // Close menu when visitor clicks outside navigation.

    document.addEventListener("click", event => {

        if (
            nav.classList.contains("open") &&
            !nav.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMobileMenu();
        }

    });


    // Close menu with Escape key.

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    });

}


/* ------------------------------------------
   SMOOTH PAGE NAVIGATION
------------------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const selector = link.getAttribute("href");

        if (!selector || selector === "#") return;

        const target = document.getElementById(selector.slice(1));

        if (!target) return;

        event.preventDefault();

        closeMobileMenu();

        // Update URL without an abrupt jump.

        if (history.pushState) {

            history.pushState(null, "", selector);

        } else {

            location.hash = selector;

        }

        // Smoothly scroll to selected section.

        target.scrollIntoView({

            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth",

            block: "start"

        });

    });

});


/* ------------------------------------------
   COLLECTION FILTERS
------------------------------------------ */

const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Update active filter.

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;


        // Show selected category.

        productCards.forEach(card => {

            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matches;

        });

    });

});


/* ------------------------------------------
   WHATSAPP PRODUCT ENQUIRIES
------------------------------------------ */

document.querySelectorAll(".whatsapp-product").forEach(link => {

    const product = link.dataset.product;

    const message =
        `Hello Gehne by Jippy! I am interested in creating a customised ${product}. I would like to discuss the design, material and available options.`;

    link.href =
        `https://wa.me/917710551617?text=${encodeURIComponent(message)}`;

    link.target = "_blank";

    link.rel = "noopener";

});


/* ------------------------------------------
   AUTOMATIC FOOTER YEAR
------------------------------------------ */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ==========================================
   COLLECTION CATEGORY DATA
========================================== */

const categoryData = {


    // RINGS COLLECTION

    rings: {

        title: "Rings",

        items: [

            "ring-01.mp4",
            "ring-02.mp4",
            "ring-03.mp4",
            "ring-04.mp4",
            "ring-05.mp4",
            "ring-06.mp4",
            "ring-07.mp4",
            "ring-08.mp4",
            "ring-09.mp4",
            "ring-10.mp4",
            "ring-11.mp4",
            "ring-12.mp4",
            "ring-13.mp4",
            "ring-14.mp4",
            "ring-15.mp4",
            "ring-16.mp4",
            "ring-17.mp4",
            "ring-18.mp4",
            "ring-19.mp4",
            "ring-20.mp4",
            "ring-21.mp4",
            "ring-22.mp4",
            "ring-23.mp4",
            "ring-24.mp4",
            "ring-25.mp4",
            "ring-26.mp4",
            "ring-27.mp4",
            "ring-28.mp4",
            "ring-29.mp4",
            "ring-30.mp4",
            "ring-31.mp4",
            "ring-32.mp4",
            "ring-33.mp4",
            "ring-34.mp4",
            "ring-35.mp4",
            "ring-36.mp4",
            "ring-37.mp4",
            "ring-38.mp4",
            "ring-39.mp4",
            "ring-40.mp4",
            "ring-41.mp4",
            "ring-42.mp4",
            "ring-43.mp4",
            "ring-44.mp4",
            "ring-45.mp4",
            "ring-46.mp4",
            "ring-47.mp4",
            "ring-48.mp4",
            "ring-49.mp4",
            "ring-50.mp4",
            "ring-51.mp4",
            "ring-52.mp4",
            "ring-53.mp4",
            "ring-54.mp4",
            "ring-55.mp4",
            "ring-56.mp4",
            "ring-57.mp4",
            "ring-58.mp4",
            "ring-59.mp4",
            "ring-60.mp4",
            "ring-61.mp4",
            "ring-62.mp4",
            "ring-63.mp4",
            "ring-64.mp4",
            "ring-65.mp4",
            "ring-66.mp4",
            "ring-67.mp4",
            "ring-68.mp4",
            "ring-69.mp4",
            "ring-70.mp4",
            "ring-71.mp4",
            "ring-72.mp4",
            "ring-73.mp4",
            "ring-74.mp4",
            "ring-75.mp4",
            "ring-76.mp4",
            "ring-77.mp4",
            "ring-78.mp4",
            "ring-79.mp4",
            "ring-80.mp4",
            "ring-81.mp4",
            "ring-82.mp4",
            "ring-83.mp4",
            "ring-84.mp4",
            "ring-85.mp4",
            "ring-86.mp4",
            "ring-87.mp4"

        ].map(filename => ({

            type: "video",

            src: `assets/videos/rings/${filename}`

        }))

    },


    // NECKLACES COLLECTION

    necklaces: {

        title: "Necklaces",

        items: [

            "necklace-01.mp4",
            "necklace-02.mp4",
            "necklace-03.mp4",
            "necklace-04.mp4",
            "necklace-05.mp4",
            "necklace-06.mp4",
            "necklace-07.mp4",
            "necklace-08.mp4",
            "necklace-09.mp4",
            "necklace-10.mp4",
            "necklace-11.mp4",
            "necklace-12.mp4",
            "necklace-13.mp4",
            "necklace-14.mp4",
            "necklace-15.mp4"

        ].map(filename => ({

            type: "video",

            src: `assets/videos/necklaces/${filename}`

        }))

    },


    // PENDANTS COLLECTION

    pendants: {

        title: "Pendants",

        items: [

            "pendant-01.mp4"

        ].map(filename => ({

            type: "video",

            src: `assets/videos/pendants/${filename}`

        }))

    },


    // BANGLES COLLECTION

    bangles: {

        title: "Bangles",

        items: [

            "bangle-01.mp4",
            "bangle-02.mp4",
            "bangle-03.mp4"

        ].map(filename => ({

            type: "video",

            src: `assets/videos/bangles/${filename}`

        }))

    },


    // EARRINGS COLLECTION

    earrings: {

        title: "Earrings",

        items: [

            "earring-01.mp4",
            "earring-02.mp4",
            "earring-03.mp4",
            "earring-04.mp4",
            "earring-05.mp4",
            "earring-06.mp4",
            "earring-07.mp4",
            "earring-08.mp4",
            "earring-09.mp4"

        ].map(filename => ({

            type: "video",

            src: `assets/videos/earrings/${filename}`

        }))

    }

};


/* ==========================================
   CATEGORY GALLERY POPUP
========================================== */

const categoryModal = document.getElementById("categoryModal");
const categoryTitle = document.getElementById("categoryTitle");
const categoryGallery = document.getElementById("categoryGallery");


/* ------------------------------------------
   GALLERY VIDEO AUTOPLAY OBSERVER
   Play videos when visible.
   Pause videos when scrolled away.
------------------------------------------ */

let galleryVideoObserver = null;

function setupGalleryVideoAutoplay() {

    if (!categoryGallery) return;

    // Remove any previous observer.

    if (galleryVideoObserver) {
        galleryVideoObserver.disconnect();
    }

    // Autoplay only videos visible in the gallery.

    galleryVideoObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            const video = entry.target;

            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {

                video.play().catch(() => {});

            } else {

                video.pause();

            }

        });

    }, {

        threshold: [0, 0.5, 1]

    });

    categoryGallery.querySelectorAll("video").forEach(video => {

        galleryVideoObserver.observe(video);

    });

}


/* ------------------------------------------
   OPEN A CATEGORY
------------------------------------------ */

function openCategory(category) {

    const data = categoryData[category];

    // Check if category exists.

    if (
        !data ||
        !categoryModal ||
        !categoryTitle ||
        !categoryGallery
    ) {
        return;
    }

    categoryTitle.textContent = data.title;

    categoryGallery.innerHTML = "";


    // Create gallery items.

    data.items.forEach(item => {

        if (!item.type || !item.src) {
            return;
        }

        const mediaBox = document.createElement("div");

        mediaBox.className = "category-gallery-item";


        // IMAGE GALLERY

        if (item.type === "image") {

            const img = document.createElement("img");

            img.src = item.src;

            img.alt = `${data.title} design`;

            img.loading = "lazy";

            mediaBox.appendChild(img);

        }


        // VIDEO GALLERY

        if (item.type === "video") {

            const video = document.createElement("video");

            video.controls = true;

            video.muted = true;

            video.playsInline = true;
            video.loop = true;

            video.preload = "metadata";


            // Maintain original video dimensions.

            video.addEventListener("loadedmetadata", () => {

                if (video.videoWidth && video.videoHeight) {

                    mediaBox.style.aspectRatio =
                        `${video.videoWidth} / ${video.videoHeight}`;

                }

            });


            // Add poster image if available.

            if (item.poster) {

                video.poster = item.poster;

            }


            const source = document.createElement("source");

            source.src = item.src;

            source.type = "video/mp4";

            video.appendChild(source);

            mediaBox.appendChild(video);

        }


        categoryGallery.appendChild(mediaBox);

    });


    // Start autoplay for visible videos.

    setupGalleryVideoAutoplay();


    // Empty gallery message.

    if (!categoryGallery.children.length) {

        const emptyMessage = document.createElement("p");

        emptyMessage.className = "gallery-empty";

        emptyMessage.textContent =
            "Designs for this collection will be added soon.";

        categoryGallery.appendChild(emptyMessage);

    }


    // Open popup.

    categoryModal.classList.add("is-open");

    categoryModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");


    // Focus close button.

    const closeButton =
        categoryModal.querySelector(".category-close");

    if (closeButton) {

        closeButton.focus();

    }

}


/* ------------------------------------------
   CLOSE THE CATEGORY POPUP
------------------------------------------ */

function closeCategory() {

    if (!categoryModal || !categoryGallery) {
        return;
    }

    // Disconnect autoplay observer.

    if (galleryVideoObserver) {

        galleryVideoObserver.disconnect();

        galleryVideoObserver = null;

    }

    categoryModal.classList.remove("is-open");

    categoryModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");


    // Pause and reset videos when popup closes.

    categoryGallery.querySelectorAll("video").forEach(video => {

        video.pause();

        video.currentTime = 0;

    });

}


/* ------------------------------------------
   CATEGORY POSTER CLICK EVENTS
------------------------------------------ */

document.querySelectorAll("[data-open-category]").forEach(button => {

    button.addEventListener("click", () => {

        openCategory(button.dataset.openCategory);

    });

});


/* ------------------------------------------
   CLOSE BUTTON AND BACKDROP CLICK
------------------------------------------ */

document.querySelectorAll("[data-close-category]").forEach(element => {

    element.addEventListener("click", closeCategory);

});


/* ------------------------------------------
   CLOSE POPUP WITH ESCAPE KEY
------------------------------------------ */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        categoryModal &&
        categoryModal.classList.contains("is-open")
    ) {

        closeCategory();

    }

});


/* ==========================================
   HOME FULL SCREEN VIDEO SLIDER
   - swipe / drag to change video
   - next video starts when one ends
   - arrows, progress bars, keyboard arrows
========================================== */

(function () {

    const slider = document.querySelector("[data-hero-slider]");

    if (!slider) return;

    const track   = slider.querySelector(".hero-slides");
    const videos  = Array.from(slider.querySelectorAll("video"));
    const bars    = Array.from(slider.querySelectorAll(".hero-bar"));
    const prevBtn = slider.querySelector(".hero-prev");
    const nextBtn = slider.querySelector(".hero-next");
    const fsBtn   = slider.querySelector(".hero-fs");

    const total = videos.length;

    if (!track || !total) return;

    let index = 0;
    let inView = true;
    let failed = 0;

    // Swipe / drag state.

    let dragging = false;
    let startX = 0;
    let deltaX = 0;


    /* ---------- PLAY / PAUSE ---------- */

    function playCurrent() {

        if (!inView || document.hidden) return;

        const attempt = videos[index].play();

        if (attempt && attempt.catch) {
            attempt.catch(() => {});
        }

    }

    function pauseAll() {

        videos.forEach(video => video.pause());

    }


    /* ---------- PROGRESS BARS ---------- */

    function updateBars() {

        bars.forEach((bar, i) => {

            if (i < index) {

                bar.style.setProperty("--p", 1);

            } else if (i > index) {

                bar.style.setProperty("--p", 0);

            }

        });

    }

    function updateProgress() {

        const video = videos[index];

        if (!video.duration || !bars[index]) return;

        bars[index].style.setProperty(
            "--p",
            Math.min(video.currentTime / video.duration, 1)
        );

    }


    /* ---------- GO TO A SLIDE ---------- */

    function goTo(i) {

        index = (i + total) % total;

        track.style.transform = `translateX(${-index * 100}%)`;

        videos.forEach((video, k) => {

            if (k !== index) {

                video.pause();

                video.currentTime = 0;

            }

        });

        videos[index].currentTime = 0;

        bars.forEach((bar, k) => {

            bar.setAttribute(
                "aria-current",
                k === index ? "true" : "false"
            );

        });

        updateBars();

        if (bars[index]) {

            bars[index].style.setProperty("--p", 0);

        }

        playCurrent();

    }


    /* ---------- VIDEO EVENTS ---------- */

    videos.forEach((video, i) => {

        // When a video ends, move to the next one.

        video.addEventListener("ended", () => {

            if (i === index) {

                failed = 0;

                goTo(index + 1);

            }

        });

        video.addEventListener("timeupdate", () => {

            if (i === index) {

                updateProgress();

            }

        });

        // If a video file is missing, skip to the next one.

        video.addEventListener("error", () => {

            failed += 1;

            if (i === index && failed < total) {

                goTo(index + 1);

            }

        });

    });


    /* ---------- BUTTONS ---------- */

    if (prevBtn) {

        prevBtn.addEventListener("click", () => goTo(index - 1));

    }

    if (nextBtn) {

        nextBtn.addEventListener("click", () => goTo(index + 1));

    }

    bars.forEach((bar, i) => {

        bar.addEventListener("click", () => goTo(i));

    });

    slider.addEventListener("keydown", event => {

        if (event.key === "ArrowLeft") goTo(index - 1);

        if (event.key === "ArrowRight") goTo(index + 1);

    });


    /* ---------- SWIPE / DRAG ---------- */

    slider.addEventListener("pointerdown", event => {

        // Don't start a swipe on buttons or links.

        if (event.target.closest("button, a")) return;

        dragging = true;

        startX = event.clientX;

        deltaX = 0;

        track.style.transition = "none";

        slider.setPointerCapture(event.pointerId);

    });

    slider.addEventListener("pointermove", event => {

        if (!dragging) return;

        deltaX = event.clientX - startX;

        track.style.transform =
            `translateX(calc(${-index * 100}% + ${deltaX}px))`;

    });

    function endDrag() {

        if (!dragging) return;

        dragging = false;

        track.style.transition = "";

        if (Math.abs(deltaX) > 50) {

            goTo(index + (deltaX < 0 ? 1 : -1));

        } else {

            // Not swiped far enough: slide back.

            track.style.transform = `translateX(${-index * 100}%)`;

        }

        deltaX = 0;

    }

    slider.addEventListener("pointerup", endDrag);

    slider.addEventListener("pointercancel", endDrag);


    /* ---------- PAUSE WHEN NOT VISIBLE ---------- */

    if ("IntersectionObserver" in window) {

        new IntersectionObserver(entries => {

            inView = entries[0].isIntersecting;

            if (inView) {

                playCurrent();

            } else {

                pauseAll();

            }

        }, { threshold: 0.25 }).observe(slider);

    }

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            pauseAll();

        } else {

            playCurrent();

        }

    });


    /* ---------- START ---------- */

    goTo(0);

})();


/* ------------------------------------------
   RETURN TO HOME WHEN PAGE IS REFRESHED
------------------------------------------ */

window.addEventListener("load", function () {

    if (window.location.hash) {

        window.location.replace(
            window.location.pathname + window.location.search
        );

    }

});
document.querySelectorAll(".gallery-item, .category-gallery-item").forEach(item => {
    item.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;

        document.querySelectorAll(
            ".gallery-item.show-actions, .category-gallery-item.show-actions"
        ).forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove("show-actions");
            }
        });

        this.classList.toggle("show-actions");
    });
});