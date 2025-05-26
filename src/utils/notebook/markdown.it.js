import markdown from 'markdown-it';
import hljs from 'highlight.js';
import '../../assets/css/jupyterlab/highlight.theme.css';

export default markdown({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  highlight: function (str, lang) {
    return hljs.highlight(str, { language: lang }).value;
  }
});
