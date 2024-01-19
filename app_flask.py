from flask import Flask, render_template, request, redirect, url_for
import model.repositorio_tienda as repo_tienda

app = Flask(__name__)

ruta_admin = "/admin"

@app.route("/")
def inicio():
    return render_template("index.html")


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
    repo_tienda.registrar_videojuego(nombre, descripcion , precio , plataforma, genero, desarrollador, fecha_lanzamiento)
    return render_template("registrar_videojuego_ok.html")

@app.route(f"{ruta_admin}/listar-videojuegos")
def listar_videojuegos():
    videojuegos_bd = repo_tienda.obtener_videojuegos()
    return render_template("listado_videojuegos.html", videojuegos = videojuegos_bd)

@app.route(f"{ruta_admin}/borrar-videojuego/<int:id>")
def borrar_videojuego(id):
    print(f"[i] -Borrar videojuego con id: {id}")
    repo_tienda.borrar_videojuego(id)
    return redirect(url_for("listar_videojuegos"))


app.config['DEBUG'] = True
app.run()