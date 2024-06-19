class Animal{
	#serial;
	constructor(name ,type ,behavior ,food , serial){
		this.name=name;
		this.type=type;
		this.behavior=behavior;
		this.food=food;
		this.#serial=serial;
	}
	fly(){
		console.log(this.name +' can fly very well')
	}
	crawl(){
		console.log(this.name +' can crawl on the ground')
	}
	run(){
		console.log(this.name +' can run too fast')}
}
class loins extends Animal{
	constructor(name ,type ,behavior ,food , serial, color){
		super(name ,type ,behavior ,food , serial)
		this.color=color;
	}
	getColor(){return this.color;}
}
const persianlions= new loins('persianlions','mammals','wild animals','carnivorous',648647,'brown')
console.log(persianlions.run());


class Pigeon extends Animal{
	constructor(name ,type ,behavior ,food , serial, fly){
		super(name ,type ,behavior ,food , serial)
		this.fly=fly;
	}
	getFly(){return this.fly;}

}


const stupedPigeon= new Pigeon('stupedPigeon','birds', 'domestic animals', 'vegetrain', 8784, 'they can fly')
console.log(stupedPigeon);


class cow extends Animal{
	constructor(name ,type ,behavior ,food , serial,benefits){
		super(name ,type ,behavior ,food , serial)
		this.benefits=benefits;
	}
	getBenefits(){return this.benefits;}


}

const farmCow= new cow('farm cow', 'mammals', 'farm animals', 'vegetrain', 140, 'they give people all kinds of dairy products and meat')
console.log(farmCow);