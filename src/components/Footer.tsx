import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faTelegram} from "@fortawesome/free-brands-svg-icons";
import FooterContainer from "../styles/FooterStyle/FooterContainer.tsx";
import FooterText from "../styles/FooterStyle/FooterText.tsx";
import IconLinks from "../styles/FooterStyle/IconLinks.tsx";
import IconLink from "../styles/FooterStyle/IconLink.tsx";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>© 2024 10IzHokage</FooterText>
            <IconLinks>
                <IconLink href="https://vk.com/desyatiyizhokage" target="_blank" rel="noopener noreferrer" aria-label="VK">
                    <FontAwesomeIcon icon={faVk} />
                </IconLink>
                <IconLink href="https://t.me/desyatiyizhokage" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <FontAwesomeIcon icon={faTelegram} />
                </IconLink>
            </IconLinks>
        </FooterContainer>
    );
};

export default Footer;