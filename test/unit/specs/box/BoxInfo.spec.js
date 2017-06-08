import BoxInfo from '@/components/box/Box-info.vue'

describe('BoxInfo.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof BoxInfo.data).to.equal('function')
    const defaultData = BoxInfo.data()
    expect(defaultData.description.description).to.equal('')
    expect(defaultData.userAvatar).to.equal('')
    expect(defaultData.feedback.likes_count).to.equal(0)
    expect(defaultData.feedback.reposts_count).to.equal(0)
    expect(defaultData.feedback.wants_count).to.equal(0)
  })
})
