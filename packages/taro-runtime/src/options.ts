import { TaroText } from './dom/text'
import { Text, Element } from './dom/html/parser'
import { TaroElement } from './dom/element'

interface Options {
  prerender: boolean
  debug: boolean
  html: {
    skipElements: (string | RegExp)[]
    voidElements: Set<string>
    closingElements: Set<string>
    transformText?: (taroText: TaroText, text: Text) => TaroText
    transformElement?: (taroElement: TaroElement, element: Element) => TaroElement
  }
}

export const options: Options = {
  prerender: true,
  debug: false,
  // html 只影响 Element#innerHTML API
  html: {
    skipElements: ['style', 'script'],
    voidElements: new Set([
      '!doctype', 'area', 'base', 'br', 'col', 'command',
      'embed', 'hr', 'img', 'input', 'keygen', 'link',
      'meta', 'param', 'source', 'track', 'wbr'
    ]),
    closingElements: new Set([
      'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
      'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
    ])
  }
}
