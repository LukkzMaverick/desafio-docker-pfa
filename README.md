# desafio-docker-pfa

mysql:
<code>docker network create pfa</code>
<code>docker run --network=pfa -d -p 3005:80 -v $(pwd)/mysql:/var/lib/mysql -e MYSQL_DATABASE=nodedb -e MYSQL_ROOT_PASSWORD=root --name db mysql:5.7</code>
<code>docker exec -it db bash</code>
<code>mysql -uroot -p</code>
digitar senha "root"
<code>use nodedb</code>
<code>create table cursos(id int primary key auto_increment, name varchar(255));</code>
<code>insert into cursos(name) values ("Docker"), ("Fundamentos de Arquitetura de Software"), ("Comunicacao"), ("RabbitMQ"), ("Apache Kafka");</code>

<code>docker run --name=nodecontainer --network=pfa -it -v $(pwd)/node-server:/usr/src/app lukkzmaverick/pfa-desafio1 bash</code>
<code>npm i</code>
<code>npm start</code>

Em outra aba:
<code>docker run --network=pfa -d -p 8080:80 lukkzmaverick/pfa-desafio1-nginx</code>
acessar http://localhost:8080

