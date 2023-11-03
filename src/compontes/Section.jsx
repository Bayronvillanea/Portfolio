import imgMe from '../img/ME.jpg';

export default function Section() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-1193">
      <section className="flex flex-col w-full h-auto p-4 md:p-20 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center w-full">
          <h1 className="text-white font-poppins text-2xl md:text-5xl font-bold leading-7 md:leading-70 tracking-widest relative text-center">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">Bayron <strong>Villanea</strong><br />Software Engineer</span>
          </h1>
          <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 relative border-4 md:border-9 border-sky-500 rounded-full">
            <img src={imgMe} alt="Bayron Villanea" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </section>
      
    </div>
  );
}
