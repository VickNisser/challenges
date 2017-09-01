function CookieCutter(size,chips){
    this.size = size;
    this.hasChocolateChips = chips;
    this.addChocolateChips = function(){
        this.hasChocolateChips = true;
    }
    this.removeChocolateChips = function(){
        this.hasChocolateChips = false;
    }
    this.getSize = function(){
        return size;
    }
    this.gethasChips = function(){
        return hasChocolateChips; 
    }    
}

var cookie1 = new CookieCutter(medium,true);
var cookie2 = new CookieCutter(large,false);

cookie1.removeChocolateChips();
cookie2.addChocolateChips();