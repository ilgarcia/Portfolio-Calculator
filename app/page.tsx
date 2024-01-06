import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-slate-700 space-y-6">
      <h1>Calculator</h1>
      <Calculator />
    </main>
  );
}
