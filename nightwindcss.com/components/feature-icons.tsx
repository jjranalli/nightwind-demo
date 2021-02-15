import Automatic from "./icons/feature-automatic"
import Mappable from "./icons/feature-mappable"
import Override from "./icons/feature-override"
import Complete from "./icons/feature-complete"
import Fast from "./icons/feature-fast"
import Custom from "./icons/feature-custom"

export default function FeatureIcon(props) {
  switch (props.icon) {
    case 1:
      return <Automatic />
    case 2:
      return <Custom />
    case 3:
      return <Override />
    case 4:
      return <Mappable />
    case 5:
      return <Fast />
    case 6:
      return <Complete />
  }
}
