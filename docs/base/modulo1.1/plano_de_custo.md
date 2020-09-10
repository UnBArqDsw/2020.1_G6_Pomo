# **Plano de Custo**

## Histórico de revisões

|Data|Versão|Descrição|Autor|
|:---:|:---:|:---:|:---:|
|09/09/2020|1.0|Criação da página e adição de conteúdo |[Arthur Rodrigues](https://github.com/arthurarp)|
|09/09/2020|1.1|Adição de modelos de estimativa, escolha do modelo e visão geral sobre o COCOMO |[Arthur Rodrigues](https://github.com/arthurarp)|




## **Sumário**

1. [Introdução](#1-introdução)
2. [Objetivo](#2-objetivo)
3. [Modelos de estimativa](#3-modelos-de-estimativa)
4. [Escolha do modelo](#4-escolha-do-modelo)
5. [COCOMO](#5-cocomo)
6. [Aplicação](#6-aplicacao)
7. [Referências](#7-referencias)


### 1. **Introdução**

De acordo com Antônio Mendes da Silva Filho, professor e consultor em tecnologia da informação e comunicação, a definição para estimativa de custo de software é: "O processo de prever a quantidade de esforço e tempo necessários para desenvolver esse artefato ou produto."  [[2]](#7-referencias)

Uma outra abordagem é a da pesquisadora Maristela Meller que diz em seu trabalho: "O custo de fabricação é o valor dos insumos efetivamente utilizados na fabricação de um determinado produto, ou seja, o valor dos materiais, máquinas e equipamentos, custos gerais de fabricação (por exemplo, energia elétrica, água e depreciação), mão-de-obra produtiva e mão-de-obra de gerência e supervisão, serviços de apoio à produção (por exemplo, manutenção, almoxarifado, refeitório), entre outros, realmente envolvidos no processo de fabricação do produto em questão." [[3]](#7-referencias)

Segundo Fenton e Pfleeger (1997): "Uma estimativa é uma avaliação de probabilidade. Uma estimativa só é útil se for razoavelmente precisa. Não se espera que uma estimativa seja exata, mas que seja precisa o suficiente para que se tenha segurança de fazer julgamentos e tomar decisões, considerando os limites do intervalo de confiança."  [[3]](#7-referencias)


### 2. **Objetivo**

Estimativas são necessárias nas fases iniciais do ciclo de vida de cada projeto, pois há uma necessidade de apresentar propostas apropriadas de negócio e administrar corretamente os recursos ao longo do mesmo. O uso de técnicas formais de estimativa pode dobrar a probabilidade do projeto de software ser concluído com sucesso, conforme indicaram as pesquisas de Roetzheim (2000b). [[4]](#7-referencias)

Por falar em recursos, esses são itens realmente complicados de lidar, pois a habilidade intelectual dos membros pode variar bastante, já que depende de uma análise das competências de cada indivíduo. Os recursos financeiros e físicos podem ser suficiente para alguns projetos e insuficientes para outros além do prazo que varia bastante de cliente para cliente e de projeto para projeto. [[1]](#7-referencias) E um dos objetivos deste artefato é mensurar, em forma de valor, essas incertezas advindas do processo de desenvolvimento de software.

### 3. **Modelos de estimativa**
Abaixo uma pequena tabela, um resumo, com os principais benefícios e limitações de alguns modelos de estimativa de projeto de software.

|Modelo|Métricas|<p align=center>Benefícios|<p align=center>Limitações|
|:----:|:---:|:-------|:-------|
|Opinião de especialistas|  Independente | - Método rápido;<br> - Custo relativamente baixo;<br> - Se o especialista possuir experiência em projetos similares, as estimativas podem ser bastante precisas.| - Depende muito do conhecimento do especialista;<br> - Difícil de documentar os aspectos considerados na estimativa.|
|COCOMO| Orientada ao tamanho | - Abrange vários escopos de projeto (pequenos, médios e grandes);<br> - Mais formal e preciso; <br> - Considera o conhecimento da equipe de desenvolvimento; <br> - Os direcionadores de custos são úteis para o estimador entender o impacto de diferentes fatores que afetam os custos do projeto. | - As entradas são consideradas subjetivas ;<br> - Dificuldade na  quantificação de certos fatores |
|Pontos de função| Orientada à função | - Independe da linguagem de programação; <br> - Independe do tamanho do projeto. | - Método se tornando obsoleto, devido ao fato dos frameworks gerarem muitas linhas de código, o que não exige tanto tempo do programador; <br> - O modelo não considera a reutilização de código.   |
|Price-to-win| Independente | - Conquista de contrato;<br> - Bom para empresas de cunho mais agressivo de disputa de mercado.<br> | - Os custos, normalmente, não refletem o esforço exigido; <br> - As chances de que o cliente venha a receber o produto são menores.|

### 4. **Escolha do modelo**

Nesta primeira versão, não conseguimos aprofundar nos vários modelos existentes. Mas com base na tabela acima, na experiências dos colegas que já fizeram a disciplina e no exemplo de um caso mencionado pela professora, Milene Serrano, em que as expectativas foram atentidas; levando em conta esses aspectos, **o método COCOMO pareceu ser uma boa e atraente escolha como técnica de estimativa de projeto de software para o POMO**.


### 5. **COCOMO**

COCOMO (Constructive Cost Model) ou Modelo de Custo Construtivo, é um modelo de estimativa do tempo de desenvolvimento de um software. Criado por Barry Boehm. É baseado no estudo de sessenta e três projetos. Os programas examinaram de 2.000 a 100.000 linhas de código em linguagens de programação de Assembly a PL/I. Pelo fato dessa metodologia ter utilizado várias linguagens de programação para criar as deduções, constantes e atributos para cada situação, esse método pode ser considerado generalista e útil para quase todos os projetos de software. O COCOMO pode ser divido em três implementações, a depender do tipo de software que será desenvolvido e qual o grau de confiabilidade se quer chegar na estimativa de um projeto, são eles:

- **COCOMO Básico (Basic):** computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa (em LOC ou contagem do número de linhas de código).
- **COCOMO Intermediário (Intermediate):** computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa e um conjunto de direcionadores de custo (avaliações subjetivas do produto, do hardware, do pessoal e dos atributos do projeto).
- **COCOMO Detalhado (Detailed):** além das características do COCOMO intermediário, inclui uma avaliação do impacto dos direcionadores de custo sobre cada etapa do desenvolvimento.


**O modelo COCOMO pode ser aplicado em três classes de projetos:**

- **Modo Orgânico:** Projetos simples, relativamente pequenos, com conjuntos de requisitos não tão rígidos, com equipes pequenas e experientes.
- **Modo Semidestacado:** Projetos intermediários (em tamanho e complexidade), com alguns requisitos rígidos e outros não tão rígidos, com níveis mistos de experiência nas equipes.
- **Modo Embutido:** Projetos com conjunto rígido de restrições operacionais, tanto de hardware, quanto de software. [[4]](#7-referencias)


### 6. **Aplicação**




### 7. **Referências**
1. Módulo Projeto Não Orientado a Abordagens Específicas da disciplina Arquitetura e Desenho de Software. VideoAula 02f - DSW - Base - Estimativas. Professora Milene Serrano. Universidade de Brasília.
2. FILHO, Antônio Mendes da Silva. "Estimativa de custo de software: roteiro e dicas para estimativas de projeto". Revista Espaço Acadêmico, nº 156. Maio, 2014. Disponível em: <http://periodicos.uem.br/ojs/index.php/EspacoAcademico/article/view/23850/12975>. Acesso em: 09/09/2020. 
3. MELLER, Maristela Corrêa. "Modelos Para Estimar Custos De Software: Estudo Comparativo Com Softwares De Pequeno Porte" Junho, 2002. Disponível em: <https://repositorio.ufsc.br/xmlui/bitstream/handle/123456789/82351/184841.pdf?sequence=1>. Acesso em: 09/09/2020. 
4. AGUIAR, Lucas. Estimativas de Custo. A Monitoria, 2019. Disponível em: <https://2019-2-arquitetura-desenho.github.io/wiki/dinamica_seminario_I/estimativas_de_custo>. Acesso em: 09/09/2020.