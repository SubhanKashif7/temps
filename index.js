class Car{
    constructor(name,model){
        this._name = name;
        this._model = model
        }

    gt(){
        return 88
    }
}

class Ecar extends Car{
    constructor(name,model,batt_size){
        super(name,model)
        this._batt_size = batt_size;
    }


    getBattSize(){
        return this._batt_size
    }
}


let t = new Ecar("tesla",24,89);
console.log(t._model);
