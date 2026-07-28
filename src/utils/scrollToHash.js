export function scrollToHash(hash, { retries = 12, delay = 60 } = {}) {
  if (!hash) return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  let attempt = 0;

  const tryScroll = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    attempt += 1;
    if (attempt < retries) {
      window.setTimeout(tryScroll, delay);
    }
  };

  window.requestAnimationFrame(tryScroll);
}
