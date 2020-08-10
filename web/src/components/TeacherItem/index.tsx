import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import diego from '../../assets/images/diego.png';
import './style.css';
import api from '../../services/api';

 export interface Teacher {
    
    name: string,
    avatar: string,
    whatsapp:string,
    bio: string,
    subject: string,
    cost:number,
    id:number
}


interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher}) => {

    
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }


    return (
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar} alt="" />
                <div>
                    <strong>{ teacher.name}</strong>
                    <span>{ teacher.subject}</span>
                </div>
            </header>
            <p>{ teacher.bio}</p>
            <footer>
                <p>R$ { teacher.cost}  </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} type="button">
                    <img src={whatsappIcon} alt="" />Entrar em contato
                </a>
            </footer>
        </article>

    )
}

export default TeacherItem;