<script>
  import { onMount } from 'svelte';

  import hljs from 'highlight.js';
  import * as marked from 'marked';

  export let code;

  marked.setOptions({
    highlight: function(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(code, { language: validLanguage }).value;
    }
  });

  let containerElement;

  const renderCode = () => {
    if(containerElement) containerElement.innerHTML = marked.parse(code);
  }

  onMount(() => { renderCode(); });

  $: { if (code) renderCode(); }
</script>

<div bind:this={containerElement} class="hljs"></div>
