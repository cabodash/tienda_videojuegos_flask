from flask import Flask, jsonify, request, session, send_file
import model.repositorio_tienda as repo_tienda
from app_flask import app
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

@app.route(f"{ruta_webservices}agregar-al-carrito", methods = ["POST"])
def ws_agregar_al_carrito():
    id = request.get_json()["id"]
    cantidad = request.get_json()["cantidad"]
    if "productos" not in session:
        session["productos"] = []
    session["productos"].append({"id": id, "cantidad": cantidad})
    return jsonify("ok")

@app.route(f"{ruta_webservices}vaciar-carrito")
def ws_vaciar_carrito():
    if "productos" in session:
        session["productos"] = []
    return jsonify("ok")

@app.route(f"{ruta_webservices}obtener-info-sesion")
def ws_info_sesion():
    pass


#Ruta que devuelve la imagen del videojuego por su id
@app.route(f"{ruta_webservices}/imagen-videojuego/<string:nombre>", methods=['GET'])
def obtener_imagen(nombre):
    ruta_actual = os.path.dirname(__file__)
    for extension in ['.jpg', '.png', '.jpeg', '.gif', '.webp']:
        ruta_imagen = os.path.join(ruta_actual, 'static/img', f'{nombre}{extension}')
        if os.path.isfile(ruta_imagen):
            return send_file(ruta_imagen, mimetype='image/*')
    return "Imagen no encontrada", 404

