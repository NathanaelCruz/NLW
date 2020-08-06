import React from 'react'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeaacherItem';
import Input from '../../components/inputs';
import Select from '../../components/Select';

import './style.css'


function TeacherList(){
    return (
        <section id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria" 
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
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado-feira'},
                            ]} />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </section>
    );
}

export default TeacherList;