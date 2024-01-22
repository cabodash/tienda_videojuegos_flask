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


