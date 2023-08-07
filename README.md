# Sistema POS de Facturacion Electronica
El sistema P.O.S es un sistema de facturación por puntos de venta (Point Of Sale), que fue desarrollado para sistematizar y controlar diferentes procesos de mucha importancia al interior de una empresa como lo pueden ser las ventas y los inventarios.

Los POS sirven como un componente central para las empresas, ya que permiten administrar diversos aspectos como facturación, inventario y gestión de clientes desde un mismo punto.

El sistema está compuesto por un hardware o computador, y un software que realiza el proceso de facturación junto con el manejo del inventario.


## Justificación del proyecto
Este proyecto está principalmente enfocado a pequeñas y medianas empresas, como lo puede ser una Serviteca, que requieran de un software de facturación y gestión de inventario y/o presente los siguientes inconvenientes.

- Negocios pequeños sin sistema de Gestión de  Inventario.
- No hay datos concecutivos y ordenados para realizar análisis de las ventas.
- Dificultad a la hora de gestionar las devoluciones.
- Inventario constantemente desactualizado, lo que representa pérdidas en ventas.
- Realizar informes y guardar datos de manera manual, consumiendo más tiempo y dinero.


El contar con un sistema POS de gestión de inventario podría tener un enorme beneficio reflejado tanto en ventas, como en la organización interna de la empresa. Este software puede ofrecer los siguientes beneficios:

- Tener una gran cantidad de datos de manera organizada
- Simplificar la contabilidad
- Generar reportes rápidamente
- Gestionar cuentas, ventas, clientes y productos de manera sencilla y centralizada
- Contar con datos de valor sobre ventas, inventarios y flujo de caja para posterior análisis

## Objetivo general
Desarrollar un Sistema de Facturación P.O.S y Gestión de Inventario que permita sistematizar y controlar eficientemente los procesos de ventas y gestión de inventario de una Serviteca, con el fin de optimizar el control de inventario, y mantener una base de datos con información útil para análisis, con el objetivo de aumentar las ventas.

### Objetivos específicos
- Desarrollar un módulo de gestión de inventario que permita llevar un registro actualizado de las existencias de productos, evitando la pérdida de ventas por falta de stock.

- Desarrollar un mecanismo que permita elaborar un informe diario de ventas y movimientos de inventario, el cual será conservado en un archivo electrónico para facilitar el seguimiento.

- Crear una base de datos con la categorización de los bienes y servicios ofrecidos, además de toda la información de los clientes para la respectiva facturación.

- Diseñar una interfaz amigable y de fácil uso para los empleados, reduciendo la curva de aprendizaje y aumentando la eficiencia en el proceso de facturación y control de inventario.


## Instalación

Instale el proyecto con npm

```bash
  npm install
  cd backend
```

## Variables de Entorno

Para correr este proyecto, se necesitarán agregar las siguientes variables de entorno a nuestro archivo .env

`PORT`

`MONGO_URI`

`PRIVATE_KEY`

## Deployment

Para lanzar este proyecto corra el siguiente comando

```bash
  npm run dev
```

    