import { AiOutlineMinus } from 'react-icons/ai';
import { HiOutlineCheck } from 'react-icons/hi'

import planFeaturesType from '../types/planfeatures';

const planFeatures: planFeaturesType[] = [
  {
    name: 'Docs, Sheets, Slides, Forms content creation',
    free: AiOutlineMinus,
    paid: HiOutlineCheck
  },
  {
    name: 'Drive Secure cloud storage',
    free: '15 GB per user',
    paid: '2 TB per user'
  },
  {
    name: 'Shared drives for your team',
    free: AiOutlineMinus,
    paid: HiOutlineCheck
  },
  {
    name: 'Gmail Secure email',
    free: HiOutlineCheck,
    paid: HiOutlineCheck
  },
  {
    name: 'Meeting recordings saved to Drive',
    free: AiOutlineMinus,
    paid: HiOutlineCheck
  },
  {
    name: 'Admin Centralized administration',
    free: AiOutlineMinus,
    paid: HiOutlineCheck
  },
  {
    name: 'Group-based security policy controls',
    free: AiOutlineMinus,
    paid: HiOutlineCheck
  },
  {
    name: 'Customer support',
    free: 'Self-service online and community forums',
    paid: '24/7 online support and community forums'
  }
]

export default planFeatures