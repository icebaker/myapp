<script>
  import 'highlight.js/styles/base16/material-darker.css';

  import Raw from '../versions/Raw.svelte'
  import PureHighlight from '../versions/PureHighlight.svelte'
  
  import InnerLegacy from '../versions/inner/Legacy.svelte'
  import InnerNew from '../versions/inner/New.svelte'

  import HTMLLegacy from '../versions/html/Legacy.svelte'
  import HTMLNew from '../versions/html/New.svelte'

  let sourceCode = 'IO.puts("Hello, world!")';
  let markdownSourceCode = `\`\`\`elixir\n${sourceCode}\n\`\`\``;

  const newCode = () => {
    sourceCode = `IO.puts("Hello, world! [${Math.random().toString(36).substring(2)}]")`;
    markdownSourceCode = `\`\`\`elixir\n${sourceCode}\n\`\`\``;
  }
</script>

<div class="container">
  <h1>marked-highlight</h1>

  <br>

  <button on:click={newCode} type="button" class="btn btn-primary">New Code</button>

  <br><br>

  <div class="row">
    <div class="col-6">
      <h3>innerHTML Legacy</h3>
      <div class="code">
        <InnerLegacy code={markdownSourceCode} />
      </div>

      <h3>innerHTML New (marked-highlight)</h3>
      <div class="code">
        <InnerNew code={markdownSourceCode} />
      </div>
    </div>
    <div class="col-6">
      <h3>@html Legacy</h3>
      <div class="code">
        <HTMLLegacy code={markdownSourceCode} />
      </div>

      <h3>@html New (marked-highlight)</h3>
      <div class="code">
        <HTMLNew code={markdownSourceCode} />
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <h2>Pure highlight.js</h2>
      <div class="code">
        <PureHighlight code={sourceCode} language="elixir" />
      </div>
    </div>

    <div class="col-6">
      <h2>Raw</h2>

      <div class="code">
        <Raw code={sourceCode} />
      </div>

      <div class="code">
        <Raw code={markdownSourceCode} />
      </div>
    </div>
  </div>
</div>
<style>
  .code {
    padding: 0 1em;
    border:1px solid #333;
    margin: 1em;
  }

  :global(pre) {
    padding: 1em; margin: 1em 0 1em 0;
  }
</style>
