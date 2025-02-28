import Nav from "../components/Nav";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 px-6 py-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
      <Nav />
      <h1 className="text-4xl font-extrabold text-white text-center leading-tight mb-12">
        Welcome to My Portfolio!
      </h1>
      <p className=" text-xl text-white opacity-90 text-center max-w-3xl mt-8">
        Je m'appelle Léa Bouillot, et je suis développeuse web.
        <br />
        Découvrez mon parcours en développement web, <br /> où créativité et
        performance se combinent pour créer des solutions sur mesure.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="mailto:leadreamcoder@gmail.com"
          className="px-6 py-2 font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Contactez moi
        </a>
        {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-50 transition duration-300">
          See My Work
        </button> */}
        {/* <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
          Contactez moi
        </button> */}
      </div>
    </main>
  );
}

export default Home;
