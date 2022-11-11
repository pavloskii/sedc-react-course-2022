import { useEffect } from "react";

const UseEffectExample = () => {
  //1. Na sekoj update na state vo komponentat se ranova funkcijata vo useEffect - dokolku ispratime samo prv parametar.
  //2. Dokolku ispratime prazna niza kako vtor parametar, funkcikata ke se izvrsi samo ednas koga kompononentat ke bide mountnata
  //3. Dokolku ispratime nekoja varijabla, sekogas koga taa varijabla ke se smeni ke se izvrsi useEffect fukncijata
  //4. Dokolku se trgne aplikacijata od domot se izvrsu vtorata funkcija koja sto ja vrakja useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      alert("Alert!");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    function logWidthInConsole() {
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", logWidthInConsole);

    return () => {
      window.removeEventListener("resize", logWidthInConsole);
    };
  }, []);

  return <div>UseEffectExample</div>;
};

export default UseEffectExample;
