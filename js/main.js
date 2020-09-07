const divContainer = document.getElementById('container');
this.onmousemove = (e) => {
    const x = - e.clientX/5,
          y = - e.clientY/5;
    divContainer.style.backgroundPositionX = x + 'px';
    divContainer.style.backgroundPositionY = y + 'px';
}