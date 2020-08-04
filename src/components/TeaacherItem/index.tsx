import React from 'react'

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFURE5jTUF1AQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=gOAZfY3XG4woTzY6eNPCYNDyuG1EltvQxGqQm7zkli4" alt="Nathanael Cruz"/>
                <section>
                    <strong>Nathanael Cruz</strong>
                    <span>Desenvolvedor Web</span>
                </section>
            </header>
            <p>
                Iniciei minha carreira profissional na área de telecomunicações, no qual colhi diversos conhecimentos, dentre eles análise de cenário e trabalho em equipe. <br /><br />
                Durante esse período me identifiquei com a área de desenvolvimento web, passando pela mudança de back-end para front-end, no qual tenho maior afinidade ..
            </p>
            <footer>
                <p>Preço/hora <strong>R$ 80,00</strong></p>
                <button type="button">
                    <img src={WhatsAppIcon} alt="Entrar em contato"/>
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;