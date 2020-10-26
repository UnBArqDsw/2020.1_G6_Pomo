# GoFs Criacionais

## Histórico de revisões

| Data       | Versão | Descrição          | Autor                                             |
| :--------- | :----- | :----------------- | :------------------------------------------------ |
| 20/10/2020 | 1.0    | Criação da página  | [André Eduardo](https://github.com/Andre-Eduardo) |
| 21/10/2020 | 1.1    | Adição de conteúdo | [André Eduardo](https://github.com/Andre-Eduardo) |
| 26/10/2020 | 1.2 | Revisão da primeira versão | [João Gabriel Antunes](https://github.com/flyerjohn)|
<br>

### 1. Introdução

Padroes de projeto são soluções para problemas comuns que encontramos no desenvolvimento ou manutenção de um software.

Os padrões de criacionais são padrões de que lidam com mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

<br>

### 2. Resutados

### Factory Method

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
<br>
** Estrutura: **<br>
![Factory](../../img/padroes/criacionais/factory.png)<br>
** Benefícios: **

- Evita acoplamentos firmes entre o criador e os produtos concretos.<br>
- Princípio de responsabilidade única. E possivel mover o código de criação do produto para um único local do programa, facilitando a manutenção do código.<br>
- Princípio aberto/fechado. E possivel introduzir novos tipos de produtos no programa sem quebrar o código cliente existente<br>

#### Aplicabilidade:

- Use o Factory Method quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar.<br>
- Use o Factory Method quando desejar fornecer aos usuários da sua biblioteca ou framework uma maneira de estender seus componentes internos.<br>
- Use o Factory Method quando deseja economizar recursos do sistema reutilizando objetos existentes em vez de recriá-los sempre.<br>

#### Implementação no Pomo:

É possível aplicar o padrão Factory method na parte de chat do sistema .<br>
![chat](../../img/padroes/criacionais/padrao-chat.png)<br>

### Abstract Factory

O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.<br>
** Etrutura: **<br>
![Factory](../../img/padroes/criacionais/abstract.png)<br>
** Benefícios: **<br>

- E possivel ter certeza que os produtos que você obtém de uma fábrica são compatíveis entre si.
- Evita um vínculo forte entre produtos concretos e o código cliente.
- Princípio de responsabilidade única. Você pode extrair o código de criação do produto para um lugar, fazendo o código ser de fácil manutenção.
- Princípio aberto/fechado. Você pode introduzir novas variantes de produtos sem quebrar o código cliente existente

#### Aplicabilidade:

- Use o Abstract Factory quando seu código precisa trabalhar com diversas famílias de produtos relacionados, mas que você não quer depender de classes concretas daqueles produtos-eles podem ser desconhecidos de antemão ou você simplesmente quer permitir uma futura escalabilidade.

#### Implementação no Pomo:

Até o momento não foi encontrado aplicações do padrão dentro do Pomo

### Builder

O Builder é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção
** Etrutura: **<br>
![Builder](../../img/padroes/criacionais/builder.png)<br>
** Benefícios: **<br>

- Você pode construir objetos passo a passo, adiar as etapas de construção ou rodar etapas recursivamente.
- Você pode reutilizar o mesmo código de construção quando construindo várias representações de produtos.
- Princípio de responsabilidade única. Você pode isolar um código de construção complexo da lógica de negócio do produto.

#### Aplicabilidade:

- Use o padrão Builder quando você quer que seu código seja capaz de criar diferentes representações do mesmo produto
- Use o Builder para construir árvores Composite ou outros objetos complexos.

#### Implementação no Pomo:

Até o momento não foi encontrado aplicações do padrão dentro do Pomo

### Singleton

O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.
** Etrutura: **<br>
![Builder](../../img/padroes/criacionais/singleton.png)<br>
** Benefícios: **<br>

- Você pode ter certeza que uma classe só terá uma única instância.
- Você ganha um ponto de acesso global para aquela instância
- O objeto singleton é inicializado somente quando for pedido pela primeira vez.

#### Aplicabilidade:

Utilize o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.

- Utilize o padrão Singleton quando você precisa de um controle mais estrito sobre as variáveis globais.

#### Implementação no Pomo:

Até o momento não foi encontrado aplicações do padrão dentro do Pomo

### 3. Referências

>Design Patterns. Refactoring Guru, 2014. Disponível em: <https://refactoring.guru/pt-br/design-patterns/creational-patterns>. Acesso em: 20, outubro de 2020.

>Serrano, Milene. 2020. [Aula GoFs Criacionais](https://aprender3.unb.br/pluginfile.php/26808/mod_label/intro/Arquitetura%20e%20Desenho%20de%20Software%20-%20Aula%20GoFs%20Criacionais%20-%20Profa.%20Milene.pdf). Acesso em 19/10/2020.