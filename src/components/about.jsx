export default function About() {
  return (
    <>
      <section id="about" className="mb-15">
        <h1 className="mt-10  text-center text-black leading-relaxed text-lg ">
          Welcome to Danulal Apartment perfect blend of luxury, comfort &
          convenience. Welcome to the brand new 2BHK Flat of ours Offering
          top-notch hospitality, food and beverage and recreational services in
          the largest city of Nepal, Kathmandu. This Flat is run and managed by
          MR Yogesh Bhatarrai, Mr.nischal kafle and Miss.puspa neupane.
        </h1>
        <nav className="flex gap-5 ">
          <div className="h-fit w-[45%] mt-5 ml-10 rounded-md bg-blue-200 p-4">
            <p>
              <h1 className="text-xl">
                <strong>Respect the Room, Respect the Vibes</strong>
              </h1>
              <ul className="list-disc pl-6 space-y-3 mt-5 text-grey-700">
                <li>
                  <strong>Respect the Space :</strong> Please keep the room
                  clean and tidy at all times.
                </li>

                <li>
                  <strong>Shoes Off :</strong> Remove your shoes before entering
                  to maintain cleanliness.
                </li>

                <li>
                  <strong>Noise Control :</strong> Keep noise at a comfortable
                  level, especially during late hours.
                </li>

                <li>
                  <strong>No Food Spills :</strong> You can eat snacks, but
                  avoid messy foods and clean up after yourself.
                </li>

                <li>
                  <strong>No Smoking or Vaping :</strong> Smoking, vaping, or
                  any strong-odor items are not allowed inside the room.
                </li>

                <li>
                  <strong>Take Care of Belongings :</strong> Do not touch or
                  move items without permission.
                </li>

                <li>
                  <strong>Use Devices Responsibly :</strong> Please ask before
                  using chargers, headphones, or any electronic devices.
                </li>

                <li>
                  <strong>Respect Privacy :</strong> No recording or taking
                  photos without permission.
                </li>

                <li>
                  <strong>Lights & Fans :</strong> Turn off lights, fans, or
                  Chimney when leaving the room.
                </li>

                <li>
                  <strong>Be on Time :</strong> Let us know before visiting and
                  avoid staying too late.
                </li>

                <li>
                  <strong>Have Fun & Be Respectful :</strong> Be polite, chill,
                  and respectful.
                </li>
              </ul>
            </p>
            <div></div>
          </div>
          <div className="w-[65%] h-[600px]  overflow-hidden rounded-lg shadow-md mt-30 mr-10">
            <img
              src="./src/assets/7.jpg"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              alt="Nischal"
            ></img>
          </div>
        </nav>
      </section>
    </>
  );
}
