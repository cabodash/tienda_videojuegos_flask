import os
import shutil

ruta_origen = '../tienda_videojuegos_flask'
ruta_angular = 'angular/dist/angular/browser'
ruta_destino = 'archivos'

ruta_completa_angular = os.path.join(ruta_origen, 'angular', ruta_angular)

for archivo in os.listdir(ruta_origen):
    if archivo == 'angular':
        ruta_completa_angular = os.path.join(ruta_origen, archivo, ruta_angular)
        if os.path.isfile(ruta_completa_angular):
            shutil.copy(ruta_completa_angular, ruta_destino)
        else:
            shutil.copytree(ruta_completa_angular, os.path.join(ruta_destino, archivo))
