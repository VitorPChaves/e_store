import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"
import Header from "../../components/header"

import './styles.css'

const PrivacyPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="privacy-policy">
                    <h1>Política de Privacidade</h1>
                    <h2>Informações Gerais</h2>
                    <p>
                        Nós, da Brasil Chuteiras, queremos oferecer a você a melhor experiência de consumo possível. Quando você acessa nossa loja virtual, 
                        nós coletamos alguns dados pessoais que você compartilha conosco para tornar nossos produtos e serviços, além da sua experiência, ainda melhores. 
                        O objetivo desta Política de Privacidade é fornecer a você uma visão clara de como usamos os dados pessoais que você nos fornece quando visita nossa loja. 
                        Nos dedicamos para proteger sua privacidade e, ao mesmo tempo, oferecer a melhor experiência possível.
                    </p>
                    <p>
                        Nosso site pode fornecer links para outros sites e aplicativos (de terceiros) para conectar você com outras funcionalidades disponíveis. 
                        Sites e aplicativos vinculados possuem seus próprios avisos ou políticas de privacidade, e recomendamos enfaticamente que você os analise. 
                        Na medida em que quaisquer sites ou aplicativos vinculados não sejam detidos ou controlados por nós, 
                        a Brasil Chuteitas não se responsabiliza pelo conteúdo de terceiros. 
                        Terceiros também podem coletar informações por meio de Sites através de cookies, plug-ins e widgets. 
                        Esses terceiros coletam dados diretamente de seu navegador web e o tratamento desses dados está sujeito às suas próprias políticas de privacidade.
                    </p>
                    <h2>Cookies</h2>
                    <p>
                        Cookies são pequenos arquivos de texto com pequenos fragmentos de dados (e geralmente com um identificador único), 
                        que ficam armazenados no seu computador ou no seu dispositivo móvel por meio do navegador ou aplicativo utilizado por você e que guarda informações relacionadas com suas preferências.
                        Para esta seção, convenientemente utilizamos “cookies” como um termo abrangente para técnicas como cookies, flash cookies e sinalizadores da web.
                        Alguns cookies expiram ao final de sua sessão na internet, enquanto outros serão salvos por prazo limitado.
                    </p>
                    <p>
                        Você também poderá configurar seu computador para receber avisos sempre que um cookie for enviado ou desativar todos os cookies. 
                        Isso é feito por meio das configurações do navegador, em cada navegador e dispositivo que utilizar. 
                        Cada navegador tem suas próprias configurações, portanto, consulte o menu Ajuda do navegador para aprender a maneira correta de editar seus cookies. 
                    </p>
                    <h2>Compartilhamento de Dados e Utilização de Dados</h2>
                    <p>
                        No momento da realização do pedido, solicitamos alguns dados como o seu nome completo, CPF, E-mail e endereço, com a finalidade de finalizar o seu pedido com o fornecedor internacional,
                        para que ele possibilidade enviar o produto até a sua casa. 
                        Estes dados compartilhados por você também são necessários para que no momento da entrega você possa comprovar o recebimento,
                        que deve ser comprovado a partir do preenchimento do documento disponibilizado pelo funcionário dos correios de sua região.
                        O documento deve ser assinado com com data, nome legível e número de CPF. 
                        *Durante a o período de pandemia Covid-19, algumas transportadoras podem não solicitar a assinatura no ato da entrega, para evitar contatos.
                    </p>
                    <h2>Segurança e Criptografia</h2>
                    <p>
                        Utilizamos uma variedade de medidas de segurança e técnicas organizacionais para proteger seus dados, 
                        incluindo ferramentas de criptografia e autenticação necessárias para manter a segurança e integridade.
                    </p>
                    <h2>Exclusão de Dados Pessoais</h2>
                    <p>
                        Você poderá, a qualquer momento, solicitar que a Brasil Chuteiras elimine seus dados pessoais. 
                        Avaliaremos e, quando necessário, cumpriremos sua solicitação de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD). 
                        Você deve se direcionar ao rodapé de nossa site, buscar pelo botão do nosso contato de WhatsApp com o nosso número. 
                        Você será encaminhado para o atendimento junto a um de nossos atendentes, podendo, então, solicitar a exclusão dos seus dados.
                    </p>
                    <h2>Alterações nas Políticas de Privacidade</h2>
                    <p>
                        A Brasil Chuteiras se obrigou a cumprir os princípios fundamentais de privacidade e proteção de dados aplicáveis pela legislação específica. 
                        Portanto, revisamos regularmente nossa política para assegurar que esta esteja livre de erros e claramente visível nos sites, 
                        que ela contenha as informações apropriadas sobre seus direitos e esteja de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD).
                        A LGPD e nossas práticas mudam ao longo do tempo. 
                        Se decidirmos atualizar nossa <b>Política de Privacidade</b>, as alterações serão publicadas em nosso site. 
                        Se modificarmos substancialmente a forma como realizamos o tratamento de seus dados pessoais, a alteração será notificada em nosso site e, 
                        quando exigido por lei, solicitaremos seu consentimento antes da implementação de tais alterações. 
                        Recomendamos fortemente que você leia nossa <b>Política de Privacidade</b> e mantenha-se informado sobre nossas práticas. 
                        Esta política foi alterada pela última vez em 09 de setembro de 2022.
                    </p>
                </div>
            </div>
            {/* <BannerBottom/> */}
            <Footer/>
        </div>
    )
}

export default PrivacyPage