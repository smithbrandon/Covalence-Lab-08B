var Vehicle = function(speed){
    this.car = $('<div></div>');
    this.hits = 0;
    this.speed = speed;
    this.hitsAllowed = 0;
}
Vehicle.prototype.move = function(direction){
    //get direction it should move then apply top, bottom, left, or right animation maybe add serpentine... and circle
    //move needs to take into consideration speed
    
    this.car.css('')
}
Vehicle.prototype.damage = function(){
    //run if a car hits another car
    //add one point to hits or run totalled if hits === allowed hits
}
Vehible.prototype.totalled = function(){
    //blow up car and remove from dom
}

$('#light').on('click',function(){
    $('#light span').css('display', 'none');
})