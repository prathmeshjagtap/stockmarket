import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, fas);
}
export default initFontAwesome;
