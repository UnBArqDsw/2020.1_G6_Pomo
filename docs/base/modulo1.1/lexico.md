# Léxico

## **Histórico de revisões**
|Data|Versão|Descrição|Autor|
|:---|:---|:---|:---|
|09/09/2020|1.0|Criação do artefato primordial.|[João Gabriel Antunes](https://github.com/flyerjohn)|

## **Sumário**
1. [Introdução](#1-introdução)
2. [Objetivo](#2-objetivo)
3. [Metodologia](#3-metodologia)
4. [Vocábulos](#4-vocábulos)
5. [Referências](#5-referências)

## 1. **Introdução**

Léxico, por definição na linguística, é o repertório de palavras existentes numa determinada língua. Dentro de um escopo completamente diferente da linguística clássica, a engenharia de requisitos, o léxico é um artefato intrinsecamente importante num projeto de software, para que todos os vocábulos, ou seja, expressões oriundas do contexto em que esse software esteja inserido, sejam devidamente catalogados e definidos.<br>
Os símbolos são definidos da seguinte forma:<br> - **Noção**: é o que significa (denotação).<br> - **Impacto**: descreve o efeito/uso/ocorrência do símbolo na aplicação ou no efeito de algo na aplicação sobre ele (conotação).<br> - **Classificação**: estado, verbo ou objeto.<br> - **Sinônimos**: símbolos/palavras diferentes que possuem significado similar ou idêntico. Opcional.

## 2. **Objetivo**

O objetivo de se ter um documento de léxico, durante esse processo de modelagem de requisitos, é que a equipe de desenvolvimento e possíveis clientes e ou responsáveis pelo negócio, de maneira direta e denotativa, falem na mesma língua, ou seja, se entendam melhor, dentro do contexto do projeto.<br>
É interessante salientar que esse é um artefato altamente mutável, portanto ele pode e deve ser alterado diversas vezes ao longo do desenvolvimento, conforme novos vocábulos surjam.

## 3. **Metodologia**
Utilizaremos o modelo de tabela abaixo para registrar e definir cada palavra ao léxico:<br>

### **Símbolo**
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto/Estado/Verbo | Denotação | Conotação | Opcional |


## 4. **Vocábulos**
### L1 - Sessões de Foco
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Abstração de tarefa a ser realizada. | Toda a aplicação gira em torno das sessões de foco, coração desse software. | Atividades, objetivos, tarefas, estudos. |

### L2 - Cronômetro
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Ferramenta de contagem de tempo restante. | Com os dados do cronômetro, o usuário poderá aplicar e monitorar a técnica de foco, pomodoro. | Timer. |

### L3 - Foco
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Estado | Estado de concentração extrema e acertiva na tarefa realizada. | Durante o período de foco, o usuário só irá conseguir utilizar a parte da sessão em que estiver focado. | - |

### L4 - Charts
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Gráficos acerca do comportamento de foco do usuário. | Auxilia o usuário a visualizar o seu desempenho em cada processo de estudo. | Gráficos, estatísticas. |

### L5 - Filtrar 
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Verbo | Opção de escolha de ordenação e filtro dos dados da aplicação. | Permite o usuário a ordenar e ou filtrar sua biblioteca de sessões de foco e ou de charts. | - |

### L6 - Barra de busca
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Instanciação do local destinado a fazer pesquisa de sessões de foco, charts, amigos disponíveis na aplicação, dependendo do contexto. | Auxilia o usuário a encontrar de maneira fácil e rápida o objeto desejado. | Barra de pesquisa. |

### L7 - Perfil
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Local do sistema para os usuários popularem com objetivos e metas cumpridos de maneira pública. | Permite o início processo de socialização na aplicação. | Mural. |

### L8 - Desafio
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Verbo | Incentivo de um usuário para o outro a bater uma meta. | Participa da interação social e engajamento com sessões de foco. | *Challenge*, duelo. |

### L9 - Feed
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Objeto | Local no aplicativo para verificar atualizações de metas compartilhadas entre amigos. | Ajuda o usuário a manter todas as interações sociais organizadas. | *Timeline*, mural. |

### L10 - Pomodoro
| Classificação | Noção | Impacto | Sinônimos |
| --- | --- | --- | --- |
| Estado | Técnica utilizada para o foco. | Direciona a base de funcionamento aplicação. | - |

## 5. **Referências**

1. [Zowghi, D.; Coulin, C._Requirements Elicitation: A Survey of Techniques, Aproaches and Tools_.](https://web.eecs.umich.edu/~weimerw/2018-481/readings/requirements.pdf) Acesso em: 08/09/2020.

2. Material Complementar da disciplina Arquitetura e Desenho de Software. VideoAula 02g - DSW - Base - Glossário e Léxico. Professora Milene Serrano. Universidade de Brasília, 2020.