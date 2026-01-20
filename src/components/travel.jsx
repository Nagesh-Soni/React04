import React from "react";
import { motion } from "framer-motion";

const TravelCard = React.memo(function TravelCard({ place }) {
  const { country, title, date, desc, img, map } = place;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // 🍎 Apple easing
      }}
      className="
        bg-white rounded-2xl p-6 flex gap-6
        shadow-md
        hover:shadow-2xl
        transition-shadow
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <motion.img
          src={img}
          alt={title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-56 h-36 object-cover"
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

          <p className="text-sm text-slate-400 mt-1">{date}</p>

          <p className="text-slate-600 mt-3 max-w-xl">
            {desc}
          </p>
        </div>

        <a
          href={map}
          target="_blank"
          rel="noreferrer"
          className="text-sky-600 text-sm font-medium mt-3 w-fit hover:underline"
        >
          View on Google Maps →
        </a>
      </div>
    </motion.div>
  );
});

export default TravelCard;
