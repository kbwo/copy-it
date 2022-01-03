const copyIt = document.getElementById('copy-it');
copyIt.addEventListener('click', () => {
  const title = document.title;
  const url = document.URL;
  navigator.clipboard.writeText(`${title}\n${url}`);
  alert('copied to clipboard');
})
