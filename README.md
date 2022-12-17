<div align=center ><h1>Servico Streaming - API</h1>

        
</div>

<ol>
    <li> <a href="#introducao"> Introdução</a> •</li>
        <li> <a href="#comoinstalar"> Como instalar</a> •</li>
        <li> <a href="#comousar"> Como usar</a> •</li>
        <li> <a href="#consideracoesfinais"> Considerações finais</a> •</li>
    </ol>
<div>
<h3>Introdução</h3>
<div> Tem o intuito de avalição das competências requiridas na criação de usa Streaming de videos</div>
<br>
</div>
<div>
<h3>Como instalar</h3>
</div>  

1. Tenha um **NODE** e **PostgresSQL 11** instalado.
2. Clone o projeto.

3. Abrá o pgadmin ou plataforma de banco de dados que deseja.
4. Crie dois bancos de dados um para testes e outra para desenvolvimento.

Exemplo abaixo:

    CREATE DATABASE streaming_db;


6. Entre na pasta /assets na raiz do projeto
7. Pegue o arquivo abaixo da base de dados e importe-o na
banco de dados postgresSQL para cada uma dos banco acima;


Nome do arquivo de backup:
        20221204streaming_db.sql

**Ou usar as migrações clique abaixo para conferir (Opcional), mas se não quizer basta continuar as configurações abaixo:**

<h3>Configuração Migrations/ ou migrações (Opcional)</h3>
<details>
<summary>
    Clique aqui para saber mais!
</summary>


1. Entre no terminal de preferencia
2. Acesse a pasta /database-migrations via terminal
3. Crie um arquivo .env com o seguinte modelo abaixo:

Exemplo abaixo:

        # DEV
        DB_HOST=
        DB_PORT=
        DB_DATABASE=
        DB_USER=
        DB_PASSWORD=
        DB_DIALECT=


4. Preenchar os com as informações da configuração do banco de dados  para conectar com a base de preferencia. Como abaixo:

Exemplo:

        # DEV
        DB_HOST='localhost'
        DB_PORT=5432
        DB_DATABASE='streaming_db'
        DB_USER='postgres'
        DB_PASSWORD='admin'
        DB_DIALECT='postgres'



**Criar Base de dados**

5. Digite o **npm run dbinitstart** para criar banco de dados de testes.

**Criar Tabelas**

5. Digite o **npm run beforestart** para criar tabelas de dentro do banco.

**ATENCAO :Em alguns casos! caso ocorra algum erro na criacao das tabelas basta roda o comando aciman novamente até ele criar**

7. Verifique e a base de dados foram criadas
Agora basta ir para próxima configuração.

</details>

**Continuando .... após as bases de dados importadas**.

3. Digite na pasta do projeto npm install.
5. Crie um .env  na /raiz do projeto com as configuracao abaixo:


                DB_HOST=
                DB_PORT=
                DB_DATABASE=
                DB_USER=
                DB_PASSWORD=
                DB_DIALECT=

Preencha as configurações como o exemplo abaixo:

Exemplo preenchido .env:

                #DEV & PRODUTIONS   

                DB_HOST='localhost'
                DB_PORT=5432
                DB_DATABASE='streaming_db'
                DB_USER='postgres'
                DB_PASSWORD='admin'
                DB_DIALECT='postgres





</div>
<br>
<h3>Como usar</h3>
<div> 

1. Clone o projeto
2. Digite npm install
3. Digite npm start para rodar a aplicação 

Caso que queira buildar 

1. Digite npm run build
2. Digite npm run prod para rodar o build

A api tem 5 rotas principais.

/auth = responsável pela sessão de usuário e login

/usuarios = mansueia dados de usuário já registrado anteriormente. Ex: Lista, deletar, atualizar dados do usuário

/tags = responsável pela manuseio das tags para classificar os videos, essa rota que somente adminsitradores podem usá-las

/videos = responsável por manuseio do videos

**bônus** /favoritos = o usuário poderá favoritar videos que gostar criando uma lista de favoritos para usuário.

Confira a documentação mais detalhada da API com as rotas-><a href='https://docs-api-streaming.netlify.app/'>Clicando aqui</a>

</div>
<br>
</div><div>
<h3>Considerações finais</h3>
<div> 

Qualquer coisa entre em contato. 
Agradeço desde já!

<br>
<br>
Atenciosamente: João Guilherme

</div>
<br>
</div>
