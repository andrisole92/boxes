import Slider from '@/components/box/box_card/Slider'
import getMounted from '@/utils/getMounted'

describe('Slider.vue', () => {
  it('should render correct contents', () => {
    let oSliderData = {price: 200, photos: []}
    const vm = getMounted(Slider, oSliderData)
    expect(vm.$el.querySelector('.price').textContent).to.equal('$' + oSliderData.price)
  })
})
