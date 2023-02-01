// 导入车牌号输入组件
import LicensePlate from './license-plate';

// 组件列表
const components = [LicensePlate]

const install = function(app) {
  // 注册全局组件
  components.map(component => app.component(component.name, component))
}

export default {
  install,
  LicensePlate
}