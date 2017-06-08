import Comment from '@/components/box/box_info/comments/Comment.vue'
import getMounted from '@/utils/getMounted'

// function getMounted (Component, propsData) {
//   const Ctor = Vue.extend(Component)
//   const vm = new Ctor({ propsData: propsData }).$mount()
//   return vm
// }

describe('Comment.vue', () => {
  it('should render correct contents', () => {
    let oCommentData = {commentData: {comment: 'test comment', user: {name: 'Andre', avatar: {small_url: './'}}}}
    const vm = getMounted(Comment, oCommentData)
    expect(vm.$el.querySelector('.comment-text').textContent).to.equal(oCommentData.commentData.comment)
    expect(vm.$el.querySelector('.username').textContent).to.equal(oCommentData.commentData.user.name)
  })
})
