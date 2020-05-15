import Vue from "vue";
import Prism from 'prismjs'
import PrismicVue from 'prismic-vue'
import PrismicDOM from 'prismic-dom'

import 'prismjs/components/prism-bash'

const Elements = PrismicDOM.RichText.Elements;

const linkResolver = function(doc) {}

const htmlSerializer = function (type, element, content, children) {
    if (type === Elements.hyperlink) {
      let result = '';
      const url = PrismicDOM.Link.url(element.data, linkResolver);
      if (element.data.link_type === 'Document') {
        result = `<router-link to="${url}">${content}</router-link>`;
      } else {
        const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : '';
        result = `<a class="font-semibold text-blue-400 hover:underline break-all" href="${url}" ${target}>${content}</a>`;
      }
      return result;
    }
    // If the image is also a link to a Prismic Document, it will return a <router-link> component
    if (type === Elements.image) {
      let result = `<a href="${element.url}"><img class="rounded-lg max-w-full" src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}"></a>`;
      if (element.linkTo) {
        const url = PrismicDOM.Link.url(element.linkTo, linkResolver);
        if (element.linkTo.link_type === 'Document') {
          result = `<router-link to="${url}">${result}</router-link>`;
        } else {
          const target = element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : '';
          result = `<a href="${url}" ${target}>${result}</a>`;
        }
      }
      const wrapperClassList = [element.label || '', 'block-img'];
      result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`;
      return result;
    }
    switch (type) {
      case Elements.heading1:
        return `<h1 class="pt-4 px-2 md:px-4 pb-2 text-2xl font-semibold">${children.join('')}</h1>`;
      case Elements.heading2:
        return `<h2 class="pt-4 px-2 md:px-4 pb-2 text-xl font-medium">${children.join('')}</h2>`;
      case Elements.heading3:
        return `<h3>${children.join('')}</h3>`;
      case Elements.heading4:
        return `<h4>${children.join('')}</h4>`;
      case Elements.heading5:
        return `<h5>${children.join('')}</h5>`;
      case Elements.heading6:
        return `<hr class="break text-gray-300">`;
      case Elements.paragraph:
        return `<p font-sans class="p-2 px-1 md:px-4 md:p-4 text-xl font-normal">${children.join('')}</p>`;
      case Elements.preformatted:
        const isBash = element.text.includes("$");
        return `<div class="pb-3 max-w-full text-xl"><pre class="max-w-full overflow-scroll hidescrollbar bg-light rounded-lg"><code class="max-w-full">` + Prism.highlight(children.join('').replace(/\<br \/\>/g, '\n'), Prism.languages[isBash ? 'bash' : 'javascript'], isBash ? 'bash' : 'javascript') + `</code></pre></div>`;
      case Elements.strong:
        return `<strong>${children.join('')}</strong>`;
      case Elements.em:
        return `<em>${children.join('')}</em>`;
      case Elements.listItem:
        return `<li>${children.join('')}</li>`;
      case Elements.oListItem:
        return `<li>${children.join('')}</li>`;
      case Elements.list:
        return `<ul class="p-2 md:p-4 ml-6 md:ml-12 text-lg font-light list-disc">${children.join('')}</ul>`;
      case Elements.oList:
        return `<ol class="p-2 md:p-4 ml-6 md:ml-12 text-lg font-light list-decimal">${children.join('')}</ol>`;
      case Elements.embed:
        return (`
          <div data-oembed="${element.oembed.embed_url}"
            data-oembed-type="${element.oembed.type}"
            data-oembed-provider="${element.oembed.provider_name}"
          >${element.oembed.html}</div>
        `);
      case Elements.label:
        const label = element.data.label ? ` class="${element.data.label}"` : '';
        return `<span ${label}>${children.join('')}</span>`;
      case Elements.span:
        return content ? content.replace(/\n/g, "<br />") : '';
      default:
        return null;
    }
};

Vue.use(PrismicVue, {
    htmlSerializer: htmlSerializer
});