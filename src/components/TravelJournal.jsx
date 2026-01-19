import TravelCard from "./travel.jsx";

function TravelJournal({ places }) {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      
      {/* Header */}
      <header className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-10">
        <h1 className="text-3xl font-bold text-sky-600 text-center">
          🌍 WanderLog
        </h1>
        <p className="text-center text-slate-500 mt-2">
          Capture memories from around the world
        </p>
      </header>

      {/* Cards */}
      <div className=" group flex flex-col gap-6  ">
        
        {places.map((place, index) => (
          <TravelCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

export default TravelJournal;
