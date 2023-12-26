document.addEventListener('keydown', (e) => {

  if (e.key === "C" && e.ctrlKey) {
    const title = document.title;
    const url = document.URL;
    window.navigator.clipboard.writeText(`[${url} ${title}]`).then(() => {
      alert('copied to clipboard');
    }).catch((e) => {
      console.error(e)
      alert('failed to copy');
    });
  }
})
