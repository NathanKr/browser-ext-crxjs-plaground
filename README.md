<h2>Motivation</h2>
Build a browser extension project with crxjs and use messages

<h2>vanilla-ts</h2>
follow <a href='https://crxjs.dev/vite-plugin/getting-started/vanilla-js/create-project'>this guide</a>
<ol>
<li>

choose typescript
```
npm i vite@latest
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
</ol>
