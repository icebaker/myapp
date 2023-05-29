<script>
  import { onMount } from 'svelte';

  import hljs from 'highlight.js';
  import * as marked from 'marked';
  import { markedHighlight } from 'marked-highlight';

  export let code;

  marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }));

  let containerElement;

  const renderCode = () => {
    if(containerElement) containerElement.innerHTML = marked.parse(code);
  }

  onMount(() => { renderCode(); });

  $: { if (code) renderCode(); }
</script>

<div bind:this={containerElement} class="hljs"></div>
