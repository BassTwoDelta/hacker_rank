class Polygon{
    constructor(sides){
        this.s = sides; 
    }

    perimeter(){
        let peri = 0;

        for(let l of this.s){
            peri += l; 
        }

        return peri;
    }
}