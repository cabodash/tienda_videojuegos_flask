from flask import Flask, jsonify, request, session, send_file
import model.repositorio_tienda as repo_tienda
from app import app
import os
ruta_webservices = "/web-services/"


@app.route(f"{ruta_webservices}")
def ws():
    return "web service de python en funcionamiento"


@app.route(f"{ruta_webservices}obtener-videojuegos")
def ws_obtener_videojuegos():
    return jsonify(repo_tienda.obtener_videojuegos())


@app.route(f"{ruta_webservices}obtener-videojuego-id/<int:id>")
def ws_obtener_videojuego_id(id):
    return jsonify(repo_tienda.obtener_videojuego_por_id(id))


@app.route(f'{ruta_webservices}obtener-productos-carrito')
def obtener_productos_carrito():
    return jsonify(repo_tienda.obtener_productos_carrito(session["productos"]))



@app.route(f"{ruta_webservices}agregar-al-carrito", methods = ["POST"])
def ws_agregar_al_carrito():
    id = request.get_json()["id"]
    cantidad = request.get_json()["cantidad"]
    # version sencilla, para guardar en sesion, la id y la cantidad indicada
    if "productos" not in session:
        session["productos"] = []

        # no podemos modificar directamente listas o colecciones
        # o elemento similares en la sesion, la sesion es muy especial
        # en flask, y es mejor actualizar sus datos de la siguiente manera:

    productos = session["productos"]

    # ver is ya hay un producto del mismo id:
    encontrado = False
    for p in productos:
        if p["id_producto"] == id:
            encontrado = True
            p["cantidad_producto"] += cantidad

    if not encontrado:
        producto = {
            "id_producto": id,
            "cantidad_producto": cantidad
        }
        productos.append(producto)
    session["productos"] = productos

    # esto da problemas
    # session["productos"].append({"id_producto": id, "cantidad_producto": cantidad})
    print(session)
    return jsonify(["ok"])


@app.route(f"{ruta_webservices}vaciar-carrito")
def ws_vaciar_carrito():
    if "productos" in session:
        session["productos"] = []
    return jsonify("ok")


#Ruta que devuelve la imagen del videojuego por su id
@app.route(f"{ruta_webservices}/imagen-videojuego/<string:nombre>", methods=['GET'])
def obtener_imagen(nombre):
    ruta_actual = os.path.dirname(__file__)
    for extension in ['.jpg', '.png', '.jpeg', '.gif', '.webp']:
        ruta_imagen = os.path.join(ruta_actual, 'static/img', f'{nombre}{extension}')
        if os.path.isfile(ruta_imagen):
            return send_file(ruta_imagen, mimetype='image/*')
    return "Imagen no encontrada", 404

