# JavaScriptAsynchronous
JavaScriptAsynchronous

# 1. Sí, Javascript es síncrono
Partamos de la base de que Javascript es síncrono y que posee un único hilo de ejecución. 
Es decir, sólo es capaz de ejecutar una tarea a la vez la cual bloquea la ejecución hasta que es terminada y puede pasar a la siguiente.

Sin embargo… ¿qué sucede cuando tenemos que ejecutar una consulta pesada? Por ejemplo, obtener una lista de 10.000 registros con los que posteriormente trabajaremos. ¿No hay forma de evitar que se bloquee la ejecución de modo que mientras podamos seguir haciendo otras tareas? Es aquí donde aparece la solución que propuso por la comunidad de desarrolladores 
con el fin de dotar a Javascript de cierto aspecto de asincronicidad: el famoso Event Loop.

# 2. Callbacks
Los callbacks son la pieza clave para que Javascript pueda funcionar de forma asíncrona. De hecho, el resto de patrones asíncronos en Javascript está basado en callbacks de un modo u otro, simplemente añaden azúcar sintáctico para trabajar con ellos más cómodamente.

Un callback no es más que una función que se pasa como argumento de otra función, y que será invocada para completar algún tipo de acción. En nuestro contexto asíncrono, un callback representa el '¿Qué quieres hacer una vez que tu operación asíncrona termine?'. Por tanto, es el trozo de código que será ejecutado una vez que una operación asíncrona notifique que ha terminado. 
Esta ejecución se hará en algún momento futuro, gracias al mecanismo que implementa el bucle de eventos.

# 3. Promesas
Una promesa es un objeto que representa el resultado de una operación asíncrona. Este resultado podría estar disponible ahora o en el futuro. Las promesas se basan en callbacks pero añaden azúcar para un mejor manejo y sintaxis. Las promesas son especiales en términos de asincronía ya que añaden un nuevo nivel de prioridad que estudiaremos a continuación.

Consumiendo Promesas
Cuando llamamos a una función asíncrona implementada con este patrón, nos devolverá inmediatamente una promesa como garantía de que la operación asíncrona finalizará en algún momento, ya sea con éxito o con fallo. Una vez que tengamos el objeto promesa en nuestro poder, registramos un par de callbacks: uno para indicarle a la promesa 'que debe hacer en caso de que todo vaya bien' (resolución de la promesa o resolve) y otro para determinar 'que hacer en caso de fallo' (rechazo de la promesa o reject).

A resumidas cuentas, una promesa es un objeto al que le adjuntamos callbacks, en lugar de pasarlos directamente a la función asíncrona. La forma en que registramos esos dos callbacks es mediante el método .then(resolveCallback, rejectCallback). En terminología de promesas, decimos que una promesa se resuelve con éxito (resolved) o se rechaza con fallo (rejected). 

# 4. Async / Await
Las promesas supusieron un gran salto en Javascript al introducir una mejora sustancial sobre los callbacks y un manejo más elegante de nuestras tareas asíncronas. Sin embargo, también pueden llegar a ser tediosas y verbosas a medida que se requieren más y más .then(). Las palabras clave async y await surgieron para simplificar el manejo de las promesas. Son puro azúcar para hacer las promesas más amigables, escribir código más sencillo, reducir el anidamiento y mejorar la trazabilidad al depurar. Pero recuerda, async \ await y las promesas son lo mismo en el fondo.

La etiqueta async declara una función como asíncrona e indica que una promesa será automáticamente devuelta. Podemos declarar como async tanto funciones con nombre, anónimas, o funciones flecha. Por otro lado, await debe ser usado siempre dentro de una función declarada como async y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.
