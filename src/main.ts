import { magicCard, tipe, color, rare} from "./magiCard.js";
import { jsonCards } from "./weather.js";

const controller = new jsonCards();
const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);
controller.add(magic,(error,data)=>{
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});