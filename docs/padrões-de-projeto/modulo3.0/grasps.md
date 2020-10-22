# GRASPs

## Histórico de revisões

| Data       | Versão | Descrição          | Autor                                             |
| :--------- | :----- | :----------------- | :------------------------------------------------ |
| 19/10/2020 | 1.0    | Criação do arquétipo do documento  | [João Gabriel Antunes](https://github.com/flyerjohn) |
| 21/10/2020 | 1.1    | Adição de conteúdo | [João Gabriel Antunes](https://github.com/flyerjohn) |
| 21/10/2020 | 1.2    | Adição das definições controlador e criador | [João Gabriel Antunes](https://github.com/flyerjohn) |

## 1. Introdução
Padrões de projeto (design patterns) são soluções típicas para problemas comuns em projeto de software. Cada padrão é como uma planta de construção que você pode customizar para resolver um problema de projeto particular em seu código. Padrões são como um conjunto de ferramentas para soluções de problemas comuns em design de software, ou seja, eles definem uma linguagem comum que ajuda a equipe a se comunicar mais eficientemente, e portanto, aumentando seu desempenho cotidiano.

## 2. Definições
Os GRASPs, da sigla em inglês para ***General responsibility assignment software patterns***, consistem em diretrizes para atribuir responsabilidade a classes e objetos em um projeto orientado a objetos, como é o caso do Pomo.
Os diferentes padrões e princípios utilizados no GRASP são: *controller* (controlador), *creator* (criador), *indirection* (indireção), *information expert* (especialista), alta coesão, baixo acoplamento, polimorfismo, *pure fabrication* (fabricação/invenção pura) e *protected variations* (variações protegidas). Todos esses padrões respondem a algum problema, e esses problemas são comuns a quase todos os projetos de desenvolvimento de software. Essas técnicas não foram inventadas a fim de criar novas formas de trabalho, mas para melhor documentar e padronizar os antigos e amplamente praticados princípios de programação em padrões orientado a objetos.
<br><br>
**GRASP Criador** <br>
A criação de objetos é uma das mais comuns atividades em um sistema orientado a objetos. Descobrir qual classe é responsável por criar objetos é uma propriedade fundamental da relação entre objetos de classes particulares.

Em geral, uma classe **B** deve ser responsável por criar instâncias de classe **A** se uma, ou preferencialmente mais, das seguintes afirmações se aplicam:<br>
* Instâncias de **B** contêm ou agregam instâncias de **A**;
* Instâncias de **B** gravam instâncias de **A**;
* Instâncias de **B** utilizam de perto instâncias de **A**;
* Instâncias de **B** têm as informações de iniciação das instâncias de **A** e passam isso na criação.<br>

**GRASP Controlador**<br>
Esse foco atribui a responsabilidade de manipular eventos do sistema para uma classe que não seja de interface do usuário (UI) que representa o cenário global ou cenário de caso de uso. Um objeto controlador é um objeto de interface não-usuário, responsável por receber ou manipular um evento do sistema.
Um caso de uso controlador deve ser usado para lidar com todos os eventos de casos de uso e pode ser usado para mais de um caso de uso (por exemplo, para casos de uso como Criar usuário e Excluir usuário, pode ter um único UserController, em vez de dois casos de user controllers separados).

É definido como o primeiro objeto além da camada UI que recebe e coordena ("controla") operações do sistema. O controlador deve delegar o trabalho que precisa ser feito para outros objetos; ele coordena ou controla a atividade, no entanto ele não deve fazer muito trabalho por si próprio. O GRASP Controlador pode ser considerado uma parte da camada de aplicação/serviço (assumindo que a aplicação tenha feito uma distinção explícita entre a camada de aplicativo/serviço e a camada de domínio em um sistema orientado a objetos com camadas comuns em uma arquitetura lógica do sistema de informações).

## 3. Aplicações

## 4. Referências
> Larman, Craig; 2005. [Applying UML and Patterns – An Introduction to Object-Oriented Analysis and Design and Iterative Development 3rd ed](https://www.informit.com/promotions/phptr-author-supplements-141295?utm_source=authors.phptr.com). New Jersey: Prentice Hall. ISBN 0-13-148906-2. Acesso em 20/10/2020.