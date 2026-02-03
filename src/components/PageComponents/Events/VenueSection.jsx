import React, { useState } from "react";
import { MapPin, X } from "lucide-react";

function VenueSection() {
  const [previewImage, setPreviewImage] = useState(null);

  const venues = [
    {
      name: "Grand Banquet Hall",
      capacity: "80 – 150 guests",
      bestFor: "Weddings, receptions, conferences",
      note: "AC hall with stage, sound system, and elegant lighting.",
      images: [
"https://images.unsplash.com/photo-1669246847521-ef4e5750da04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmQlMjBiYW5xdWV0JTIwaGFsbHxlbnwwfHwwfHx8MA%3D%3D" ,
"https://images.unsplash.com/photo-1763231575952-98244918f99b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYW5kJTIwYmFucXVldCUyMGhhbGx8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1673626577922-1b3f9771fc3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdyYW5kJTIwYmFucXVldCUyMGhhbGx8ZW58MHx8MHx8fDA%3D" ,       "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      name: "Garden Lawn",
      capacity: "100 – 250 guests",
      bestFor: "Outdoor weddings, family functions, festivals",
      note: "Green open space perfect for traditional & modern setups.",
      images: [
        "https://images.unsplash.com/photo-1642541744624-7a2a89545a32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVuJTIwbGF3bnxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1767247795766-d07be9e609d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhcmRlbiUyMGxhd258ZW58MHx8MHx8fDA%3D" ,
"https://images.unsplash.com/photo-1758913329402-7f0a1355c7e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdhcmRlbiUyMGxhd258ZW58MHx8MHx8fDA%3D",        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      name: "Poolside Area",
      capacity: "30 – 80 guests",
      bestFor: "Birthdays, cocktails, pre‑wedding events",
      note: "Cozy ambience with water reflections and décor lighting.",
      images: [
"https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9vbHNpZGV8ZW58MHx8MHx8fDA%3D" ,
"https://images.unsplash.com/photo-1659559108726-4855a7e293a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvb2xzaWRlfGVufDB8fDB8fHww" ,
"https://images.unsplash.com/photo-1618681850501-6e1aae4f916f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvb2xzaWRlfGVufDB8fDB8fHww"  ,
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80",
      ],
    },
  ];

  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row  justify-center text-center gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-bold font-heading text-sky-400">
                Our <span className="text-red-400">Venues</span>
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl  capitalize font-heading font-bold text-sky-900">
                Spaces for every size of gathering
              </h3>
              <p className="mt-2 text-sm text-slate-800 max-w-lg">
                Choose from indoor halls, open lawns, and poolside areas, each designed to make your event feel special and well-organized.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3 ">
            {venues.map((v, i) => (
              <div
                key={i}
              
                className={`rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-7   hover:scale-105
  hover:border-red-500/70 transition-all duration-300
  flex flex-col gap-5
  ${
    i === 1
      ? "md:translate-y-8"
      : "md:-translate-y-6"
  }
`}>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <h4 className="font-semibold text-white text-sm md:text-base">
                      {v.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 mb-1">
                    Capacity:{" "}
                    <span className="text-sky-300 font-medium">
                      {v.capacity}
                    </span>
                  </p>
                  <p className="text-xs text-slate-300 mb-2">
                    Best for:{" "}
                    <span className="text-sky-300">{v.bestFor}</span>
                  </p>
                  <p className="text-sm text-slate-300">{v.note}</p>
                </div>
                    

                {/* Images grid */}
                <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                  {v.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPreviewImage(img)}
                      className="relative h-20 md:h-24 overflow-hidden group focus:outline-none"
                    > 

                      <img
                        src={img}
                        alt={`${v.name} ${idx + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[11px] md:text-xs font-medium tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to preview image
      </span>

                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW MODAL */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute top-10 right-6 text-white hover:text-red-400 transition"
            >
              <X className="w-6 h-6 bg-black rounded-full" />
            </button>

            <img
              src={previewImage}
              alt="Venue preview"
              className="w-full max-h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VenueSection;
