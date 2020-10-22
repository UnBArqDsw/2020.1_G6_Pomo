# **GoFs Estruturais**

## **Histórico de revisões**

|Data|Versão| Descrição| Autor|
| :-----: | :-----: | :------: | :------: |
| 21/10/2020 | 1.0 | Criação da página | [Arthur Rodrigues](https://github.com/arthurarp) |
| 22/10/2020 | 1.1 | Adição de conteúdo | [Arthur Rodrigues](https://github.com/arthurarp) e [Marco Antônio](https://github.com/markinlimac)|

## **1. Introdução**

## **2. Objetivo**

## **3. GoFs Estruturais**

### **Facade**

O Padrão Facade que é simples de ser aplicado e que traz grandes benefícios aos projetos é dito como sendo um padrão estrutural e está entre os 23 padrões de projeto do GoF (Gang of Four).

Entende-se por padrão estrutural todo padrão de projeto que trata da associação entre classes e objetos.

Como o nome sugere Facade, é realmente uma fachada, podemos fazer a seguinte analogia, quando caminhamos em frente a um prédio com uma bela fachada, vemos as belas janelas as paredes bem decoradas, ou seja um ambiente bem amigável, e ignoramos toda a complexidade por trás da obra, a quantidade de salas, todas as empresas que estão neste prédio, deste modo o Facade também age nos projetos de software, dentre seus benefícios, alguns são:

* Reduz a complexidade de uma api, liberando acesso a métodos de alto nível encapsulando os demais.
* Produz uma interface comum e simplificada.
* Pode encapsular uma ou mais interfaces mal projetadas em uma mais concisa.
* Reduz drasticamente o acoplamento entre as camadas do projeto.

#### **Estrutura**

![diagrama_do_facade](/img/facade/diagrama.png)

[link original da imagem](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F270145677623956070%2F&psig=AOvVaw1Uml3qmjOJTHpvBtMZ9mVH&ust=1603486005511000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjywICJyewCFQAAAAAdAAAAABAr)

#### **Benefícios**

Pudemos perceber com a aplicação do Padrão Facade não importa quantas classes tenhamos na visualização ou no negócio, elas sempre irão interagir por um único caminho, mantendo a arquitetura coerente bom baixo acoplamento e com alta manutenabilidade.

Sua aplicação nos projetos já existentes não é de grande complexidade, por isso foi o escolhido para ser o primeiro padrão apresentado.

#### **Aplicabilidade**

* Diminuir o acoplamento entre camadas.
* Esconder a complexidade de 03 objetos de negócio para inserir um único cliente.
* Tornar o código mais manutenível na medida em que as classes de visualização e negócio forem aumentando em quantidade.

#### **Implementação no Pomo**
É possível aplicar o padrão Facade na parte de API do sistema .
![facade](/img/facade/facade.png)

## **4. Referências**


https://www.devmedia.com.br/o-padrao-facade-aplicado/12683