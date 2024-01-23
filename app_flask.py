from flask import Flask, render_template, request, redirect, url_for, send_file
import model.repositorio_tienda as repo_tienda
import os

from app import app

# Importa los módulos que definen las rutas después de crear la aplicación
import admin
import webservices

app.config['DEBUG'] = True
app.run()