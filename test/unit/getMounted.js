export default function getMounted(Component, propsData) {
  const Ctor = Vue.extend(Component)
  return new Ctor({propsData: propsData}).$mount()
}
