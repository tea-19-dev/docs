const labels = {
  brand: "サッカーワールドカップ日程確認・通知 Docs",
  home: "ホーム",
  privacy: "プライバシーポリシー",
  terms: "利用規約",
};

const pathFor = (page) => {
  const file = page === "terms" ? "terms.html" : page === "privacy" ? "privacy.html" : "";
  return file ? `./${file}` : "./index.html";
};

const currentPage = document.body.dataset.page || "index";

const header = document.createElement("header");
header.className = "site-header";
header.innerHTML = `
  <a class="brand" href="${pathFor("index")}">${labels.brand}</a>
  <nav class="nav-actions" aria-label="ドキュメントナビゲーション">
    <a href="${pathFor("index")}" ${currentPage === "index" ? 'aria-current="true"' : ""}>${labels.home}</a>
    <a href="${pathFor("privacy")}" ${currentPage === "privacy" ? 'aria-current="true"' : ""}>${labels.privacy}</a>
    <a href="${pathFor("terms")}" ${currentPage === "terms" ? 'aria-current="true"' : ""}>${labels.terms}</a>
  </nav>
`;

document.body.prepend(header);
