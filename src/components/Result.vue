<template>
  <div>
    <h1>Result</h1>
    <ol>
      <li v-for="(d, index) in data" :key="index">
        {{d.name}} - {{d.credit}} เกรดที่ได้ {{d.grade}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
