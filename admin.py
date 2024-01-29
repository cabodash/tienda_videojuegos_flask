from flask import Flask, render_template, request, redirect, url_for
import model.repositorio_tienda as repo_tienda
from app import app
import os

ruta_admin = "/admin"


#-----   Rutas Administracion   -----#
@app.route(f"{ruta_admin}/")
def inicio_admin():
    return render_template("index_admin.html")

@app.route(f"{ruta_admin}/registrar-videojuego")
def registrar_videojuego():
    return render_template("registrar_videojuego.html")

@app.route(f"{ruta_admin}/guardar-nuevo-videojuego", methods=["POST"])
def guardar_nuevo_videojuego():
    nombre = request.form["nombre"]
    descripcion = request.form["descripcion"]
    precio = request.form["precio"]
    plataforma = request.form["plataforma"]
    genero = request.form["genero"]
    desarrollador = request.form["desarrollador"]
    fecha_lanzamiento = request.form["fecha_lanzamiento"]
    imagen_vj = request.files["fotoPortada"]
    video_vj = request.files["videoPortada"]  # Nueva línea para obtener el video
    id_videojuego = repo_tienda.registrar_videojuego(nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento)
    # Guardar la foto
    ruta_actual = os.path.dirname(__file__)
    # Sacar la extension de la foto
    extension_img = os.path.splitext(imagen_vj.filename)[1]
    ruta_img = os.path.join(ruta_actual, 'static/img/videojuegos', f'{id_videojuego}{extension_img}')
    imagen_vj.save(ruta_img)
    # Guardar el video
    extension_video = os.path.splitext(video_vj.filename)[1]
    ruta_video = os.path.join(ruta_actual, 'static/vid/videojuegos', f'{id_videojuego}{extension_video}')
    video_vj.save(ruta_video)
    return render_template("registrar_videojuego_ok.html")

@app.route(f"{ruta_admin}/listar-videojuegos")
def listar_videojuegos():
    videojuegos_bd = repo_tienda.obtener_videojuegos_admin()
    return render_template("listado_videojuegos.html", videojuegos = videojuegos_bd)

@app.route(f"{ruta_admin}/baja-videojuego/<int:id>")
def baja_videojuego(id):
    print(f"[i] -Desactivar videojuego con id: {id}")
    # Actualizar el campo 'alta' a False en la base de datos
    repo_tienda.actualizar_estado_videojuego(id, False)
    return redirect(url_for("listar_videojuegos"))

@app.route(f"{ruta_admin}/alta-videojuego/<int:id>")
def alta_videojuego(id):
    print(f"[i] -Desactivar videojuego con id: {id}")
    # Actualizar el campo 'alta' a True en la base de datos
    repo_tienda.actualizar_estado_videojuego(id, True)
    return redirect(url_for("listar_videojuegos"))

@app.route(f"{ruta_admin}/editar-videojuego/<int:id>")
def editar_videojuego(id):
    videojuego = repo_tienda.obtener_videojuego_por_id(id)
    return render_template("editar_videojuego.html", videojuego = videojuego)

@app.route(f"{ruta_admin}/guardar-cambios-videojuego", methods=["POST"])
def guardar_cambios_videojuego():
    id = request.form["id"]
    nombre = request.form["nombre"]
    descripcion = request.form["descripcion"]
    precio = request.form["precio"]
    plataforma = request.form["plataforma"]
    genero = request.form["genero"]
    desarrollador = request.form["desarrollador"]
    fecha_lanzamiento = request.form["fecha_lanzamiento"]
    imagen_vj = request.files["fotoPortada"]
    video_vj = request.files["videoPortada"]  # Nueva línea para obtener el video
    repo_tienda.guardar_cambios_videojuego(id, nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento)
    # Guardar la foto si se ha cambiado
    if imagen_vj:
        ruta_actual = os.path.dirname(__file__)
        # Sacar la extension de la foto
        extension_img = os.path.splitext(imagen_vj.filename)[1]
        ruta_img = os.path.join(ruta_actual, 'static/img/videojuegos', f'{id}{extension_img}')
        # Borrar la foto anterior si existe
        if os.path.exists(ruta_img):
            os.remove(ruta_img)
        imagen_vj.save(ruta_img)
    # Guardar el video si se ha cambiado
    if video_vj:
        extension_video = os.path.splitext(video_vj.filename)[1]
        ruta_video = os.path.join(ruta_actual, 'static/vid/videojuegos', f'{id}{extension_video}')
        # Borrar el video anterior si existe
        if os.path.exists(ruta_video):
            os.remove(ruta_video)
        video_vj.save(ruta_video)
    return redirect(url_for("listar_videojuegos"))


@app.route(f"{ruta_admin}/listar-pedidos")
def listar_pedidos():
    pedidos_completo = repo_tienda.obtener_pedidos()
    return render_template("listar_pedidos.html", pedidos = pedidos_completo)



