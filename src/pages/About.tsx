import {PageContainer} from "@ styles/AboutStyle/PageContainer.tsx";
import {Card} from "@ styles/AboutStyle/Card.tsx";
import {Title} from "@ styles/AboutStyle/Title.tsx";
import {Text} from "@ styles/AboutStyle/Text.tsx";
import {Subtitle} from "@ styles/AboutStyle/Subtitle.tsx";
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <PageContainer>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 3}}
            >
                <Card>
                    <Title>Обо мне<span> 👽</span> </Title>
                    <Subtitle><span> 🙇‍♀️ </span> Образование</Subtitle>
                    <Text> <span> ✔️ </span>На данный момент обучаюсь на 3 курсе по направлению "Системное
                        программирование",ИМКТ,ДВФУ </Text>
                    <Text> <span> ✔️ </span>Дополнительно обучаюсь на цифровых кафедрах по направлению "Разработка
                        мобильных приложений на Android"</Text>
                    <Subtitle><span> 💜 </span> Достижения </Subtitle>
                    <Text> <span> ✔️ </span>3 года назад окончила школу английского языка с красным дипломом</Text>
                    <Text> <span> ✔️ </span>Окончила школу с золотой медалью</Text>
                    <Subtitle><span> 👾 </span> Хобби </Subtitle>
                    <Text> <span> ✔️ </span>Рисую на бумаге и графическом планшете</Text>
                    <Text> <span> ✔️ </span>Подрабатываю репетитором по математике</Text>
                    <Text> <span> ✔️ </span>Увлекаюсь азиатской культурой(кпоп,дорамы,аниме)</Text>
                </Card>
            </motion.div>
        </PageContainer>
);
};
