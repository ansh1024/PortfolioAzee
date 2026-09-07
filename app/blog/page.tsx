export default function Blog() {
  return (
    <main className="flex flex-col min-h-[90vh] justify-center items-center px-4">
      <nav className="fixed top-0 left-0 w-full flex justify-between p-6 md:p-8 mix-blend-difference z-50 pointer-events-none">
        <div className="font-display font-bold text-2xl uppercase tracking-widest pointer-events-auto text-invert">AZ</div>
      </nav>
      
      <div className="text-center flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-none mb-6 text-primary">
          Writing
        </h1>
        <div className="border border-structural px-6 py-2 bg-structural/5">
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary">
            Coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
