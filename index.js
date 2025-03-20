function showSection(sectionId) {
  // 隐藏所有内容区块
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active-section')
  })

  // 显示目标区块
  document.getElementById(sectionId).classList.add('active-section')

  // 更新菜单激活状态
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })

  event.target.classList.add('active')

  if (getComputedStyle(document.querySelectorAll('.collapsed-menu')[0]).display !== 'none') {
    toggleNav()
  }
}

let navVisible = false

function toggleNav() {
  navVisible = !navVisible
  if (navVisible) {
    document.querySelectorAll('.sidebar')[0].style.display = 'flex'
  } else {
    document.querySelectorAll('.sidebar')[0].removeAttribute('style')
  }
}