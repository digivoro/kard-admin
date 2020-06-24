# Modelo Relacional

## Jugador
- Un Jugador tiene CartaS
- Un Jugador tiene MazoS
- Un Jugador participa en TorneoS

## Mazo
- Un Mazo tiene CartaS
- Un Mazo es valido en distintos FormatoS
- Un Mazo es usado en TorneoS

## Carta
- Una Carta pertenece a un Set
- Una Carta pertenece a JugadorES
- Una Carta es usada en TorneoS

## Torneo
- Un Torneo es jugado por JugadorES
- Un Torneo es jugado con CartaS
- Un Torneo es jugado con MazoS
- Un Torneo permite FormatoS

## Formato
- Un Formato valida SetS

## Set
- Un Set tiene CartaS
- Un Set es valido en FormatoS