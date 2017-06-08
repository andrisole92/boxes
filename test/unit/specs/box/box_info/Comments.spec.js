import Comments from '@/components/box/box_info/Comments.vue'

describe('Comments.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof Comments.data).to.equals('function')
    const defaultData = Comments.data()
    expect(defaultData.aComments.length).to.equals(0)
  })
})
