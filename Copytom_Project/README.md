# PASOS A SEGUIR PARA EL USO DE LA WEB COPYTOM:

## PREREQUISITOS:
Partimos de la base de que realizamos todo el proyecto en una máquina con Sistema Operativo en Windows 10, aunque se pondrán también lo correspondiente para su uso en máquinas con Sistema Operativo Linux.

Tener instaladas las siguientes aplicaciones:
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - [Eclipse](https://www.eclipse.org/downloads/)
  - [MYSQL WorkBench](https://dev.mysql.com/downloads/workbench/)
  - [NodeJS](https://nodejs.org/es/download/) 
  -       IMPORTANTE: Si se está utilizando un sistema LINUX deberán lanzarse los siguientes comandos: 
              "curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash"
              "-sudo apt-get install -y nodejs"
              "sudo npm install npm@latest -g"
              
              
## CONFIGURACIÓN DEL SISTEMA:
### Instalar AngularJS en el sistema:
  - WINDOWS: "npm install -g @angular/cli"
  - LINUX: "sudo npm install -g @angular/cli"

### Instalar el Plugin de SpringBoot en Eclipse:
  - Abrimos Eclipse y, tras la configuración inicial del mismo donde no se deberá tocar mucho, nos vamos a la pestaña superior donde pone "Help".
  - Accedemos a la pestaña "Eclipse Marketplace"
  - En la barra de búsqueda, escribimos: "Spring Tools 4" y nos descargamos e instalamos dicho plugin.
  - Cerramos Eclipse y lo volvemos a abrir.

### Configuración de MYSQL WorkBench:
  - Una vez abierto, nos vamos al apartado "MYSQL Connections" y le damos al símbolo del "+".
  - Se nos abrirá una pestaña donde, arriba del todo en "Connection Name" deberemos escribir "localhost".
  - En el apartado que pone "Hostname" deberá poner "127.0.0.1".
  - En el apartado "Port" deberá poner "3306".
  - En el apartado "Username" deberá poner "root"
  - Y justo debajo deberemos darle a "Clear" ya que el BackEnd accederá a la base de datos sin contraseña (Por ahora).

### Creación inicial de la Base de Datos:
  - Aunque el BackEnd debería crear la base de datos por sí sola, lanzaremos esto igualmente para que no haya problemas. Cogemos [esta base de datos](https://github.com/HunterExon/Proyecto-DAW-Copytom-Papeleria/blob/master/Copytom_Project/src/copytom-back/utils/copytom.sql) y la arrastramos desde nuestro escritorio hasta el centro de la pantalla del Workbench.
  - Pulsamos en el "rayo amarillo" para ejecutar lo que viene en el enlace descargado y ya debería haberse creado la base de datos inicial de prueba. 
