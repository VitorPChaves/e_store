import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"
import Header from "../../components/header"

import './styles.css'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="contact-service">
                    <h1>Entre em Contato</h1>
                    <h2>Atendimento ao Cliente</h2>
                    <p>
                        Você pode entrar em contato com nossos atendentes através das seguintes plataformas:<br/>
                        <br/>
                        Através do WhatsApp: <b>(99) 9 9999 9999</b><br/>
                        Através do e-mail: <b>contato@(NOME).com</b><br/>
                        Através do Instagram: <b>@(NOME)</b><br/>
                        <br/>
                        Ao entrar em contato conosco e utilizar nossos produtos e serviços, solicitaremos algumas informações pessoais suas para realizar seu pedido.<br/>
                        No momento da coleta, explicaremos quais informações serão necessárias e quais são opcionais de preenchimento, tais como:<br/>
                        <br/>
                        - Seu nome completo;<br/>
                        - Seu endereço de correspondência e suas informações de pagamento, ao fazer um pedido em nosso site ou através do WhatsApp;<br/>
                        - Seu endereço de e-mail;<br/>
                        <br/>
                        Durante o atendimento ao consumidor, se contatar nossos canais de atendimento, seja pelo WhatsApp ou Direct Message no Instagram,<br/>
                        usaremos dados pessoais para processar seu pedido e oferecer o melhor serviço possível.<br/>
                    </p>
                </div>
            </div>
            {/* <BannerBottom/> */}
            <Footer/>
        </div>
    )
}

export default ContactPage