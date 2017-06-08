import Feedback from '@/components/box/box_info/Feedback'
import getMounted from '@/utils/getMounted'

describe('Feedback.vue', () => {
  it('should render correct contents', () => {
    let oFeedbackData = {feedbackData: {likes_count: 20, reposts_count: 30, wants_count: 40}}
    const vm = getMounted(Feedback, oFeedbackData)
    expect(vm.$el.querySelector('.likes-count').textContent).to.equal(oFeedbackData.feedbackData.likes_count.toString())
    expect(vm.$el.querySelector('.reposts-count').textContent).to.equal(oFeedbackData.feedbackData.reposts_count.toString())
    expect(vm.$el.querySelector('.wants-count').textContent).to.equal(oFeedbackData.feedbackData.wants_count.toString())
  })
})
