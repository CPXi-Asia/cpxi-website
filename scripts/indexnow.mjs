// Tells Bing (and other IndexNow engines) that pages changed, so new and
// updated URLs get recrawled within minutes instead of days. ChatGPT search
// leans on Bing's index, so this matters for AI visibility too.
//
// Run after a production deploy has gone live:
//   node scripts/indexnow.mjs                 # every URL in the live sitemap
//   node scripts/indexnow.mjs /faq /services  # specific paths only
//
// The key is public by design: Bing checks it at https://www.cpxi-asia.com/<key>.txt
// to confirm we own the domain.
const HOST = "www.cpxi-asia.com";
const KEY = "54e47c754cc7b1b17824b141d46273a3";

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
  urls = paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});
console.log(`IndexNow: submitted ${urls.length} URL(s), HTTP ${res.status}`);
if (res.status >= 400) {
  console.log(await res.text());
  process.exit(1);
}
