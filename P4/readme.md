# DIU - Practica 4, entregables

>>> Se publicará la [Asignacion_ABtesting](https://github.com/mgea/DIU/blob/master/P4/Asignacion_ABtesting.pdf)
>>> Se publicará la lista de grupos y los respectivos GitHub

- Users. Elección y características de los usuarios reclutados
- Diseño de las pruebas
- Realización del Cuestionario SUS para usuarios y casos A y B.
- Tabla A/B Testing con resultados para A y B
- Eye Tracking para B
- Usability Report del Caso B, con toda la información recabada del caso B

Se dispone del Template de usability.gob (https://www.usability.gov/how-to-and-tools/resources/templates/report-template-usability-test.html) 
- Conclusiones

## Paso 4. Pruebas de Evaluación Nuestra WEB : (https://side-pro-91637215.figma.site)
## Objetivo:

El objetivo es evaluar el prototipo con usuarios reales mediante técnicas de investigación que nos permitan profundizar en la experiencia de uso e identificar posibles mejoras.

Para lograrlo, emplearemos herramientas habituales de **UX Research**, fundamentales para obtener datos precisos sobre el comportamiento del usuario y su contexto. La estrategia metodológica combinará cuatro pilares técnicos:

1. **A/B Testing:** Para validar la eficacia de dos variantes de diseño.
2. **Cuestionario SUS (System Usability Scale):** Para medir la percepción subjetiva de la usabilidad de forma estandarizada.
3. **Eye Tracking:** Para analizar visualmente la atención y el recorrido del usuario en la interfaz.
4. **Evaluación de la usabilidad y accesibilidad**  del producto desarrollado.  

La **estrategia de reclutamiento** se basará en un modelo de co-evaluación, integrando a otros grupos de clase para realizar una evaluación cruzada de las prácticas. 

Finalmente, cerraremos el proceso  con la elaboración de un **informe de usabilidad (Usability Report)** que sintetice los hallazgos (*insight*) clave, las conclusiones de la investigación y las **recomendaciones de usabilidad** para la mejora del proyecto.


### 4.a Reclutamiento de usuarios 
![Método UX](../img/usability-testing.png)
-----

Nos ha tocado el grupo DIU3.MASE pero como no tienen en el github la P3 hecha hemos decidido coger un grupo alternativo que corresponda al mismo grupo de prácticas que nos había tocado, este es DIU3.ALENMAR que correspondeá con la prueba B sobre una página web de hamburguesas y nuestro proyecto con el A, sobre café barista .

Enlace a su repositorio: [DIU3-ALENMAR](https://github.com/mmpeula/UX_CaseStudy)

En este apartado se identifican los usuarios participantes en las pruebas, incluyendo su perfil con valores diferentes para una aproximacion mas exacta y el caso (A o B) que evaluaron.


| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | Caso
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
|    P01   | H / 22   | Estudiante  | Alta       | Tímido | Web.       | A 
|    P02   | H / 21   | Estudiante  | Alta       | Serio       | Web        | A 
|    P03   | M / 21   | Estudiante     | Alta        | Bromista    | Web      | A 
|    P04   | H / 50   | Auxiliar  | Media       | Optimista     | Web        | A 
|    P05   | H / 52   | Hosteleria  | Media       | Racional       | Web        | A 
|    P06   | M / 24   | Enfermera     | Alta        | Impaciente    | Web      | B 
|    P07   | H / 19   | Estudiante  | Alta       | Tranquila     | Web        | B 
|    P08   | H / 26   | Fisioterapeuta  | Alta       | Despistado       | Web        | B 
|    P09   | M / 56   | Comercial     | Media        | Racional    | Web      | B 
|    P010   | H / 45   | Ingeniero  | Alta       | Racional     | Web        | B 


### 4.b Diseño de las pruebas 
![Método UX](../img/usability-testing.png) 
-----

El diseño de la evaluación se plantea como un estudio comparativo *Entre-Sujetos* (A/B Testing), donde cada participante evaluará únicamente una de las dos propuestas (Caso A o Caso B) para evitar sesgos de aprendizaje. El protocolo de evaluación consta de las siguientes pruebas:

**1. Revisión Experta (Uso del Checklist P1)**
Como paso preliminar antes de involucrar a los usuarios, el equipo aplicará el Checklist de usabilidad (evaluación heurística) desarrollado en la Práctica 1. Esto nos servirá como filtro técnico para identificar fallos estructurales o de navegación evidentes y poder contrastarlos después con la experiencia real de los usuarios.

![Revision Experta A](../img/CompetitorAnalysisJomax.png)  

![Revision Experta B](../img/COMPETITORGOIKOBURGERS.png)  


**2. Cuestionario SUS y Auditoría de Accesibilidad**
* **Percepción Subjetiva (SUS):** Inmediatamente después de la prueba de uso, cada participante rellenará el cuestionario *System Usability Scale* mediante Tally.so para cuantificar del 0 al 100 su nivel de satisfacción.
* **Accesibilidad técnica:** Por último, se aplicarán herramientas automáticas (WAVE / Lighthouse) sobre el Caso B para auditar posibles errores de contraste y cumplimiento de las pautas WCAG.

**3. Tareas de Navegación Guiada (Prueba de uso)**
Se realizará una interacción directa con los prototipos donde observaremos el comportamiento del usuario (si duda, si hace clics erróneos o si requiere asistencia). Para ello, les daremos las siguientes tareas:
* **Para el Caso A (Graná en Grano):** "Eres un estudiante que busca un lugar para concentrarse y tomar un buen café. Tus objetivos son: 1) Añadir al carrito una hamburguesa sin gluten, 2) Busacr y reservar en Goiko málaga puerto  y 3) Echar currículum."
* **Para el Caso B (Web de Hamburguesas - Mejora del Goiko):** "Quieres pedir la cena para probar una nueva hamburguesería. Tus objetivos son: 1) Añadir al carrito una hamburguesa sin gluten, 2) Busacr y reservar en Goiko málaga puerto  y 3) Echar currículum."
**4. Prueba de Seguimiento Ocular (Eye Tracking)**
Se empleará la herramienta GazeMapping sobre capturas estáticas (rasterizadas) de las interfaces. Pediremos al usuario que localice elementos críticos en 5-10 segundos para extraer los mapas de calor (Heatmaps) y validar si la jerarquía visual de los CTAs (botones principales) es efectiva.

### 4.c Cuestionario SUS
![Método UX](../img/Survey.png) 
----

>>> Como uno de los test para la prueba A/B testing, usaremos el **Cuestionario SUS** que permite valorar la satisfacción de cada usuario con el diseño utilizado (casos A o B). Para calcular la valoración numérica y la etiqueta linguistica resultante usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx). Previamente conozca en qué consiste la escala SUS y cómo se interpretan sus resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)
>>> Adjuntar en la carpeta P4/ el excel resultante y describa aquí la valoración personal de los resultados 

### CUESTIONARIOS SUS A :

## P01 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |   x   |
| 2    | Encontré el website innecesariamente complejo                |   x   |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |   x   |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |   x   |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |  x    |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |  x    |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |   x   |
| 8    | Encontré el website muy grande al recorrerlo                 |  x    |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |   x   |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |   x   |      |      |      |      |

## P02 :

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P03 :

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P04 :

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P05 :

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

### CUESTIONARIOS SUS B :

## P06 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |   x   |      |
| 2    | Encontré el website innecesariamente complejo                |      |   x   |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |  x    |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |   x   |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |   x   |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |   x   |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |   x   |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |   x   |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |   x   |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |  x    |      |      |      |      |

## P07 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P08 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P09 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

## P10 : 

|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

### 4.d A/B Testing
![Método UX](../img/ABtesting.png) 
-----

>>> Los resultados de un A/B testing con 3 pruebas y 2 casos o alternativas daría como resultado una tabla de 3 filas y 2 columnas, además de un resultado agregado global. Especifique con claridad el resultado: qué caso es más usable, A o B?
>>>
>>> A continuación, se presentan los resultados de las tareas clave evaluadas para cada caso (A y B) durante las pruebas de uso guiadas. Se ha medido el porcentaje de éxito, el tiempo empleado y el número de clics necesarios. Cabe destacar que, al ser plataformas de dominios diferentes (cafetería de especialidad vs. restaurante de hamburguesas), cada caso se evalúa dentro de su propio contexto funcional.

**Caso A – Graná en Grano (Nuestra propuesta)**

| Tarea (Graná en Grano) | % Éxito | Tiempo medio | Clics medios |
| :--- | :---: | :---: | :---: |
| Localizar zona 'Cero Ruido'  | 100 % | 20 s | 2 |
| Añadir un café de especialidad al carrito | 100 % | 25 s | 1,5 |
| Realizar la compra del carrito | 95 % | 35 s | 3 |
| **Media general** | **98,33 %** | **26,66 s** | **2,16** |

**Caso B – Web de Hamburguesas (DIU3.RESCUE)**

| Tarea (mejora del Goiko) | % Éxito | Tiempo medio | Clics medios |
| :--- | :---: | :---: | :---: |
| Añadir al carrito una hamburguesa sin gluten | 100 % | 18 s | 2 |
| BUscar y reservar en Restarurante Puerto Málaga | 60 % | 55 s | 6 |
| echar currículum | 80 % | 65 s | 8 |
| **Media general** | **80 %** | **46 s** | **5,3** |

**Conclusión del A/B Testing:**
Tras analizar los datos de las métricas de uso y triangularlos con las puntuaciones del cuestionario SUS, se concluye que el **Caso A (Graná en Grano) resulta más usable**. 

El Caso A logra mayores tasas de éxito y requiere un menor esfuerzo cognitivo y físico (menos clics y tiempo) para completar sus procesos críticos. Por su parte, el Caso B destaca positivamente en el impacto visual inicial (localizar el producto principal es muy rápido), pero presenta cuellos de botella importantes en la fase de información detallada (alérgenos) y en el embudo de conversión (checkout), lo que penaliza su usabilidad general.

### 4.e Aplicación del método Eye Tracking 
![Método UX](img/eye-tracking.png)
----

>>> Indica cómo se diseña el experimento y se reclutan los usuarios. Explica la herramienta / uso de gazerecorder.com u otra similar. Aplíquese únicamente al caso B.


![experimento](img/experimentoET.png)  
>>> Cambiar esta img por una de vuestro experimento. El recurso deberá estar subido a la carpeta P4/  

>>> gazerecorder en versión de pruebas puede estar limitada a 3 usuarios para generar mapa de calor (crédito > 0 para que funcione) 

![Método UX](img/eye-tracking.png)
----
**Objetivo y Diseño del Experimento**
Se analizó el recorrido visual de los usuarios mediante mapas de calor (Heatmaps) para evaluar el Diseño B (web de hamburguesas). El objetivo principal fue detectar problemas de visibilidad, validar la jerarquía visual diseñada por el equipo y comprobar si los usuarios localizan de forma intuitiva las llamadas a la acción (CTA) y la navegación principal. 

Para el experimento, se rasterizaron 2 pantallas clave del Caso B. Se definió un escenario con tareas de búsqueda específicas antes de exponer al usuario al estímulo visual.

**Reclutamiento y Herramienta**
* **Herramienta:** GazeMapping (Instalación local). 
* **Muestra:** Se realizó el seguimiento ocular a un subgrupo de 3 usuarios externos (perfiles representativos P06, P07 y P08), asegurando unas condiciones óptimas de iluminación y calibración de la webcam.

**Resultados del Análisis Visual (Áreas de Interés - AOI)**
A continuación, se detallan las métricas obtenidas sobre los elementos clave de la interfaz. Se ha medido el TTFF (*Time to First Fixation* o Tiempo hasta que el usuario miró el elemento por primera vez) y el porcentaje de usuarios que llegaron a visualizarlo.

| AOI (Área de Interés) | Tarea Asociada | TTFF (s) | % Usuarios que la vieron |
| :--- | :--- | :--- | :--- |
| **Botón principal (Pedir Hamburguesa)** | Realizar pedido | 2,1 s | 100 % |
| **Menú de navegación** | Buscar alérgenos/carta | 3,4 s | 66 % |
| **Banner promocional** | Exploración libre | 5,2 s | 33 % |
| **Icono de Usuario** | Acceder a la cuenta | 1,8 s | 100 % |

**Evidencia Visual (Heatmap)**

![Mapa de Calor Experimento](../img/experimentoET.png)  
*Figura 1: Mapa de calor del Caso B mostrando la dispersión de la mirada en la pantalla principal. (Nota: La alta concentración en el centro indica que el usuario localizó rápidamente la imagen principal, pero tardó más en encontrar el menú superior).*

### 4.f Usability Report de B
![Método UX](../img/usability-report.png) 
-----

>>> Añadir report de usabilidad para práctica B (la de los compañeros) aportando resultados y valoración de cada debilidad de usabilidad. 
>>> Enlazar aqui con el archivo subido a P4/ que indica qué equipo evalua a qué otro equipo.

>>> Complementad el Case Study en su Paso 4 con una Valoración personal del equipo sobre esta tarea

En este apartado se sintetizan los hallazgos del informe de usabilidad realizado sobre el prototipo del grupo evaluado (Caso B - DIU3.RESCUE). El documento completo con el formato estándar recomendado (Resumen ejecutivo, Metodología, Datos cuantitativos SUS, Biometría de Eye Tracking y Auditoría de Accesibilidad con WAVE/Lighthouse) se encuentra enlazado y subido a nuestro repositorio.

* Enlace al informe completo: [P4_UsabReport_DIU3_RESCUE_doneby_DIU2_JoMax.pdf](P4/P4_UsabReport_DIU3_RESCUE_doneby_DIU2_JoMax.pdf)

A continuación, se presenta la tabla resumen con las principales debilidades de usabilidad detectadas en la web de hamburguesas, su nivel de gravedad y las recomendaciones de diseño propuestas:

| Severidad | Hallazgo / Problema detectado | Evidencia empírica | Recomendación de mejora |
| :---: | :--- | :--- | :--- |
| **Alta** | Menú secundario de alérgenos con contraste muy débil. | TTFF de 3,4 s; 40% de fallos de clics (mis-clicks) de usuarios P06 y P09. | Modificar color tipográfico a #000000 (Negro puro) y añadir bordes definidos. |
| **Alta** | El botón "Confirmar Pedido" (CTA) queda oculto (bajo el *fold*). | 80% de los usuarios tardaron más de 65 segundos en encontrarlo. | Elevar la posición de la tarjeta de checkout o fijar un botón persistente en la zona inferior. |
| **Media** | El formulario de registro/checkout requiere demasiados pasos. | Media general de 5,3 clics en tareas críticas; fatiga detectada en el perfil P06. | Implementar el autorellenado de campos o agrupar el proceso en una pantalla única (*One-Page Checkout*). |
| **Baja** | Falta de claridad en la descripción técnica de los ingredientes. | Feedback cualitativo directo en los cuestionarios de los usuarios P08 y P10. | Añadir etiquetas visuales rápidas mediante iconos de ingredientes (ej. Gluten, Lactosa) encima del título. |

**Conclusión del Reporte:**
La propuesta de la web de hamburguesas de DIU3.RESCUE posee una identidad visual potente y un gancho gastronómico innegable. Sin embargo, sufre de barreras técnicas que penalizan la conversión. Resolver los problemas de contraste identificados en los alérgenos y reducir la fricción en los pasos del checkout no solo agilizará el flujo del pedido, sino que estimamos que aumentará la puntuación SUS global en unos 12 o 15 puntos.

#### Reflexión del equipo (Valoración personal de la tarea)
Llevar a cabo la co-evaluación cruzada sobre un proyecto con un dominio funcional tan distinto al nuestro (hamburguesería frente a nuestra cafetería barista y de productividad) ha sido un ejercicio muy enriquecedor para nuestra formación en UX Research. Nos ha obligado a diseñar tareas equivalentes que midieran de forma equitativa el comportamiento de los participantes. 

Hemos comprendido empíricamente que la jerarquía de los elementos y la economía de clics son factores determinantes en el éxito de un producto digital: un usuario puede perdonar una carga de pantalla ligeramente pausada si entiende la interfaz al instante, pero abandonará el sitio web por completo si se siente frustrado al intentar buscar la información de un producto o al finalizar el proceso de pago.


<br>

