const canvas = document.getElementById('canvas5');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ravens = [];
class Raven {
  constructor(){
    this.width = 100;
    this.height = 50;
    this.x = canvas.width;
    this.y = Math.random() * canvas.height - this.height;
  }
}
