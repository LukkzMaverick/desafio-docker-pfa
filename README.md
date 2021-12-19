# desafio-docker-pfa

mysql:
<code>docker network create pfa
docker run --network=pfa -d -p 3005:80 -v $(pwd)/mysql:/var/lib/mysql -e MYSQL_DATABASE=nodedb -e MYSQL_ROOT_PASSWORD=root --name db mysql:5.7
docker exec -it db bash
mysql -uroot -p</code>
digitar senha "root"
use nodedb
create table cursos(id int primary key auto_increment, name varchar(255));
insert into cursos(name) values ("Docker"), ("Fundamentos de Arquitetura de Software"), ("Comunicacao"), ("RabbitMQ"), ("Apache Kafka");

docker run --name=nodecontainer --network=pfa -it -v $(pwd)/node-server:/usr/src/app lukkzmaverick/pfa-desafio1 bash
npm i
npm start

Em outra aba:
docker run --network=pfa -d -p 8080:80 lukkzmaverick/pfa-desafio1-nginx
acessar http://localhost:8080

