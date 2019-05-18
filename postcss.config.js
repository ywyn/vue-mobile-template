module.exports = {
  plugins: {
    'postcss-import': {}, // 解决@import引入路径问题
    'postcss-url': {}, // 主要用来处理文件，比如图片文件、字体文件等引用路径的处理
    'postcss-aspect-ratio-mini': {}, // 主要用来处理元素容器宽高比
    'postcss-write-svg': {
      utf8: false
    }, // 主要用来处理移动端1px的解决方案
    'postcss-cssnext': {}, // 使用CSS未来的特性
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    }, // 主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位
    cssnano: {
      preset: 'advanced', // 显示设置cssnano
      autoprefixer: false, // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个，所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false。
      'postcss-zindex': false // 只要启用了这个插件，z-index的值就会重置为1 设为false
    } // 压缩和清理CSS代码
  }
}
