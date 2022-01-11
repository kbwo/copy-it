// chrome.runtime.onInstalled.addEventListener(() => {
//   chrome.storage.sync.set({first: 'Meta', second: 'Shift', third: 'c'});
//   console.log('Default key set to shift+cmd+c');
// })

document.addEventListener('keydown', (e) => {
  let keys = [];
  let shiftIncluded = false;
  let ctrlIncluded = false;
  let metaIncluded = false;
  let altIncluded = false;
  // chrome.storage.sync.get(['first', 'second', 'third'], (result) => {
  //   keys = Object.values(result);
  // })

  if (keys.includes('Shift')) {
    shiftIncluded = true;
  }

  if (keys.includes('control')) {
    ctrlIncluded = true;
  }

  if (keys.includes('Meta')) {
    metaIncluded = true;
  }

  if (keys.includes('Alt')) {
    altIncluded = true;
  }

  let value = keys.filter(k => (
    k !== 'Shift' && k !== 'control' && k !== 'Meta' && k !== 'Alt'
  ))

  if (!value.length) {
    value = 'c';
    shiftIncluded = true;
    metaIncluded = true;
  }

  if (e.key === value[0] && e.metaKey === metaIncluded && e.shiftKey === shiftIncluded && e.ctrlKey === ctrlIncluded && e.altKey === altIncluded) {
    const title = document.title;
    const url = document.URL;
    window.navigator.clipboard.writeText(`[${title}](${url})`).then(() => {
      alert('copied to clipboard');
    }).catch((e) => {
      console.error(e)
      alert('failed to copy');
    });
  }
})
