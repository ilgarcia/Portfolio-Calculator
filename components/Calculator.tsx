import Display from "@/components/Display";
import Buttons from "@/components/Buttons";
import StoreProvider from "@/provider/StoreProvider";

function Calculator() {
  return (
    <section className="flex flex-col space-y-6 p-4 bg-slate-900 rounded-md overflow-hidden">
      <StoreProvider>
        <Display />
        <Buttons />
      </StoreProvider>
    </section>
  );
}

export default Calculator;
