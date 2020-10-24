# **GoFs Estruturais**

## **Histórico de revisões**

|Data|Versão| Descrição| Autor|
| :-----: | :-----: | :------: | :------: |
| 21/10/2020 | 1.0 | Criação da página | [Arthur Rodrigues](https://github.com/arthurarp) |
| 22/10/2020 | 1.1 | Adição de conteúdo | [Arthur Rodrigues](https://github.com/arthurarp) e [Marco Antônio](https://github.com/markinlimac)|
| 24/10/2020 | 1.2 | Adicionando Exemplo de utilização do Proxy | [Arthur Rodrigues](https://github.com/arthurarp)|

## **1. Introdução**

## **2. Objetivo**

## **3. GoFs Estruturais**

### **3.1 Facade**

O Padrão Facade que é simples de ser aplicado e que traz grandes benefícios aos projetos é dito como sendo um padrão estrutural e está entre os 23 padrões de projeto do GoF (Gang of Four).

Entende-se por padrão estrutural todo padrão de projeto que trata da associação entre classes e objetos.

Como o nome sugere Facade, é realmente uma fachada, podemos fazer a seguinte analogia, quando caminhamos em frente a um prédio com uma bela fachada, vemos as belas janelas as paredes bem decoradas, ou seja um ambiente bem amigável, e ignoramos toda a complexidade por trás da obra, a quantidade de salas, todas as empresas que estão neste prédio, deste modo o Facade também age nos projetos de software, dentre seus benefícios, alguns são:

* Reduz a complexidade de uma api, liberando acesso a métodos de alto nível encapsulando os demais.
* Produz uma interface comum e simplificada.
* Pode encapsular uma ou mais interfaces mal projetadas em uma mais concisa.
* Reduz drasticamente o acoplamento entre as camadas do projeto.

#### **3.1.1 Estrutura**

![diagrama_do_facade](/img/padroes/estruturais/facade/diagrama.png)

[link original da imagem](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F270145677623956070%2F&psig=AOvVaw1Uml3qmjOJTHpvBtMZ9mVH&ust=1603486005511000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjywICJyewCFQAAAAAdAAAAABAr)

#### **3.1.2 Benefícios**

Pudemos perceber com a aplicação do Padrão Facade não importa quantas classes tenhamos na visualização ou no negócio, elas sempre irão interagir por um único caminho, mantendo a arquitetura coerente bom baixo acoplamento e com alta manutenabilidade.

Sua aplicação nos projetos já existentes não é de grande complexidade, por isso foi o escolhido para ser o primeiro padrão apresentado.

#### **3.1.3 Aplicabilidade**

* Diminuir o acoplamento entre camadas.
* Esconder a complexidade de 03 objetos de negócio para inserir um único cliente.
* Tornar o código mais manutenível na medida em que as classes de visualização e negócio forem aumentando em quantidade.

#### **3.1.4 Implementação no Pomo**
É possível aplicar o padrão Facade na parte de API do sistema .
![facade](/img/padroes/estruturais/facade/facade.png)

### **3.2 Proxy**

Proxy é um padrão de design estrutural que permite fornecer um substituto ou espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você execute algo antes ou depois que a solicitação chega ao objeto original. [[2]](#4-referencias)

#### **3.2.1 Estrutura**

![estrutura padrao do proxy](/img/padroes/estruturais/proxy/proxy_estrutura.png)


#### **3.2.2 Benefícios**
Se você precisar executar algo antes ou depois da lógica primária da classe, o proxy permitirá fazer isso sem alterar essa classe. Como o proxy implementa a mesma interface que a classe original, ele pode ser passado para qualquer cliente que espera um objeto de serviço real.

Entre outros:

* Permite deixar transparente o local (endereço) do objeto real. O cliente não precisa conhecer se o objeto é remoto ou não, este tipo de proxy é conhecido como Remote Proxy.

* Útil para realizar otimizações, como cache de objetos. Também pode ser implementado rotinas de logs e controle de acesso (segurança). Este tipo de proxy é conhecido como Virtual Proxy.

#### **3.2.3 Aplicabilidade**

O padrão Proxy sugere que você crie uma nova classe de proxy com a mesma interface que um objeto de serviço original. Em seguida, você atualiza seu aplicativo para que ele transmita o objeto proxy para todos os clientes do objeto original. Ao receber uma solicitação de um cliente, o proxy cria um objeto de serviço real e delega todo o trabalho para ele.

#### **3.2.4 Implementação no Pomo**
![proxy_pomo](/img/padroes/estruturais/proxy/routes.png)

Como podemos ver no arquivo routes.js o padrão Proxy é utilizado. Antes de acessar os endpoints, um middleware é acionado para verificar se quem processou a solicitação tem autenticação suficiente. Os middlewares fazem o papel de proxy.

## **4. Referências**


1. Fábio, 2009. Devmedia. Disponível em: <https://www.devmedia.com.br/o-padrao-facade-aplicado/12683>. Acesso em: 23/10/2020.

2. ROBERTO, Jones. Design Patterns -- Parte 14 -- Proxy. Medium. 03 Dezembro, 2019. Disponível em: <https://medium.com/xp-inc/design-patterns-parte-14-proxy-9f72c15a2ee1>. Acesso em: 23/10/2020.