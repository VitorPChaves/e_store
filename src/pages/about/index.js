import Header from "../../components/header"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"

import './styles.css'
import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="information">
                    <div className="about-description">
                        <h1>Quem Somos?</h1>
                        <p>
                            A (NOME) é uma loja 100% digital com um escritório sediado em Florianópolis, Santa Catarina.
                            Nossa loja foi criada com o intuito de levar<br/> um produto de qualidade até as pessoas que sonham em jogar bola com as chuteiras de jogadores profissionais.<br/><br/>
                            As chuteiras vendidas por nós são replicas fiéis aos modelos de primeira linha das fabricantes Nike, Adidas e Puma.
                            Nossas chuteiras são importadas<br/> de fábricas que simulam o processo de produção dos modelos de alto padrão. <br/><br/>
                            A (NOME) faz o seu maximo para garantir sua confiança, entregando um atendimento e um produto de qualidade,<br/>
                            com disponibilidade de atendimento e entrega a qualquer localização do nosso país.<br/><br/>
                            Para saber mais sobre nosso modelo de trabalho e como oferecemos nosso serviço verifique as paginas 
                            de <Link to="/envio"><b>Envio e Entrega</b></Link>
                            , <Link to="/privacidade"><b>Política de Privacidade</b></Link> 
                            e <Link to="/reembolso"><b>Política de Reembolso</b></Link>
                        </p>
                    </div>
                    <div className="declarations">
                        <div className="mission">
                            <h2>Missão</h2>
                            <p>Entregar a chuteira dos sonhos para qualquer pessoa no Brasil por um preço acessivel.</p>
                        </div>
                        <div className="vision">
                            <h2>Visão</h2>
                            <p>Tornar os produtos de primeira linha mais acessíveis para a população.</p>
                        </div>
                        <div className="values">
                            <h2>Valores</h2>
                            <p>Confiança e qualidade.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BannerBottom/> */}
            <Footer/>
        </div>
    )
}

export default AboutPage