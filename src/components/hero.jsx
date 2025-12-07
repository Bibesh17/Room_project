export default function Hero() {
  return (
    <>
      <section className="relative w-full h-full bg-cover bg-center ">
        <img src="../src/assets/6.jpg" className="w-full h-150 object-cover " />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white tracking-widest text-sm md:text-lg">
            UNIQUE PLACE TO RELAX & ENJOY
          </p>

          <h1 className="text-white text-3xl md:text-6xl font-bold">
            YOUR JOURNEY TO LUXURY
          </h1>

          <h2 className="text-white text-2xl md:text-5xl font-semibold mt-2">
            BEGINS
          </h2>
        </div>
      </section>
    </>
  );
}
