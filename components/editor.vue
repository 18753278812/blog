<template>
  <div class="edit">
    <div class="ql-container ql-snow">
    <div class="ql-editor" v-html="editorContent"></div>
    </div>
    <el-input class="title" v-model="title" placeholder="文章标题"></el-input>
    <no-ssr placeholder="别找了，这是不是ssr">
      <quill-editor
        v-model='editorContent'
        ref='textEditor'
        :options='editorOption'
      >
      </quill-editor>
    </no-ssr>
    <el-button @click="publish">发布</el-button>
  </div>
</template>

<script>
import { publish } from '@/api/article'
export default {
  data() {
    return {
      editorContent: '',
      editorOption: {
        placeholder: 'What’s on your mind?',
        // theme: 'snow',
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'direction': 'rtl' }],                         // text direction
            [{ 'color': [] }, { 'background': [] }],
            [{ 'image': 'image' }]        // dropdown with defaults from theme
          ]
          // imageResize: true,
          // imageDrop: true
        }
      },
      title: ''
    }
  },
  methods: {
    publish() {
      publish({
        title: this.title,
        content: this.editorContent
      }).then(res => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  padding-top: 20px;
  .title {
    margin: 30px 0;
  }
}
</style>
