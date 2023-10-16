function setTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const body = document.body;
  body.classList.remove(
    "default", "light", "grain", "zip", "dawn", "black", "rose",
    "teal", "ice", "glacier", "hamtter", "midnight", "mastodon", 
    "pleroma", "twitter", "x", "classic", "first", "eagles"
  );

  if (savedTheme) {
    body.classList.add(savedTheme);
    const computedStyle = getComputedStyle(body);
    let navbarColor = computedStyle.getPropertyValue("--navbar");

    if (!navbarColor || !isValidColor(navbarColor)) { //thanks chargpt
      navbarColor = "#000";
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