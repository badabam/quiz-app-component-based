import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const homeIcon = createElement('img', { src: homeSVG, alt: 'Home' })
const bookmarkIcon = createElement('img', {
  src: bookmarkSVG,
  alt: 'Bookmarks',
})
const createIcon = createElement('img', { src: createSVG, alt: 'Create' })
const settingsIcon = createElement('img', { src: settingsSVG, alt: 'Settings' })

export default function Navigation() {
  const el = createElement(
    'nav',
    { className: 'Navigation' },
    homeIcon,
    bookmarkIcon,
    createIcon,
    settingsIcon
  )
  return el
}
