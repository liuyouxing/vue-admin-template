<template>
  <iframe class="d2-container-frame" :src="src" frameborder="0" />
</template>

<script>
export default {
  data() {
    return {
      src: "https://webseal.sinochem.com/?token=1602223953641&Target=http://easy.sinochem.com/wui/theme/ecology8/page/main.jsp",
    };
  },
};
</script>

<style lang="scss" scoped>
.d2-container-frame {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
</style>
