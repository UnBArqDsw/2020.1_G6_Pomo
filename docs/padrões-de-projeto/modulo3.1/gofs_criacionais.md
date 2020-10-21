# GoFs Criacionais

## Histórico de revisões

| Data       | Versão | Descrição          | Autor                                             |
| :--------- | :----- | :----------------- | :------------------------------------------------ |
| 20/10/2020 | 1.0    | Criação da página  | [André Eduardo](https://github.com/Andre-Eduardo) |
| 21/10/2020 | 1.1    | Adição de conteúdo | [André Eduardo](https://github.com/Andre-Eduardo) |

### 1. Introdução

Padroes de projeto são soluções para problemas comuns que encontramos no desenvolvimento ou manutenção de um software orientado a objetos.
Os padrões de criacionais são padrões de que lidam com mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

### 2. Resutados

### Abstract Factory

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
<br>
** Etrutura: **<br>
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

### Abstract Factory

O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.<br>
** Etrutura: **<br>
![Factory](../../img/padroes/criacionais/factory.png)<br>

### 3. Referências
