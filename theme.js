function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove(
    "default", "light", "grain", "zip", "dawn", "black", "white", "rose",
    "teal", "ice", "glacier", "hamtter", "midnight", "mastodon", 
    "pleroma", "twitter", "classic", "first", "eagles", "mint"
  );

  if (savedTheme) {
    body.classList.add(savedTheme);
    const computedStyle = getComputedStyle(body);
    let navbarColor = computedStyle.getPropertyValue("--navbar");

    if (!navbarColor || !isValidColor(navbarColor)) { //thanks chargpt
      navbarColor = computedStyle.getPropertyValue("--webkit-nav");
    }

    document.querySelector('meta[name="theme-color"]').setAttribute('content', navbarColor);
    console.log(navbarColor);
  }
}

function isValidColor(str) {
  const s = new Option().style;
  s.color = str;
  return s.color !== '';
}

document.addEventListener("DOMContentLoaded", setTheme);