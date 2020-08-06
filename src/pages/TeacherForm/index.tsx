import React from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/inputs';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css';


function TeacherForm(){
    return (
        <section id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." description="O primeiro passo é preencher esse formulário de inscrição." />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biográfia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
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
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>
                    <div className="schedule-item">
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
                        <Input name="to" label="Das" type="time" />
                        <Input name="from" label="Até" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p><img src={warningIcon} alt="Aviso Importante"/> Importante! <br />
                    Preencha todos os dados</p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </section>
    );
}

export default TeacherForm;