import pythonImg from '@/assets/python.jpg';
import cImg from '@/assets/1c.png';
import cppImg from '@/assets/cpp.png';
import cssImg from '@/assets/css.png';
import sqlImg from '@/assets/sql.png';
import kotlinImg from '@/assets/kotlin.png';
import jetbrainsImg from '@/assets/jetbrains.png';
import vscodeImg from '@/assets/vscode.png';
import oneCenterpriseImg from '@/assets/1c_enterprise.png';
import kritaImg from '@/assets/krita.png';
import {PageContainer} from "@ styles/SkillsStyle/PageContainer.tsx";
import {SkillItem} from "@ styles/SkillsStyle/SkillItem.tsx";
import {SkillImage} from "@ styles/SkillsStyle/SkillImage.tsx";
import {SkillName} from "@ styles/SkillsStyle/SkillName.tsx";

export const Skills: React.FC = () => {
    const skillsData = [
        { name: "Python", image: pythonImg },
        { name: "1C", image: cImg },
        { name: "C++", image: cppImg },
        { name: "CSS", image: cssImg },
        { name: "SQL", image: sqlImg },
        { name: "Kotlin", image: kotlinImg },
        { name: "JetBrains IDE", image: jetbrainsImg },
        { name: "VS Code", image: vscodeImg },
        { name: "1С Предприятие", image: oneCenterpriseImg },
        { name: "Krita", image: kritaImg },
    ];

    return (
        <PageContainer>
                {skillsData.map((skill) => (
                    <SkillItem key={skill.name}>
                     <SkillImage src={skill.image} alt={skill.name} />
                     <SkillName>{skill.name}</SkillName>
                 </SkillItem>
             ))}
        </PageContainer>
    );
};
