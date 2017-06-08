import BoxCard from '@/components/box/Box-card'

describe('BoxCard.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof BoxCard.data).to.equal('function')
    const defaultData = BoxCard.data()
    expect(defaultData.photos.length).to.equal(0)
    expect(defaultData.price).to.equal('')
  })
})
