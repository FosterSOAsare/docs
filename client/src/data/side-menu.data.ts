import SideMenuToolsTypes from "../types/side-menu-tools.types"
import DocsImage from '@assets/docs.svg'
import SheetsImage from '@assets/sheets.svg'
import SlidesImage from '@assets/slides.svg'
import FormsImage from '@assets/forms.svg'
import DriveImage from '@assets/drive.svg'
import GmailImage from '@assets/gmail.svg'
import MeetImage from '@assets/meet.svg'
import CalendarImage from '@assets/calendar.svg'

const moreTools: SideMenuToolsTypes[] = [
  {
    name: 'Drive',
    link: 'https://www.google.com/drive/?hl=en',
    image: DriveImage
  },
  {
    name: 'Gmail',
    link: 'https://www.google.com/gmail/about/?hl=en',
    image: GmailImage
  },
  {
    name: 'Meet',
    link: 'https://apps.google.com/meet/?hl=en',
    image: MeetImage
  },
  {
    name: 'Calendar',
    link: 'https://workspace.google.com/intl/en/products/calendar/?utm_source=docsforwork&utm_medium=et&utm_content=calendar&utm_campaign=globalnav',
    image: CalendarImage
  },
  {
    name: 'Docs',
    link: 'https://www.google.com/docs/about/',
    image: DocsImage
  },
  {
    name: 'Sheets',
    link: 'https://www.google.com/sheets/about/',
    image: SheetsImage
  },
  {
    name: 'Slides',
    link: 'https://www.google.com/slides/about/',
    image: SlidesImage
  }, {
    name: 'Forms',
    link: 'https://www.google.com/forms/about/',
    image: FormsImage
  }

]


export default moreTools