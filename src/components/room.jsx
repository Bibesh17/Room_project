export default function Room() {
  return (
    <>
      <section className="mt-10 mb-10 ml-10 mr-10" id="room">
        <section>
          <h1>
            This flat offers 2 beautifully appointed Deluxe Rooms, a
            well-equipped Kitchen featuring a chimney, and a modern, stylish
            washroom. The rooms remain naturally cool, creating a refreshing
            environment without the need for air conditioning. Every space is
            designed with comfort in mind and includes quality amenities to
            ensure a luxurious and relaxing stay.
          </h1>
          <nav className="flex gap-5 mt-10 mb-10">
            <div className="h-100 w-150 rounded-md bg-black ">
              <img
                src="./src/assets/3.jpg"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt="yogesh Room "
              ></img>
            </div>
            <div className="h-100 w-150 rounded-md bg-black ">
              <img
                src="./src/assets/2.jpg"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt="Nischal Room "
              ></img>
            </div>
          </nav>
          <nav className="flex gap-5 mt-10 mb-10">
            <div className="h-100 w-150 rounded-md bg-black ">
              <img
                src="./src/assets/1.jpg"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt="kitchen "
              ></img>
            </div>
            <div className="h-100 w-150 rounded-md bg-black ">
              <img
                src="./src/assets/4.jpg"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt="washroom"
              ></img>
            </div>
          </nav>
        </section>
      </section>
    </>
  );
}
