<template>
  <div class="ql-container ql-snow">
    {{articleData.title}}
    <div
      class="ql-editor"
      v-html="editorContent"
    ></div>
  </div>
</template>

<script>
import { getArticleDetail } from '~/api/article'
export default {
  asyncData(context) {
    return getArticleDetail({id: context.query.id}).then(res => {
      return {
        articleData: res.data.data,
        editorContent: res.data.data.content
      }
    })
  }
}
</script>

