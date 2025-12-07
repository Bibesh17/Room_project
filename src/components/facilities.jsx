export default function Facilities() {
  const facilitiesList = [
    {
      icon: "📶",
      title: "High-Speed WiFi",
      subtitle: "Fast internet throughout the flat",
    },
    {
      icon: "🅿️",
      title: "Parking Space",
      subtitle: "Safe and easy parking available",
    },
    {
      icon: "🚿",
      title: "24/7 Hot Water",
      subtitle: "Hot water available anytime",
    },
    {
      icon: "🎥",
      title: "CCTV Security",
      subtitle: "24-hour surveillance for safety",
    },
    {
      icon: "🔈",
      title: "Speaker System",
      subtitle: "Good sound system for guests",
    },
    {
      icon: "🏓",
      title: "TT Board",
      subtitle: "Fun indoor recreational activity",
    },
    {
      icon: "🚌",
      title: "Pickup Service",
      subtitle: "Guests pickup from outside valley",
    },
  ];

  return (
    <>
      <section className="mt-10 mb-10 ml-10 mr-10" id="facilities">
        <h1 className="text-3xl font-bold text-center mb-10">Facilities</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilitiesList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <section className="relative w-full h-full bg-cover bg-center ">
          <img
            src="../src/assets/5.jpg"
            className="w-full h-150 object-cover mb-10 mt-10"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-black tracking-widest text-sm md:text-lg">
              CONVENIENT • SAFE • SPACIOUS
            </p>

            <h1 className="text-black text-3xl md:text-6xl font-bold">
              SECURE PARKING SPACE
            </h1>

            <h2 className="text-white text-2xl md:text-5xl font-semibold mt-2">
              FOR EVERY GUEST
            </h2>

            <p className="text-cyan-600 text-base md:text-xl mt-3 max-w-2xl">
              Enjoy hassle-free, safe, and easily accessible parking throughout
              your stay.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
