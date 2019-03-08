<template>
  <div class="about">
    <h1>This is an about page</h1>
    <center>
      <table border="1">
        <tr>
          <th>วิชา</th>
          <th>เกรด</th>
          <th>หน่วยกิต</th>
          <th>คะแนน</th>
        </tr>
        <tr v-for="(a, index) in registerData" :key="index">
          <td>{{a.name}}</td>
          <td>{{a.grade}}</td>
          <td>{{a.credit}}</td>
          <td>{{a.credit * pointGrade(a.grade)}}</td>
        </tr>
        <tr>
          <td colspan="3">หน่วยกิตรวม</td>
          <td>{{sumCredit}}</td>
        </tr>
        <tr>
          <td colspan="3">แต้ม</td>
          <td>{{point}}</td>
        </tr>
         <tr>
          <td colspan="3">เกรดเฉลี่ย</td>
          <td>{{(point/sumCredit).toFixed(2)}}</td>
        </tr>
      </table>
    </center>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      registerData: state => state.registerData
    }),
    sumCredit () {
      return this.registerData.reduce((sum, data) => sum + data.credit, 0)
    },
    point () {
      return this.registerData.reduce((sum, data) => sum + (data.credit * this.pointGrade(data.grade)), 0)
    }
  },
  methods: {
    pointGrade (grade) {
      if (grade === 'A') {
        return 4
      } else if (grade === 'B+') {
        return 3.5
      } else if (grade === 'B') {
        return 3
      } else if (grade === 'C+') {
        return 2.5
      } else if (grade === 'C') {
        return 2
      } else if (grade === 'D+') {
        return 1.5
      } else if (grade === 'D') {
        return 1
      } else if (grade === 'F') {
        return 0
      }
    }
  }
}
</script>
