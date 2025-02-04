import { jquery } from '@/httpsnippet-lite/esm/targets/javascript/jquery/client'
import type { Plugin } from '@/types'
import { convertWithHttpSnippetLite } from '@/utils/convertWithHttpSnippetLite'

/**
 * js/jquery
 */
export const jsJquery: Plugin = {
  target: 'js',
  client: 'jquery',
  title: 'jQuery',
  generate(request) {
    // TODO: Write an own converter
    return convertWithHttpSnippetLite(jquery, request)
  },
}
