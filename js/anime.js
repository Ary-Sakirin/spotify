// Best viewed in full screen mode: https://codepen.io/jackiezen/full/MWBBawb

// Jackie Zen in collaboration with Daniel Wong

// DOM elements
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
    {
        album: "$kull the Album",
        emblem: "Demon J+O Move On HOT BOY",
        "bg-color": ["#53254C", "#0D1827"],
        "accent-color": "#7C2E70",
        url:
            "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1623385822768-L017WWRMN6CTG1DSJR4C/2021-03-31+13.27.35.jpg?format=500w",
        spotify:
            "https://open.spotify.com/embed/album/4a5AhX1pjgOb3JrDYnqIgh?utm_source=generator"
    },
    {
        album: "SKULL 2 (Season1)",
        emblem: "BOK-KALO KING Young-Man",
        "bg-color": ["#66493D", "#32130F"],
        "accent-color": "#B4653C",
        url: "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1623386050338-YKSFW4H4JBI1QSIQCCEK/2021-05-31+16.20.29.jpg?format=500w",
        spotify:
            "https://open.spotify.com/embed/album/4gYa5p3OmXmdrxzOT8pMh0?utm_source=generator"
    },
    {
        album: "Solo Again",
        emblem: "solo again 2022",
        "bg-color": ["#535353", "#181818"],
        "accent-color": "#898989",
        url: "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1619811659291-7JVI082ZNGHS98W9J9F2/IMG_1893.jpg?format=300w",
        spotify:
            "https://open.spotify.com/embed/album/6VcJZGcjwhlNfKXrQY2YTG?utm_source=generator"
    },
    {
        album: "Chapter 1",
        emblem: "Chapter1 Vannda 2023",
        "bg-color": ["#BDADB0", "#7A4870"],
        "accent-color": "#873D78",
        url:
            "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1619812562069-ZX1M01Q6UAN3XPMZQSZF/T2R+Fuji+Film+Shots-124.jpg?format=500w",
        spotify:
            "https://open.spotify.com/embed/album/3N7MU5CIi3QWvATuy0i9ft?utm_source=generator"
    },
    {
        album: "Elevator",
        emblem: "Elevator vannda 2022",
        "bg-color": ["#242424", "#070707"],
        "accent-color": "#505050",
        url:
            "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1619813837629-V3O0DJ9ZFKHC4511UOYL/Poster+Detailed+Shots+%286+of+8%29.jpg?format=500w",
        spotify:
            "https://open.spotify.com/embed/track/7EAl1bN0SRejcO2uwWxunY?utm_source=generator"
    },
    {
        album: "Queen BEE",
        emblem: "Queen BEE 2021",
        "bg-color": ["#A88172", "#653E32"],
        "accent-color": "#DF9882",
        url: "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1623386304253-CJFGB2QBMNNXTVJB1E0G/2021-03-31+13.28.21.jpg?format=500w",
        spotify:
            "https://open.spotify.com/embed/track/1IUhNvwC67VRb2j6Hcpeyf?utm_source=generator"
    },
    {
        album: "J+O II",
        emblem: "j+o II 2022",
        "bg-color": ["#660E11", "#210402"],
        "accent-color": "#9E4E23",
        url: "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1619812443785-R5A4PY6I9LH0OP88ZI2G/Lyric+Video+%281+of+1%29-5.jpg?format=300w",
        spotify:
            "https://open.spotify.com/embed/track/4hRPCq69lIcXRXa7GZNnGr?utm_source=generator"
    },
    {
        album: "Run the Town",
        emblem: "F.HERO VannDa 1MILL SPRITE",
        "bg-color": ["#62252A", "#4B0102"],
        "accent-color": "#E50619",
        url:
            "https://i.ytimg.com/vi/cdt7WfRVXVk/maxresdefault.jpg",
        spotify:
            "https://open.spotify.com/embed/track/5a3O0geBieCTCeZ0iptO0B?utm_source=generator"
    },
    {
        album: "BONG ft OG BOBBY",
        emblem: "OG BOBBY & VANNDA",
        "bg-color": ["#a8834a", "#644323"],
        "accent-color": "#CEA766",
        url: "https://liftedasia.com/assets/blog/bong-copy.webp",
        spotify:
            "https://open.spotify.com/embed/track/7BalknaAGYtzUjIGOSkGBr?utm_source=generator"
    },

    {
        album: "Time to Rice",
        emblem: "feat master kong nay",
        "bg-color": ["#6F6F4C", "#34351E"],
        "accent-color": "#B2C15E",
        url:
            "https://images.squarespace-cdn.com/content/v1/592657d1ebbd1a74b7b01ebb/1619811613279-XTGV1OUMDP0TVYH0KPXN/BTS+T2R+first+pass_-73.jpg?format=300w",
        spotify:
            "https://open.spotify.com/embed/track/4IbrSzwqYvwSDpEQIkkvU7?utm_source=generator"
    }
];

// Add Event Listeners
scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
    heroDiv.classList.remove("album-transition");
    document.addEventListener("keydown", handleKeyScroll);
    scrollLeft.disabled = false;
    scrollRight.disabled = false;
    scrollLeft.classList.remove("key-press-hover-left");
    scrollRight.classList.remove("key-press-hover-right");

    for (const text of texts) text.classList.add("show-texts");
});

// Event Listeners
const handleClickScroll = (val) => {
    if (index + val >= 0 && index + val < albums.length) {
        updateDisplay((index += val));
    }
};

const handleKeyScroll = (e) => {
    if (e.key == "ArrowLeft") {
        scrollLeft.classList.add("key-press-hover-left");
        handleClickScroll(-1);
    }
    if (e.key == "ArrowRight") {
        scrollRight.classList.add("key-press-hover-right");
        handleClickScroll(1);
    }
};

// Main Function
let index = 0;

const updateDisplay = (index) => {
    // SET DELIMITER
    let DELIMITER = "";

    // delcare album specified by index
    const album = albums[index];

    // reset all animations and disable button
    for (const text of texts) text.classList.remove("show-texts");
    emblemDiv.innerHTML = "";
    scrollLeft.disabled = true;
    scrollRight.disabled = true;
    document.removeEventListener("keydown", handleKeyScroll);

    // add css classes, texts, and styles
    sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
    bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
    heroDiv.style.backgroundImage = `url(${album.url})`;
    albumTitleSpan.textContent = album.album;
    spotifyWidget.src = album.spotify;

    const number = albums.length - index;
    albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
    albumNum.style.color = album["accent-color"];

    // hide arrows
    if (index === 0) scrollLeft.classList.add("hide-arrow");
    else scrollLeft.classList.remove("hide-arrow");

    if (index === 9) scrollRight.classList.add("hide-arrow");
    else scrollRight.classList.remove("hide-arrow");

    // create emblem
    createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
        emblemDiv.append(node)
    );

    // add final animations
    heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
    const spans = [];

    string = string.trim().replaceAll(" ", delimiter) + delimiter;
    const numChars = string.length;
    const degVal = 90 / (numChars / 4);

    string.split("").forEach((char, idx) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.transform = `rotate(${180 - degVal * idx}deg)`;
        if (char === delimiter) span.style.color = albums[index]["accent-color"];
        spans.push(span);
    });

    return spans;
};

// Start Script
updateDisplay(index);
