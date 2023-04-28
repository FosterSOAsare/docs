import Share from '@assets/share-forms.svg'
import BuildForms from '@assets/build-forms.svg'
import CleanResponse from '@assets/clean-response-data.svg'

import advantagesType from '../../types/advantage.types'

const advantages: advantagesType[] = [
  {
    image: BuildForms,
    title: 'Build forms and analyze results together',
    desc: "Add collaborators—just like with Google Docs, Sheets, and Slides—to build questions together in real-time. Then analyze results together without having to share multiple versions of the file."
  }, {
    image: CleanResponse,
    title: 'Work with clean response data',
    desc: "Use built-in intelligence to set response validation rules. For example, ensure that email addresses are properly formatted or that numbers fall within a specified range."
  }, {
    image: Share,
    title: 'Share forms via email, link, or website',
    desc: "It's easy to share forms with specific people or with a broad audience by embedding forms on your website or sharing the links on social media."
  }
]

export default advantages