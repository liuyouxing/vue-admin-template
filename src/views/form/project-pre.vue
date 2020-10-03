<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="项目名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="项目区域">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="上海" value="shanghai" />
          <el-option label="北京" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="项目时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="即时交付">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="项目类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="向上活动" name="type" />
          <el-checkbox label="推广活动" name="type" />
          <el-checkbox label="离线活动" name="type" />
          <el-checkbox label="品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="项目资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="赞助" />
          <el-radio label="会场" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="项目备注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { creatProject } from '@/api/project'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {

    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          creatProject(this.form).then(() => {
            this.$router.push({ path: '/form/project-res'})
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('校验有误!!')
          this.$message('校验有误!!')
          return false
        }
      })
    },
    onCancel() {
      this.$message({
        message: '取消!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

