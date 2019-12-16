console.log('postDoge2...')

/* 

// 保存数据
chrome.storage.local.set({color: 'blue'}, () => {
    console.log('保存成功！')
})

// 读取数据
chrome.storage.local.get(['color'], res => {
    console.log(res)
})

 */

var injectCss = function(css) {
    var style = document.createElement('style')
    style.type = 'text/css'
    if (style.styleSheet) {
        style.styleSheet.cssText = css
    } else {
        style.appendChild(document.createTextNode(css))
    }
    document.getElementsByTagName('head')[0].appendChild(style)
}

injectCss(`
	 .dropdown-menu-labels .dropdown-content {
	     max-height: 100% !important;
	 }
	 .dropdown-menu-labels {
	     max-height: inherit !important;
	 }
	 .dropdown-menu-labels {
	     top: -430px !important;
	 }
`)


const el = document.querySelector('.labels .js-sidebar-dropdown-toggle')

if (el) {
	el.addEventListener('click', e => {
		setTimeout(() => {
			const labels = ['bug', '无效', 'done', 'plan', '任务']

			document.querySelectorAll('.label-item').forEach(el => {
				if (!labels.includes(el.innerText.trim().toLocaleLowerCase())) {
					el.remove()
				}
			})
		}, 500);
	})
}

document.getElementsByTagName('html')[0].style.filter = 'none'