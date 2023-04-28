import { SideMenuToolsTypes } from "../types/side-menu.types"
import DocsImage from '@assets/docs.svg'
import SheetsImage from '@assets/sheets.svg'
import SlidesImage from '@assets/slides.svg'
import FormsImage from '@assets/forms.svg'

const pages: SideMenuToolsTypes[] = [
  {
    name: 'Docs',
    link: '/docs',
    image: DocsImage
  },
  {
    name: 'Sheets',
    link: '/sheets',
    image: SheetsImage
  },
  {
    name: 'Slides',
    link: '/slides',
    image: SlidesImage
  }, {
    name: 'Forms',
    link: '/forms',
    image: FormsImage
  }

]


export default pages