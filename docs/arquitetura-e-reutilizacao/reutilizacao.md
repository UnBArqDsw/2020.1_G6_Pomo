# **Documento de Reutilização de Software**

## **Histórico de revisões**

|    Data    | Versão |                  Descrição                   |                      Autor                       |
| :--------: | :----: | :------------------------------------------: | :----------------------------------------------: |
| 16/11/2020 |  1.0   |       Criação do documento (Template)        | [Arthur Rodrigues](https://github.com/arthurarp) |
| 20/11/2020 |  1.1   | Adicionando tópico de introdução e objetivos | [Arthur Rodrigues](https://github.com/arthurarp) |
| 20/11/2020 |  1.2  | Adicionando reutilização no SwiftUI | [João Gabriel Antunes](https://github.com/flyerjohn) |

## 1 **Introdução**

O desenvolvimento de sistemas de informação é tipicamente conhecido como um processo caro e lento. A pressão que acompanha esse processo, bem como a busca constante por redução significativa de custos e alcance de ganhos incomparáveis em qualidade do produto, associados à redução do tempo de desenvolvimento fazem com que o resultado final e a excelência fiquem aquém do desejado. Uma possível solução, que pode não resolver todos os problemas, mas pode ajudar a lidar com esse processo é a reutilização. [[1]](#referencias)

## 2 **Objetivos**

A reutilização de software se baseia no uso de conceitos, produtos ou soluções previamente elaboradas ou adquiridas para criação de um novo software, visando melhorar significativamente a qualidade e a produtividade. [[1]](#referencias)

## 3 **Reutilização de Código no Pomo**
### 3.1 Projeto em SwiftUI 

O projeto em SwiftUI, utilizando o padrão MVVM, reutilizou dois grandes pacotes, os SPM (Swift Package Manager).<br>
O primeiro, o SwiftUICharts, foi utilizado para estilizar os componentes estatísticos, da página Stats (Estatísticas). Porém, nosso time precisou adaptar grande parte do código para atender as necessidades da aplicação em si. A imagem abaixo demonstra a estrutura básica de um SPM, aproveitando esse primeiro exemplo.
![SPM1](../img/SPM1.png)

O segundo pacote utilizado foi o SwiftyChat, que agiliza a implementação de um chat básico, disponibilizando a capacidade de adaptarmos a UI e a comunicação com o backend conforme o necessário pro nosso projeto. A imagem abaixo demonstra as dependências desse pacote de Swift.
![SPM2](../img/SPM2.png)

## **Pontos Candidatos à Reutilização**

### **Ponto 1**

### **Justificativa**

## **Referências**

> 1. Reutilização de Software - Revista Engenharia de Software Magazine 39. Devmedia, 2011. Disponível em: <https://www.devmedia.com.br/reutilizacao-de-software-revista-engenharia-de-software-magazine-39/21956>. Acesso em: 20/11/2020.
