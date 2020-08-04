import React from 'react'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeaacherItem';

import './style.css'


function TeacherList(){
    return (
        <section id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="weekDay">Dia da Semana</label>
                        <input type="text" id="weekDay"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </section>
    );
}

export default TeacherList;