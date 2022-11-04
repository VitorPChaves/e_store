import { Link } from "react-router-dom"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"
import Header from "../../components/header"

import'./styles.css'

const ShippingPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="shipping-info">
                    <h1>Envio e Entrega</h1>
                    <h2>Prazo de Entrega</h2>
                    <p>
                        O prazo de entrega começa a partir da data de confirmação de pagamento do seu pedido. 
                        No caso de pagamento via boleto, o prazo de confirmação pode ocorrer em até 4 (quatro) dias úteis. 
                        Os produtos normalmente levam cerca de 20 (vinte) dias úteis para serem entregues ao destinatário. 
                        Este periodo pode variar de acordo com a região do país
                        Alguns fatores climáticos ou situações adversas podem interferir na entrega de suas compras. 
                        Nesses casos, verifique se ocorreram greves, paralisações ou acidentes em sua região. 
                    </p>
                    <h2>Regras e Restrições de Entrega</h2>
                    <p>
                        As entregas são realizadas de segunda a sexta das 9h às 18h, exceto feriados.
                        Toda entrega deverá ter o comprovante assinado pelo recebedor com preenchimento de data, nome legível e número do RG. 
                        *Durante a o período de pandemia Covid-19, algumas transportadoras podem não solicitar a assinatura no ato da entrega, para evitar contatos.
                        Entregas em destinos com baixa população, 
                        locais de difícil acesso ou distantes das capitais, podem necessitar de mais prazo para a entrega ou para serem retirados na agência dos Correios mais próxima.
                        Entregas locais via correios podem ter um prazo diferenciado,
                        com possibilidade de acréscimo indeterminado de dias úteis para serem entregues ou serem retirados na agência.
                        As entregas são realizadas apenas dentro do território nacional.
                        Em caso de dúvidas ou esclarecimentos, por favor, contate nosso serviço de atendimento através do telefone SC (99) 9 9999 9999.
                    </p>
                    <h2>Acompanhamento do Pedido</h2>
                    <p>
                        Você pode acompanhar o seu pedido a partir do código de rastreamento que será enviado após a confirmação do pagamento.
                        Você também receberá um passo a passo de seu pedido através do WhatsApp e E-mail. 
                        A informação do status de entrega estará disponível assim que o fornecedor confirmar o recebimento do pedido. 
                    </p>
                    <h2>Ausência no Momento da Entrega</h2>
                    <p>
                        Para o sucesso de sua entrega, é imprescindível que as informações de endereço e telefone do seu cadastro estejam atualizadas. 
                        No caso de insucesso de entrega por ausência de destinatário, 
                        dados cadastrais incorretos ou mudança de endereço, resultando no retorno do produto ao fornecedor internacional, seu pedido será cancelado.
                        Tendo seu pedido cancelado, você deve verificar as seção 
                        de <Link to="/reembolso"><b>Políticas de Devoluções</b></Link> e entrar em contato com nosso atendimento.
                    </p>
                </div>
            </div>
            {/* <BannerBottom/> */}
            <Footer/>
        </div>
    )
}

export default ShippingPage