import "mocha";
import { expect } from "chai";
import { jsonCards } from "../src/weather.js";
import { magicCard, color,tipe, rare } from "../src/magiCard.js";

describe("Asynchronous function weatherInfo tests", () => {
  const controller = new jsonCards();
  it("Añadiendo carta", (done) => {
    controller.delete(12);
    const magic = new magicCard(12, "Cazador", 16, color.multicolor, tipe.creature, rare.mythicRare, "No puede atacar cuerpo a cuerpo", 150, 100, 1000);
    controller.add(magic, (_,data) => {
      if (data) {
        expect(data).to.be.equal("Card Added");
        done();
      }
    });
  });
  it("Mostrando carta", (done) => {
    controller.showCard(12, (_,data) => {
      if (data) {
        const jsondata = JSON.parse(data);
        expect(jsondata.id_).to.be.equal(12);
        done();
      }
    });
  });
});