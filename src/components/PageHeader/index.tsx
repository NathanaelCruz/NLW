import React from 'react'
import {Link} from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg'
import BackImg from '../../assets/images/icons/back.svg'

import './style.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <nav className="top-bar-container">
                <Link to="/">
                    <img src={BackImg} alt="Voltar"/>
                </Link>
                <img src={LogoImg} alt="Logo proffy"/>
            </nav>
            <section className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p>}
                {props.children}
            </section>
        </header>
    )
}

export default PageHeader;