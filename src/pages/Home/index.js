import { Link } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import { PATHS } from "../../routes/paths";

function Home() {
    return (
        <DefaultLayout>
            <p>
                Este é o desafio para seleção para desenvolvedores Front-End React JS. Você deve
                construir uma página de exibição de dados de servidores conforme o modelo
                apresentado no Figma. Não é necessário construir a página com fidelidade total de
                estilização, pois, o mais importante para nós é conhecer a sua habilidade e domínio
                da biblioteca React, contudo, se você conseguir ser fiel ao modelo do Figma isso
                será considerado um plus.
            </p>

            <Link to={PATHS.servers}>
                <button>Ir para solução</button>
            </Link>
        </DefaultLayout>
    );
}

export default Home;
