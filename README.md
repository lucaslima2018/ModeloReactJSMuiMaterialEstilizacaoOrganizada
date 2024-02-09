# Modelo React JS Mui Material Com Estilização Organizada
Neste projeto modelo desenvolvido em React JS, a estlização das páginas e componentes
foram implementadas em um arquivo .jsx separado chamado styleNomeDoComponenteOuPágina.jsx.
Foi implementado em um arquivo .jsx, pois as propriedades de estilização são aplicadas a
componentes gráficos que são objetos. Sendo assim, para que as configuração de estilização 
sejam reconhecidas, elas são definidas no arquivo .jsx, iportadas no arquivo da página e 
atribuídas ao componente.

Exemplo de arquivo style.jsx:

export const typography = {
    textAlign: "center", mt: "10px", mb: "10px", alignItems: "center", backgroundColor: '#fff', fontSize: '20px'
}

Exemplo de importação do arquivo de estilização .jsx no arquivo da página:

import { typography } from "./styleLogin";

Exemplo de atribuição do componente de estilização no componente da página:

const Exemplo = () => {
   
    return (
        <>
            <div className="body">
                        <Typography sx={ typography } ><strong>Bem - Vindo</strong></Typography>
            </div>
        </>
    );
}

O componente de estilização é atribuído no componente da página dentro da propriedade 'sx', que é a propriedade
utilizada para definir a estilização do componente.
