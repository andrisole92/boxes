import UserProfile from '@/components/box/box_info/UserProfile'
import getMounted from '@/utils/getMounted'

describe('UserProfile.vue', () => {
  it('should render correct contents', () => {
    let oUserData = {avatar: './', userData: {name: 'Andre', nickname: 'andrisole'}}
    const vm = getMounted(UserProfile, oUserData)
    expect(vm.$el.querySelector('.name').textContent).to.equal(oUserData.userData.name)
    expect(vm.$el.querySelector('.username').textContent).to.equal(oUserData.userData.nickname)
  })
})
