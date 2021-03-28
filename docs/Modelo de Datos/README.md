# DEFINICIÓN DE ENTIDADES Y ATRIBUTOS.

* **USUARIO:** (PK)id_user, alias, password, email, direccion, telefono, (FK_ROL)id_rol.

* **ROL:** (PK)id_rol, descripcion.

* **IMPRESION:** (PK)id_impresion, documento_adjunto, fecha_impresion, tipo_pago, fecha_recogida, (FK_USUARIO)id_user.

* **PEDIDO:** (PK)id_pedido, fecha_pedido, fecha_entrega, fecha_envio, forma_envio, direccion_envio, nombre_destinatario, (FK_USUARIO)id_user.

* **DEDTALLE_PEDIDO:** (PK)(FK_PEDIDO)id_pedido, (PK)(FK_PRODUCTOS)id_producto, precio_unidad, cantidad.

* **PRODUCTOS:** (PK)id_productos, nombre_productos, precio_productos, stock, (FK_CATEGORIAS)id_categorias, (FK_PROVEEDOR)id_proveedor.

* **PROVEEDOR:** (PK)id_proveedor, nombre_proveedor, contacto_proveedor.

* **CATEGORIAS:** (PK)id_categorias, nombre_categoria, descripcion_categoria.
