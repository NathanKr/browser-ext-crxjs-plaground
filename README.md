<h2>Motivation</h2>
Build a browser extension project with crxjs and use messages

<h2>vanilla-ts</h2>



<h3>create project and show popup</h3>
follow <a href='https://crxjs.dev/vite-plugin/getting-started/vanilla-js/create-project'>this guide</a>
<ol>
<li>

choose typescript
```
npm init vite@latest
```

</li>
<li>

```
pnpm i @crxjs/vite-plugin
```

</li>
<li>
create vite.config.ts

```
export default defineConfig({
  plugins: [crx({ manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
})

```

remark : the server part was added due to an error 'Uncaught (in promise) SyntaxError: Failed to construct 'WebSocket': The URL 'ws://localhost:undefined/' is invalid.' after i clicked few times on the counter in the popup
</li>

<li>Install the extension in chrome</li>


<li>

```
npm run dev
```

</li>
<li>open the extension in the chrome browser and index.html + imorted module will appear</li>
<li>change ts or css file and it will update instantly on the extension popup. This is called HMR</li>
</ol>

<h3>add content script</h3>
continue with <a href='https://crxjs.dev/vite-plugin/getting-started/vanilla-js/add-content-script'>this guide</a>

<ol>
<li>add to manifest.json

```
{
  // other fields...
  "content_scripts": [
    {
      "js": ["src/content.ts"],
      "matches": ["https://www.google.com/*"]
    }
  ]
}
```

</li>

<li>create src/content.ts

```
console.log('content.ts');
console.log(new Date());


```

</li>

<li>navigate to www.google.com and see 'content.ts' and time in the console. no need to make any reload !!!!!!!!!!!</li>

</ol>