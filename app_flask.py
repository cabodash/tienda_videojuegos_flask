from flask import Flask, render_template, request, redirect, url_for, send_file
import model.repositorio_tienda as repo_tienda
import os

app = Flask(__name__)
app.secret_key = "g43grf3g7r"


import app_flask_webservices
import app_flask_admin


@app.route("/")
def inicio():
    return render_template("index.html")


app.config['DEBUG'] = True
app.run()