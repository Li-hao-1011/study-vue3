import '../css/style.css'
import '../css/less/title.less'
import '../css/image.css'
import '../font/iconfont.css'

import JPG_02 from '../img/02.jpg'
import PNG_01 from '../img/01.png'

const DIVEL = document.createElement('div')

DIVEL.className = 'title'

DIVEL.innerHTML = '你好，世界'

const BG_DIVEL = document.createElement('div')
BG_DIVEL.className = 'image-bg'
BG_DIVEL.style.backgroundImage = PNG_01
BG_DIVEL.style.backgroundColor = 'pink'

const IMG_EL = document.createElement('img')
// IMG_EL.src = require('../css/img/02.jpg')
IMG_EL.src = JPG_02

// 字体图标
const I_EL = document.createElement('i')
I_EL.className = 'iconfont icon-ashbin'

document.body.appendChild(DIVEL)
document.body.appendChild(BG_DIVEL)
document.body.appendChild(IMG_EL)
document.body.appendChild(I_EL)
