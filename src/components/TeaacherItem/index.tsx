import React from 'react'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api'

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <section>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </section>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>Preço/hora <strong>R$ {teacher.cost}</strong></p>
                <a href={`https://wa.me/${teacher.whatsapp}`} onClick={createNewConnection}>
                    <img src={WhatsAppIcon} alt="Entrar em contato"/>
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;