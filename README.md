# desafio-docker-pfa

## Getting Started

<code>git clone git@github.com:LukkzMaverick/desafio-docker-pfa.git</code><br/><br/>
<code>cd desafio-docker-pfa</code><br/><br/>
<code>docker network create pfa</code><br/><br/>
<code>docker run --network=pfa -d -p 3005:80 -v $(pwd)/mysql:/var/lib/mysql -e MYSQL_DATABASE=nodedb -e MYSQL_ROOT_PASSWORD=root --name db mysql:5.7</code><br/><br/>
<code>docker exec -it db bash</code><br/><br/>
<code>mysql -uroot -p</code><br/><br/>
digitar senha "root"<br/><br/>
<code>use nodedb;</code><br/><br/>
<code>create table cursos(id int primary key auto_increment, name varchar(255));</code><br/><br/>
<code>insert into cursos(name) values ("Docker"), ("Fundamentos de Arquitetura de Software"), ("Comunicacao"), ("RabbitMQ"), ("Apache Kafka");</code><br/><br/>
<code>exit</code><br/><br/>
<code>exit</code><br/><br/>
<code>docker run --name=nodecontainer --network=pfa -it -v $(pwd)/node-server:/usr/src/app lukkzmaverick/pfa-desafio1</code><br/><br/>
<code>npm i</code><br/><br/>
<code>npm start</code><br/><br/>

Em outra aba:<br/><br/>
<code>docker run --network=pfa -d -p 8080<br/><br/>:80 lukkzmaverick/pfa-desafio1-nginx</code><br/><br/>
acessar http://localhost:8080<br/><br/>

