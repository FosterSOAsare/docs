import { IconType } from "react-icons/lib"

type planFeaturesType = {
  name: string,
  free: string,
  paid: string
} | {
  name: string,
  free: IconType,
  paid: IconType
}

export default planFeaturesType