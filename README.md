# PI2Sem
Repositório com os arquivos relacionados ao Projeto Integrador 2 Semestre - SaneaSP
1.	DESCRIÇÃO DO PROJETO
1.1.	Proposta do Software
O presente projeto tem como objetivo abranger duas  ODSs: Água Potável e Saneamento (ODS6) e Saúde e Bem-Estar (ODS3), por meio de um website. A função do site SaneaSP é auxiliar a prefeitura ou o órgão responsável pelo saneamento básico e administração da água da cidade, disponibilizando de forma rápida e organizada uma série de comentários e denúncias de problemas que estão ocorrendo na região, servindo como um centro de informações para os responsáveis.
Além disso, o site disponibilizará informações aos usuários, permitindo o acesso aos dados sobre saneamento e água potável de forma rápida e fácil, ajudando os usuários a se prevenirem de doenças e a ficarem atentos às notícias recentes sobre esse assunto.
 Dessa forma, o projeto prevê reduzir a invisibilidade dos problemas de saneamento na sua cidade, contribuindo tanto para os responsáveis quanto para os cidadãos do local.
1.2.	Justificativa 
Foram escolhidas as ODSs seis e três (Água Potável e Saneamento, e Saúde e Bem-Estar, respectivamente), pois operam uma relação de causa e consequência entre si, já que populações com saneamento básico e água potável estão protegidas de uma ampla gama de doenças. 
Todavia, problemas de saneamento e esgoto, como as fossas a céu aberto e canos de água estourados não recebem a devida atenção dos órgãos responsáveis. Mesmo com a infraestrutura para resolver tais problemas, muitas vezes não há a percepção de que esses problemas sequer estão acontecendo.
 Além disso, a desinformação da população em relação as consequências da falta de saneamento básico, como as doenças que ela dissemina, dificulta a comunicação entre a governança e a população, pois ambos não sabem que existe um problema a ser resolvido.
Somado a isso, a má divulgação dificulta que a população saiba se a prefeitura está se mobilizando para resolver estes problemas, o que a desestimula a denunciá-los.
Portanto, haja vista esses obstáculos, foi analisada uma chance de colaborar para a redução desses problemas, por meio de um site focado justamente em tornar a manutenção do saneamento básico e as atitudes da governança mais visíveis e mostrar os problemas do cotidiano, informar, e divulgar notícias para a população.
1.3.	Mapa do Site
1.4.	Logomarca
 

2.	REQUISITOS DO PROJETO
2.1.	Levantamento de Requisitos
Para o levantamento de requisitos, foi observado como é o cotidiano do saneamento básico em Votorantim que é a cidade alvo do projeto, então foi percebida a necessidade da criação de um site que reúna informações e que torne a comunicação da população mais fácil.
Uma das ferramentas que foi utilizada como base é o site Reclame Aqui, que dispõe uma comunicação entre o usuário e o serviço que ele avalia, assim como o site deste projeto, que busca criar essa facilidade para os responsáveis pelo saneamento da cidade, com o sistema de comentários e respostas.

2.2.	Requisitos Funcionais
Nº Requisito	Nome	Descrição
RF001	Login	Cadastro e Login de usuários ou administradores do site.
RF002	Cadastro de Reclamações	Página de adição de reclamações.
RF003	Gerenciamento de Reclamações	Funções para que o usuário pode modificar em reclamações criadas por ele ou para administradores para todas as reclamações.
RF004	Cadastro de Usuário	Página de Adição de usuário.
RF005	Pesquisa de Reclamação	Pesquisa o título da reclamação no banco de dados.
RF006	Upload de Imagens	O usuário poderá enviar a imagem do problema que encontrou.
RF007	Exibir Doenças	Informações sobre as doenças relacionadas à falta de saneamento básico.
RF008	Registro com redes sociais	O usuário poderá fazer seu registro utilizando as suas redes sociais, utilizando sua conta google, linkedin ou facebook.
RF009	Exibir Reclamações	Exibe as reclamações feitas pelos usuários para que todos outros possam visualizar.
RF010	Filtragem de pesquisa	Filtros existentes na página de reclamações que filtraram as reclamações a serem exibidas através de tipos e bairros.
RF011	Exibição completa da reclamação	Quando o usuário clicar numa reclamação ela se expandirá para aparecer todo o conteúdo.
RF012	link para a página de reclamações (NF)	Haverá no footer um link direcionando o usuário para a página de reclamações.
RF013	Barra de Navegação	Barra para o acesso rápido de outras áreas do site.
RF014	Exibir órgãos responsáveis	Haverá no footer um link direcionando o usuário para a página de orgãos responsáveis.
RF015	Exibir doenças relacionadas	Haverá no footer um link direcionando o usuário para a página de doenças relacionadas.
RF016	Gerar log	Quando o usuário/administrador editar uma reclamação ou comentário, será gerado um log para guardar as informações alteradas.








2.3.	Diagrama de Caso de Uso 
 Figura 1 – Caso de Uso

2.4.	Descrição do Caso de Uso
Gerenciar Usuário

Tabela - Caso de uso "Cadastro”
Caso de uso	Cadastrar Usuário
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	Usuário não possuir login
Pós-condições 	O usuário possui seus dados cadastrados no sistema, possibilitando efetuar seu login
Fluxo Principal
Ações do Ator	Ações do Sistema
CADASTRAR
1.	Acessar página de cadastro	
	2.	Sistema exibe o formulário
3.	Usuário preenche o formulário com seus dados (Telefone, email, nome, CEP e senha)	
	4.	Sistema valida se todos campos estão preenchidos, se o email já existe no sistema e se é um email válido, se o CEP é válido, 
	5.	Sistema guarda as informações no banco de dados
	6.	Retorna uma mensagem de cadastro realizado com sucesso
	7.	O usuário é redirecionado para a página de login.

Tabela - Caso de uso "Login”
Caso de uso	Login de usuário
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	Usuário possuir seus dados já cadastrados no sistema
Pós-condições 	O usuário pode realizar reclamações no site
Fluxo Principal
Ações do Ator	Ações do Sistema
LOGIN
1.	Acessar página de Login	
	2.	Sistema exibe o formulário
3.	Usuário preenche o formulário com seus dados (email e senha)	
	4.	Sistema valida se todos campos estão preenchidos, se o email existe no sistema e se a senha é válida para esse usuário.
	5.	Retorna uma mensagem se o login foi efetuado com sucesso
	6.	O usuário é redirecionado para a página principal do site.

Tabela - Caso de uso "Login com redes sociais”
Caso de uso	Login com redes sociais
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	O usuário deve possuir um cadastro em alguma rede social
Pós-condições 	O usuário pode realizar reclamações no site
Fluxo Principal
Ações do Ator	Ações do Sistema
LOGIN COM REDES SOCIAIS
1.	Acessar página de Login	
	2.	Sistema exibe o formulário
3.	Usuário escolhe a rede social para efetuar login	
	4.	Sistema redireciona o usuário para a página de login da rede social
	5.	Retorna uma mensagem se o login foi efetuado com sucesso
	6.	Redireciona o usuário para a página principal

Tabela - Caso de uso "Reclamação”
Caso de uso	Reclamações
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	O usuário deve estar com seu login
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
RECLAMAÇÃO
1.	Acessar página de adicionar reclamações	
	2.	Sistema exibe o formulário
3.	O usuário preenche os dados do formulário com os campos necessários	
	4.	Sistema valida se os campos obrigatórios foram preenchidos e se há um endereço válido.
	5.	Sistema valida se o usuário enviou uma imagem, e se houver, valida o tamanho e tipo do arquivo enviado
	6.	Sistema guarda as informações no banco de dados
	7.	Retorna uma mensagem se a reclamação foi cadastrada com sucesso
	8.	Redireciona o usuário para a página de reclamações

Tabela - Caso de uso "Resposta”
Caso de uso	Resposta
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	Necessita de uma reclamação 
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
RESPOSTA
1.	Acessar página de comentários	
	2.	Sistema exibe o histórico das mensagens e uma caixa de texto para digitar seu comentário
3.	O usuário preenche a caixa de texto com seu comentário 	
	4.	Sistema valida se o usuário preencheu a caixa de texto e se foram digitadas palavras ofensivas
	5.	Sistema valida se o usuário enviou uma imagem, e se houver, valida o tamanho e tipo do arquivo enviado
	6.	Sistema grava as informações no banco de dados
	7.	Sistema atualiza a página, com os dados do comentário do usuário preenchidos

Tabela - Caso de uso "Gerar log”
Caso de uso	Gerar log
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
GERAR LOG
1.	O ator edita um comentário ou uma reclamação criada	
	2.	O sistema utiliza um trigger para registrar o conteúdo antigo e o novo em linhas da tabela de logs




Tabela - Caso de uso "Informações do site”
Caso de uso	Informações do site
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
INFORMAÇÕES DO SITE
1.	Acessar páginas informativas	
	2.	Sistema exibe as informações em ordem de atualidade
3.	O usuário pesquisa por tags para filtragem das informações ou por nome	
	4.	O sistema valida se existem informações com a tag especificada ou se existe alguma informação com o nome especificado

Tabela - Caso de uso "Administrar Doenças”
Caso de uso	Administrar Doenças
Ator Principal	Administrador
Ator Secundário	-
Pré-condições 	Possuir login de administrador
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
ADMINISTRAR DOENÇAS
1.	Acessar páginas de cadastro de informações	
	2.	Sistema exibe o formulário para o cadastro da informação
3.	O administrador preenche os campos do formulário	
	4.	O sistema valida se os dados das informações são válidos e se não são duplicados, se houver imagem, valida se o tamanho e tipo são válidos
	5.	Sistema guarda os dados no banco de dados.
	6.	Sistema informa se foi efetuado com sucesso e retorna uma mensagem.

Tabela - Caso de uso "Administrar Notícias"
Caso de uso	Administrar notícias
Ator Principal	Administrador
Ator Secundário	-
Pré-condições 	Possuir login de administrador
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
ADMINISTRAR NOTÍCIAS
1.	Acessar páginas de cadastro de informações	
	2.	Sistema exibe o formulário para o cadastro da informação
3.	O administrador preenche os campos do formulário	
	4.	O sistema valida se os dados das informações são válidos e se não são duplicados, valida se o tamanho e tipo são válidos
	5.	Sistema guarda as informações no banco de dados.
	6.	Sistema informa se foi efetuado com sucesso e retorna uma mensagem.

Tabela - Caso de uso "Configurar perfil"
Caso de uso	Configurar perfil
Ator Principal	Usuário
Ator Secundário	-
Pré-condições 	Possuir um login 
Pós-condições 	
Fluxo Principal
Ações do Ator	Ações do Sistema
CONFIGURAR PERFIL
1.	Acessar página de alteração de perfil	
	2.	Sistema exibe o formulário com valores preenchidos pelo banco 
3.	O usuário preenche o formulário e clica em salvar	
	4.	O sistema valida se houve alguma alteração no perfil e se o email é válido e não duplicado. Caso o preenchimento tenha sucesso, o sistema exibe um formulário para verificação de senha do usuário
5.	O usuário digita sua senha	
	6.	O sistema valida se a senha digitada corresponde com a senha registrada para aquele usuário
	7.	Sistema guarda as informações no banco de dados
	8.	Sistema informa que foi alterado com sucesso e retorna uma mensagem.
	9.	O sistema redireciona o usuário para a tela principal

2.5.	Requisitos Não Funcionais

Nº Requisito	Nome	Descrição
RNF001	Acesso à Internet	Os usuários terão que ter acesso para acessar o site através da internet
RNF002	Banco de Dados	Estrutura na nuvem na qual os cadastros e as reclamações serão armazenados para utilização do site.
RNF003	Responsividade	O site terá responsividade para ter um bom acesso em diferentes plataformas
RNF004	Hardwares mínimos	Será necessário que o usuário tenha pelo menos um computador ou dispositivo que acesse a internet e abra os navegadores
RNF005	Servidor	É necessário para o funcionamento do site que esteja hospedado num servidor com acesso de banco de dados e todos os recursos web que o site necessite.
RNF006	Acessibilidade	O site deverá ter acessibilidade para daltônicos, cegos, pessoas com visão debilitada e gerais.
RNF007	Animações do Site	Animações por meio do CSS e Javascript 
RNF008	Notificações	Notificar quando acontecer um erro no banco de dados, ou quando um processo for concluído corretamente com uma função ‘alert’ em Javascript.


3.	PROJETO DO SOFTWARE
3.1.	Tecnologias Utilizadas
Descrever as tecnologias que serão utilizadas para desenvolvimento da aplicação, principalmente se for uma tecnologia nova. Exemplo: nova linguagem, framework, banco de dados, API ou hardware. Colocar notas de rodapé de referências em todas as tecnologias (sempre o site oficial da tecnologia), de onde foi retirada a definição e a data de acesso
Bootstrap:  
 É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma

3.2.	Modelo de dados
3.2.1 Modelo Conceitual
 
Figura 2 - DER
         

3.2.2 Modelo Lógico
 
Figura 3 – Modelo lógico
                   Definir as entidades, atributos, relacionamentos domínios e validações. Se necessário incluir um dicionário de dados com detalhamento dos atributos. O Script das tabelas pode ser colocado no Apêndice.

3.3.	Diagrama de Classe
       Inserir aqui o diagrama de classes conceitual do sistema

3.4.	Diagrama de Atividades
Inserir aqui o diagrama de atividades (a quantidade de diagramas será definida pelo professor).  
3.5.	Diagrama de Sequência
Inserir aqui o diagrama de sequência (a quantidade de diagramas será definida pelo professor).  
3.6.	Interfaces com o usuário
Apresentar aqui as interfaces com o usuário acompanhada de uma pequena explicação esclarecendo aspectos do uso. Pode ser printscreen das páginas


4.	ESTRATÉGIA DE TESTES
Explicar o plano e se foi utilizada alguma ferramenta de testes.

5.	IMPLANTAÇÃO
Qual o link onde foi publicado ou link do Git – GitHub  
6.	REFERÊNCIAS
Listar somente as referências que têm autoria e que foram efetivamente citadas no texto. As referências sem autoria, representadas apenas por uma URL (Ex. http://pmkb.com.br/sig/padroes-frameworks/pmbok-pmi/) devem ser apresentadas ao longo do texto, em notas de rodapé, de acordo com o exemplo a seguir:
¹ Conforme disponível em: < http://pmkb.com.br/sig/padroes-frameworks/pmbok-pmi/>. Acesso em: 10 jul. 2020.

SOMMERVILLE, Ian. Engenharia de Software. 8ª ed. Pearson, 2007
 
Anexos
É opcional. Documentos agregados à obra para fins de comprovação de dados ou ilustração.
