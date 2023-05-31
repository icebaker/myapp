import * as marked from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const Marked = {
  instantiated: false,

  setup: () => {
    marked.setOptions({ mangle: false, headerIds: false });

    marked.use(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    );
    Marked.instantiated = true;
  },

  instance: () => {
    if (!Marked.instantiated) Marked.setup();

    return marked;
  }
};

export default Marked;
