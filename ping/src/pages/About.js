import React from 'react';
import '../App.css';

export default function About() {
    return (
        <div className="about-container">
            <h3>Apresentamos o Ping, uma rede social criada para você compartilhar suas ideias com o mundo.</h3>
            <p>Este projeto consiste em um aplicativo de blog feito com React no front-end e MongoDB no back-end.</p>
            <p>Você pode conferir o repositório desse projeto no GitHub. <a href="https://github.com/MarshallLiu-Dev/Ping-Social.git">Ping Social</a></p>
            <div className="footer-container">
                <h3>Apresentando o Ping Social, Uma rede social para você</h3>
                <p>Copyright &copy; 2023 Ping Social | TODOS OS DIREITOS RESERVADOS</p>
            </div>
        </div>

    );
}
