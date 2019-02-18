<template>
  <pre>
    <code class="language-json" v-html="highlight(data)">
    </code>
  </pre>
</template>

<script>
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'
loadLanguages(['json'])
export default {
  name: 'DisplayData',
  props: ['data'],
  methods: {
    highlight (data) {
      let code = JSON.stringify(data, null, '\t')
      return Prism.highlight(code , Prism.languages.json, 'json')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
