import SeemlesslyConnect from '@assets/seamlessly-connect.svg'
import CustomBuild from '@assets/build-custom-solutions.svg'
import FreshContent from '@assets/fresh-data.svg'

import advantagesType from '../../types/advantage.types'

const advantages: advantagesType[] = [
  {
    image: CustomBuild,
    title: 'Build custom solutions',
    desc: "Speed up workflows by building business apps and automations. Use AppSheet to build custom applications on top of Sheets, without writing code. Or add custom functions, menu items, and macros with Apps Script."
  }, {
    image: FreshContent,
    title: 'Always work with fresh data',
    desc: "With Sheets, everyone’s always working on the latest version of a spreadsheet. And with edits automatically saved in version history, it’s easy to undo changes or even see edit history of an individual spreadsheet cell."
  }, {
    image: SeemlesslyConnect,
    title: 'Seamlessly connect to critical data',
    desc: "Pull in and analyze data from the other tools you use, like customer data from Salesforce. Enterprise customers can also use Connected Sheets to analyze billions of rows of BigQuery data in Sheets – without writing any code."
  }
]

export default advantages