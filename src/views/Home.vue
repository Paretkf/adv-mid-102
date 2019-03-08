<template>
  <div class="home">
    <h1>This is home.</h1>
    <hr>
    จำนวนวิชา : <input type="number" v-model="amoutSubj">
    <button @click="createMockupData()">ตกลง</button> <br>
    <div v-for="(sub, index) in registedSubject" :key="index">
      <select v-model="registedSubject[index]">
        <option :value="s" v-for="s in subj" :key="s.name">{{s.name}} • {{s.credit}}</option>
      </select>

      <select v-model="registedSubject[index].grade">
        <option :value="g" v-for="g in grade" :key="g">{{g}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import Result from '@/components/Result'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    Result
  },
  data () {
    return {
      amoutSubj: 0,
      subj: [
        {
          name: 'OOP',
          credit: 3
        },
        {
          name: 'JAV',
          credit: 3
        },
        {
          name: 'STAT',
          credit: 1
        },
        {
          name: 'DATA COM',
          credit: 1
        }
      ],
      grade: ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'],
      registedSubject: []
    }
  },
  methods: {
    ...mapActions({
      setData: 'setData'
    }),
    createMockupData () {
      for (let i = 0; i < this.amoutSubj; i++) {
        this.registedSubject.push({
          name: '',
          credit: 0,
          grade: ''
        })
      }
    }
  },
  watch: {
    registedSubject (val) {
      this.setData(val)
    }
  }
}
</script>
