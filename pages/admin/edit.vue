<template>
  <div>  
    <editor></editor>
  </div>
</template>

<script>
import editor from '@/components/editor'
export default {
  components: {
    editor
  },
  methods: {
    click() {
      console.log(location.href)
    }
  }
}
</script>

