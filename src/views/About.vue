<template>
  <div class="about">
    <h1>元素容器宽高比</h1>
    <div aspectratio w-188-246>
      <div aspectratio-content>
        <img src="../assets/logo.png" alt="" />
      </div>
    </div>
    <h2>移动端1px的解决方案</h2>
    <div class="example">border-image来做1px的相关处理</div>
    <p>nihao</p>
    <div id="example"></div>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}
[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
[w-188-246] {
  aspect-ratio: calc(188 / 246 * 100) + '%';
}

[w-188-246] {
  width: 100%;
  background-color: red;
}

@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}

.example {
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #333)) 2 2 stretch;
}
</style>
