import { Link } from "react-router-dom"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"
import Header from "../../components/header"

import './styles.css'

const RefundPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="refund-info">
                    <h1>Política de Troca e Reembolso</h1>
                    <p>
                        É de extrema importancia que você leia e concorde com os termos expressos neste documento antes de finalizar sua compra.
                        Realizar um pedido significa que você leu e aceito os termos de uso da nossa loja.
                        A Brasil Chuteiras segue estritamente o Código de Defesa do Consumidor (LEI Nº 8.078, DE 11 DE SETEMBRO DE 1990).
                        Confiança e qualidade, como expressos na nossa página 
                        de <Link to="/sobre"><b>Nossos Serviços</b></Link>, são os principais valores da nossa empresa.
                        Mesmo que, após todos os nossos procedimentos de verificação de qualidade, você ainda se sentir desamparado pelo produto recebido,
                        poderá seguir as instruções das seguintes políticas:
                    </p>
                    <h2>Política de Devoluções</h2>
                    <p>
                        Você poderá devolver sua compra da Brasil Chuteiras feita através do WhatsApp, dentro do prazo de 7 (sete) dias corridos, 
                        contados a partir da data do recebimento, e poderá optar receber o reembolso total do valor pago.
                        Se a devolução for realizada fora deste período ou o produto tiver sido utilizado ou danificado, 
                        a Brasil Chuteiras não aceitará a devolução. É necessário apresentar a etiqueta original e o produto não pode conter marcas de uso ou manchas.
                        Para confirmar todos os requisitos citados acima, é necessário que você tire uma foto do produto, comprovando sua integridade, com a etiqueta e a nota fiscal
                        do envio no momento da entrega aos correios e enviar ao atendimento pelo WhatsApp.
                        No caso de uma devolução válida, nos termos desse documento, você poderá optar pela devolução do valor pago e a Brasil Chuteiras devolverá seu dinheiro.
                        O canal de suporte indicado para te ajudar no processo de devolução e reembolso de produto é o atendente que ajudou em sua compra pelo WhatsApp.
                    </p>
                    <h2>Política de Trocas</h2>
                    <p>
                        Caso você opte pela troca do produto adquirido por meio do WhatsApp, a mesma deve ser realizada em até 7 (sete) dias corridos, 
                        contados a partir da data do recebimento. Para isso, é importante que os produtos estejam em boas condições, que não tenham sido utilizados e
                        que contenham as etiquetas com as quais foram entregues a você. 
                        Você pode efetuar a troca entrando em contato com o atendente que o ajudou em suas compras por WhatsApp.
                        Para confirmar todos os requisitos citados anteriormente, é necessário que você tire uma foto do produto, comprovando sua integridade, com a etiqueta e a nota fiscal
                        do envio no momento da entrega aos correios e enviar ao nosso atendimento pelo WhatsApp.
                        Você pode escolher qualquer item de troca. No caso de haver uma diferença no valor, sendo mais baixo, a diferença deverá ser coberto pela Brasil Chuteiras.
                        No caso do valor do novo produto ser maior, você deverá acrescentar a diferença de valor via PIX.
                        A troca do produto será realizada dentro no prazo padrão de um pedido, podendo levar cerca 20 (vinte) dias úteis, com possíveis alterações conforme citado na seção 
                        de <Link to="/envio"><b>Prazo de Entrega</b></Link>.
                        O canal de suporte indicado para te ajudar no processo de troca de produto é o atendente que ajudou em sua compra pelo WhatsApp.
                    </p>
                </div>
            </div>
            {/* <BannerBottom/> */}
            <Footer/>
        </div>
    )
}

export default RefundPage