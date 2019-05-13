Feature: Ejercicio practico falabella 

    Como cliente
    Quiero saber si una receta contiene azucar y canela
    Para realizarla en casa.

    Scenario: Investigar ingredientes de recetas
     Given ya que me encuentro en google
        When busco las Sucursales "tottus sucursales"
        And selecciono "Tottus Nataniel"
        And hago clic en el "SITIO WEB"
        And ingresar a "recetas y mas"
        And selecciono dificultad "alta"
        And selecciono la receta de "CORONA DE ROLLITOS DE CANELA"
        Then buscar ingrediente "azúcar"
        And buscar otro ingrediente "canela"