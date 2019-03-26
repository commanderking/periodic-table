import { canIonicReactionHappen } from "./ionicCompoundReactionUtils";
import ElementReactivity from "../sampleData/elementReactivity";
import Elements from "../sampleData/periodicTable";
describe("ionicCompoundreactionUtils", () => {
  const Helium = {
    ...Elements.find(element => element.symbol === "He"),
    ...ElementReactivity.He
  };

  const Oxygen = {
    ...Elements.find(element => element.symbol === "O"),
    ...ElementReactivity.O
  };
  const Fluorine = {
    ...Elements.find(element => element.symbol === "F"),
    ...ElementReactivity.F
  };

  const Neon = {
    ...Elements.find(element => element.symbol === "Ne"),
    ...ElementReactivity.Ne
  };

  const Sodium = {
    ...Elements.find(element => element.symbol === "Na"),
    ...ElementReactivity.Na
  };

  describe("canIonicReactionHappen", () => {
    describe("will NOT form ionic compound", () => {
      it("Fluorine and Oxygen - if neither element cannot form ionic compounds ", () => {
        expect(canIonicReactionHappen(Oxygen, Fluorine)).toEqual(false);
      });

      it("Fluorine and Neon 0 if one element is a noble gas and other can only form molecular", () => {
        expect(canIonicReactionHappen(Neon, Fluorine)).toEqual(false);
      });

      it("Sodium and Neon - if one element is a noble gas and other can form ionic compound", () => {
        expect(canIonicReactionHappen(Sodium, Neon)).toEqual(false);
      });

      it("Helium and Neon - two noble gases", () => {
        expect(canIonicReactionHappen(Helium, Neon)).toEqual(false);
      });

      it("Helium and Sodium - Helium is unique noble gas with only 2 valence electrons", () => {
        expect(canIonicReactionHappen(Helium, Sodium)).toEqual(false);
      });

      it("Sodium and Sodium - same elements will not form ionic compound", () => {
        expect(canIonicReactionHappen(Sodium, Sodium)).toEqual(false);
      });
    });

    describe("will Form Ionic Compound", () => {
      it("Sodium and Fluorine", () => {
        expect(canIonicReactionHappen(Sodium, Fluorine)).toEqual(true);
      });

      it("Sodium and Oxygen", () => {
        expect(canIonicReactionHappen(Sodium, Oxygen)).toEqual(true);
      });
    });
  });
});

export default undefined;
