export class Mensajes {

    static info(mensaje: string) {
        const infoElement = document.createElement('div');
        infoElement.classList.add('info__');
        infoElement.classList.remove('unsee');
        const infoIcon = document.createElement('div');
        infoIcon.classList.add('info__icon');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        iconPath.setAttribute('fill', '#393a37');
        iconPath.setAttribute('d', 'm13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z');
        const infoTitle = document.createElement('div');
        infoTitle.classList.add('info__title');
        infoTitle.textContent = mensaje;
        const infoClose = document.createElement('div');
        infoClose.classList.add('info__close');
        const closePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closePath.setAttribute('fill', '#fff');
        infoClose.appendChild(closePath);
        infoElement.appendChild(infoIcon);
        infoElement.appendChild(infoTitle);
        infoElement.appendChild(infoClose);
        document.body.appendChild(infoElement);
        setTimeout(() => {
            infoElement.classList.add('unsee');
        }, 2000);
    }
    static error(mensaje: string) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error__');
        errorElement.classList.remove('unsee');
        const errorIcon = document.createElement('div');
        errorIcon.classList.add('error__icon');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        iconPath.setAttribute('fill', '#393a37');
        iconPath.setAttribute('d', 'm13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z');
        const errorTitle = document.createElement('div');
        errorTitle.classList.add('error__title');
        errorTitle.textContent = mensaje;
        const errorClose = document.createElement('div');
        errorClose.classList.add('error__close');
        const closePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closePath.setAttribute('fill', '#fff');
        errorClose.appendChild(closePath);
        errorElement.appendChild(errorIcon);
        errorElement.appendChild(errorTitle);
        errorElement.appendChild(errorClose);
        document.body.appendChild(errorElement);
        setTimeout(() => {
            errorElement.classList.add('unsee');
        }, 2000);
    }

}