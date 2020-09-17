class Rectangle {
    constructor(w,h){
        this.w = w; 
        this.h = h;
    }

    area(){
        let area;
        area = (this.w * this.h);
        return area;
    }
}

class Square extends Rectangle {
    constructor(s){
        super(s,s);
    }
}