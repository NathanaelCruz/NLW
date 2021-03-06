import React, { useState, FormEvent, useEffect } from 'react'
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeaacherItem';
import Input from '../../components/inputs';
import Select from '../../components/Select';

import './style.css'
import api from '../../services/api';

function TeacherList(){
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')


    async function listTeachers() {

        const list = await api.get('classes/list', {

        })

        setTeachers(list.data)
    }

    useEffect(() => {
        listTeachers()
    }, [])

    async function searchTeachers(e: FormEvent){
        e.preventDefault()

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)

    }

    return (
        <section id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value)}}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                            {value: 'História', label: 'História'},
                        ]} />
                        <Select 
                            name="weekDay" 
                            label="Dia da Semana" 
                            value={week_day}
                            onChange={(e) => { setWeekDay(e.target.value)}}
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado-feira'},
                            ]} />
                    <Input type="time" name="time" label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value)}}
                         />
                         <button type="submit">
                            Buscar
                         </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </section>
    );
}

export default TeacherList;