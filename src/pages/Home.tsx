import MyPhoto from '@/assets/HP_photo.jpg';
import {ProfileImage} from "@ styles/HomeStyle/ProfileImage.tsx";
import {Name} from "@ styles/HomeStyle/Name.tsx";
import {Info} from "@ styles/HomeStyle/Info.tsx";
import {PagesTemplate} from "@ styles/HomeStyle/PagesTemplate.tsx";
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
    return (
        <PagesTemplate>
            <ProfileImage src={MyPhoto}/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 3}}
            >
                <Name>Приветик<span> ✌️</span></Name>
                <Info>Меня зовут <span style={{color: "#f8023a", fontWeight: "bold"}}>
                    Рукша Ульяна</span> и мне 19 лет. Я родилась в замечательном городе <span
                    style={{color: "#f8023a", fontWeight: "bold"}}>Благовещенск</span>,на
                    границе с Китаем. На данный момент я живу и учусь в городе <span
                        style={{color: "#f8023a", fontWeight: "bold"}}>Владивосток</span> в Дальневосточном Федеральном
                    Университете, по направлению <span style={{color: "#f8023a", fontWeight: "bold"}}>прикладная математика и информатика (системное программирование)</span>.
                    В свободное от учебы время я подрабатываю репетитором по математике у 5-9 классов.
                    Данный сайт посвещен моему опыту и проектам в сфере IT, полученным за 3 года обучения в вузе.</Info>
            </motion.div>
        </PagesTemplate>
    );
};
