import Description from '@/components/box/box_info/Description'
import getMounted from '@/utils/getMounted'

describe('Description.vue', () => {
  it('should render correct contents', () => {
    let oDescriptionData = {descriptionData: {name: 'Example name', location_details: 'London'}}
    const vm = getMounted(Description, oDescriptionData)
    expect(vm.$el.querySelector('.box-desc h2').textContent).to.equal(oDescriptionData.descriptionData.name)
    expect(vm.$el.querySelector('.location a').textContent).to.equal(oDescriptionData.descriptionData.location_details)
  })
})
