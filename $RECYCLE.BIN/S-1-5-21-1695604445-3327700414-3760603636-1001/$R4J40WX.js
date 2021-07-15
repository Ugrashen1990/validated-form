function song(id, name, duration,singer){
    this.id = id,
    this.name = name,
    this.duration = duration,
    this.singer = singer;
    this.songfinal = function(){
        return this.id + "" + this.name+ "" + "" + this.duration+ "" + this.singer;
    }
}

//var emp1 = new Employee(010, "vande mataram", 120, "kunal");
//var emp2 = new Employee(011, "jana gana mana", 180, "rakesh");

mysong.start = function(){
    console.log(this.name + "is sang by" + this.singer);
}
mysong.end = function(){
    console.log(this.name + "is ended by" + this.singer)
}