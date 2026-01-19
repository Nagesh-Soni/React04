import React from "react";
 
function TravelCard({ place }) {
  const { country, title, date, desc, img, map } = place;

  return (
    <div
      className="
        bg-white rounded-2xl p-6 flex gap-6
        shadow-md transform
        transition-all duration-500 ease-out

        hover:blur-0
        hover:opacity-100
        hover:scale-[1.02]
        hover:shadow-2xl
        hover:z-20
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt={title}
          className="
            w-56 h-36 object-cover
            transition-transform duration-500
            hover:scale-125
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase tracking-wide text-sky-500 font-semibold">
            📍 {country}
          </span>

          <h2 className="text-2xl font-bold text-slate-800 mt-1">
            {title}
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            {date}
          </p>

          <p className="text-slate-600 mt-3 max-w-xl">
            {desc}
          </p>
        </div>

        <a
          href={map}
          target="_blank"
          className="
            text-sky-600 text-sm font-medium mt-3 w-fit
            transition-all
            hover:translate-x-1 hover:underline
          "
        >
          View on Google Maps →
        </a>
      </div>
    </div>
  );
}

export default TravelCard;
