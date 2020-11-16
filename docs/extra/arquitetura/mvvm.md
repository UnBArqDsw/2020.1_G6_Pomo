# Arquitetura MVVM

|    Data    | Versão |               Descrição                |                             Autor                             |
| :--------: | :----: | :------------------------------------: | :-----------------------------------------------------------: |
| 16/11/2020 |  1.0   | Criação do artefato | [João Gabriel Antunes](https://github.com/flyerjohn) |

## Introdução

A Apple anunciou o SwiftUI na WWDC 2019 (Worldwide Developers Conference), um framework declarativo para a criação de aplicações nativas para todos os seus aparelhos. Ou seja, isso significa uma nova forma de criar apps, diferente do jeito atual, utilizando Storyboards ou gerando interfaces programaticamente, termos que os desenvolvedores iOS conhecem muito bem.

O SwiftUI não segue o padrão de projeto clássico de desenvolvimento de aplicações, o MVC (Model, View, Controller), ou seja, ao iniciar um novo projeto, utilizando esse framework, no Xcode, IDE dedicada para criação de apps iOS, você não terá nenhuma *controller*. Isso não significa que não é possível utilizar o MVC, porém o MVVM (Model, View, ViewModel) irá satisfazer melhor as necessidades do SwiftUI.<br>
Mais adiante, esse padrão será dissecado para uma melhor compreensão de seu funcionamento ao lado do novo framework da Apple.

## Motivo para usar MVVM

O principal objetivo do MVVM é separar as lógicas de negócio e de apresentação da Interface de Usuario (UI). Isso melhora a testabilidade e manutenabilidade do projeto à longo prazo, o que geralmente é a chave para um possível projeto de altíssima qualidade.

Para atingir esse objetivo, o MVVM reduz as *"tomadas de decisão"* das **Views** e movem os comportamentos e estados de uma **View** para a **ViewModel**. Dessa forma, as **Views** se tornam passivas, ou seja:
* A **View** não puxa dados da **ViewModel**.
* A **View** não é responsável por se atualizar, conforme a sua **ViewModel**.
* A **View** tem seus estados controlados pela **ViewModel**.



## Referências
> [Modern MVVM iOS App Architecture with Combine and SwiftUI.](https://www.vadimbulavin.com/modern-mvvm-ios-app-architecture-with-combine-and-swiftui/) Acessado em 16/11/2020.