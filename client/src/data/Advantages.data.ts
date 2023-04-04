import StayProductive from '@assets/stay-productive.svg'
import AddOns from '@assets/add-ons.svg'
import FreshContent from '@assets/fresh-content.svg'

import advantagesType from '../types/advantage.types'

const advantages: advantagesType[] = [
  {
    image: AddOns,
    title: 'Do more with add-ons',
    desc: "Access a variety of third-party applications, right from Docs. Whether it’s an e-signature app or project management tool, open it from Docs to work faster."
  }, {
    image: FreshContent,
    title: 'Work on fresh content',
    desc: "With Docs, everyone’s working on the latest version of a document. And with edits automatically saved in version history, it’s easy to track or undo changes."
  }, {
    image: StayProductive,
    title: 'Stay productive, even offline',
    desc: "You can access, create, and edit Docs even without an internet connection, helping you stay productive from anywhere."
  }
]

export default advantages