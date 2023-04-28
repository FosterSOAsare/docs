import StayProductive from '@assets/stay-productive.svg'
import DesignSlidesFaster from '@assets/design-slides-faster.svg'
import FreshContent from '@assets/fresh-content.svg'

import advantagesType from '../../types/advantage.types'

const advantages: advantagesType[] = [
  {
    image: FreshContent,
    title: 'Work on fresh content',
    desc: "With Slides, everyone’s working on the latest version of a presentation. And with edits automatically saved in version history, it’s easy to track or undo changes."
  }, {
    image: DesignSlidesFaster,
    title: 'Make slides faster, with built-in intelligence',
    desc: "Assistive features like Smart Compose and autocorrect help you build slides faster with fewer errors."
  }, {
    image: StayProductive,
    title: 'Stay productive, even offline',
    desc: "You can access, create, and edit Slides even without an internet connection, helping you stay productive from anywhere."
  }
]

export default advantages