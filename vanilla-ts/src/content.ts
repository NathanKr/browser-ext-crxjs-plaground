import src from './lion-3576045_640.jpg'
import './content.css'

console.log('content.ts');
console.log(new Date());

const html = `
<div class="crx">
  <img src="${chrome.runtime.getURL(src)}" />
  <h1>Nathan Krasney</h1>
</div>
`

const doc = new DOMParser().parseFromString(html, 'text/html')
document.body.append(doc.body.firstElementChild!)