# Trash Game (Proyecto Independiente)
Es la version beta del  videojuego en la cual con las tecnologias de EXPO y React Native se desarrollo, con el proposito de crear una propuesta a una solución. \
Para esta propuesta, se desarrollo con un equipo de cinco personas:
- Fernanda Yaratsi Escamilla Mera
- Hakeem Noe Mora Rodriguez
- Daniel Paulino Bautista Gárcia
- Carlos Andres Pérez Hernández
- Kevin Pérez Escamilla 
## Funcionamiento
Esta aplicación consta de 3 partes:
- Aplicación Movil (React native)
- API REST (Node JS)
- Firebase

## Diagrama  de Funcionamiento

``` mermaid
sequenceDiagram
  actor U as USER
  participant F as Front End
  participant B as Back End
  participant DB as Firebase
  U ->> F : Interacción
  F -->> B : API REST (Autentificación, Consultas)
  B -->> DB : Operaciones CRUD
  DB -->> B : Resultado de las Operaciones
  B -->> F : Respuesta al Front End
```
