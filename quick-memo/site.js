const labels = {
  en: {
    brand: "3 Seconds Memo Docs",
    home: "Home",
    switchLabel: "日本語",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  ja: {
    brand: "3秒メモ Docs",
    home: "ホーム",
    switchLabel: "English",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
};

const pathFor = (lang, page) => {
  const file = page === "terms" ? "terms.html" : page === "privacy" ? "privacy.html" : "";
  if (document.body.dataset.page === "home") {
    return file ? `./${lang}/${file}` : `./${lang}/index.html`;
  }
  return file ? `../${lang}/${file}` : `../${lang}/index.html`;
};

const currentLang = document.body.dataset.lang || "ja";
const currentPage = document.body.dataset.page || "index";
const otherLang = currentLang === "ja" ? "en" : "ja";
const text = labels[currentLang];

const header = document.createElement("header");
header.className = "site-header";
header.innerHTML = `
  <a class="brand" href="${currentPage === "home" ? "./index.html" : "../index.html"}">${text.brand}</a>
  <nav class="nav-actions" aria-label="Language and document navigation">
    <a href="${pathFor(otherLang, currentPage)}">${labels[currentLang].switchLabel}</a>
    <a href="${pathFor(currentLang, "privacy")}" ${currentPage === "privacy" ? 'aria-current="true"' : ""}>${text.privacy}</a>
    <a href="${pathFor(currentLang, "terms")}" ${currentPage === "terms" ? 'aria-current="true"' : ""}>${text.terms}</a>
  </nav>
`;

document.body.prepend(header);
