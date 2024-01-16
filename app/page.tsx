import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-slate-700 space-y-4">
      <h1 className="text-6xl font-tektur text-slate-100">Calculator</h1>
      <Calculator />
    </main>
  );
}
