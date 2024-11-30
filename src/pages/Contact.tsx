import { useState } from 'react';
import ContactForm from "../styles/ContactStyle/ContactForm.tsx";
import Label from "../styles/ContactStyle/Label.tsx";
import Input from "../styles/ContactStyle/Input.tsx";
import Textarea from "../styles/ContactStyle/Textarea.tsx";
import Button from "../styles/ContactStyle/Button.tsx";
import ErrorMessage from "../styles/ContactStyle/ErrorMessage.tsx";
import SuccessMessage from "../styles/ContactStyle/SuccessMessage.tsx";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!formData.name) newErrors.name = 'Поле "Имя" обязательно для заполнения';
        if (!formData.email) newErrors.email = 'Поле "Email" обязательно для заполнения';
        else if (!validateEmail(formData.email)) newErrors.email = 'Некорректный email';
        if (!formData.message) newErrors.message = 'Поле "Сообщение" обязательно для заполнения';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Отправленные данные:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div>
            {isSubmitted && <SuccessMessage>Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время</SuccessMessage>}
            <ContactForm onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="name">Имя:</Label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </div>
                <div>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </div>
                <div>
                    <Label htmlFor="message">Сообщение:</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </div>
                <Button type="submit">Отправить</Button>
            </ContactForm>
        </div>
    );
};
export default Contact;