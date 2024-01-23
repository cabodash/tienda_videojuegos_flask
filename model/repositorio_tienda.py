import model.conexion as conn
from flask import session

def registrar_videojuego( nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento):
    conexion = conn.conectar()
    sql = "INSERT into videojuegos (nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    valores = (nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento)
    cursor = conexion.cursor()
    cursor.execute(sql, valores)
    conexion.commit()
    cursor.close()
    conexion.close()
    return cursor.lastrowid #Devuelve el id de la ultima insercion



def obtener_videojuegos():
    conexion = conn.conectar()
    sql = "SELECT * FROM videojuegos"
    cursor = conexion.cursor(dictionary=True)
    cursor.execute(sql)
    videojuegos = cursor.fetchall()
    cursor.close()
    conexion.close()
    return videojuegos

def borrar_videojuego(id):
    conexion = conn.conectar()
    sql = "DELETE FROM videojuegos WHERE id = %s"
    cursor = conexion.cursor()
    cursor.execute(sql, (id,))
    conexion.commit()
    cursor.close()
    conexion.close()
    return True


def obtener_videojuego_por_id(id):
    conexion = conn.conectar()
    sql = "SELECT * FROM videojuegos WHERE id = %s"
    cursor = conexion.cursor(dictionary=True)
    cursor.execute(sql, (id,))
    videojuego = cursor.fetchone()
    cursor.close()
    conexion.close()
    return videojuego

def obtener_productos_carrito(productos_sesion):
    ids_sql = []
    productos_sesion = sorted( productos_sesion, key=lambda p: p["id_producto"] )
    for p in productos_sesion:
        if isinstance( p["id_producto"], int):
            ids_sql.append( str( p["id_producto"] ))
    ids_sql_consulta = ",".join(ids_sql)
    print("ids de los productos del carrito: " + ids_sql_consulta)
    sql = f"select * from videojuegos where id in ( {ids_sql_consulta} ) order by id asc"
    print("voy a lanzar: " + sql)
    conexion = conn.conectar()
    cur = conexion.cursor(dictionary = True)
    cur.execute(sql)
    videojuegos_en_el_carrito = cur.fetchall()

    #voy a recorrer los productos que hay en sesion
    #para formar una respuesta, con la informacion del producto acompañada de su cantidad
    respuesta = []
    for i,ps in enumerate(productos_sesion):
        respuesta.append( { "videojuego" : videojuegos_en_el_carrito[i] , "cantidad" : productos_sesion[i]["cantidad_producto"] } )
    cur.close()
    conexion.close()
    return respuesta



