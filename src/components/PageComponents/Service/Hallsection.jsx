import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const hallImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
    alt: "Decorated function hall",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    alt: "Conference setup with projector",
    className: "",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg",
    alt: "Office seminar in hall",
    className: "",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg",
    alt: "School or college program on stage",
    className: "",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg",
    alt: "Wedding reception dinner",
    className: "",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
    alt: "Guests enjoying gathering",
    className: "",
  },
];

export default function Hallsection() {
  return (
    <section className="bg-sky-50  py-20" id="hallsection">
      <div className=" flex  flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="w-full lg:w-7/12 bg-gray-100 rounded-2xl">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 m-4">
            {hallImages.map((img) => (
              <div
                key={img.id}
                className={`overflow-hidden rounded-3xl ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-5/12 space-y-4">
          <p className="font-bold uppercase text-sky-600 font-heading tracking-[0.2em]">
            function <span className="text-red-600">halls</span>
          </p>

          <h2 className=" font-bold text-blue-950 text-3xl font-heading">
            Flexible halls for every program
          </h2>

          <p className="text-gray-700">
            Arambha Resort offers clean, bright halls for school shows, college
            events, office meetings, gatherings, weddings and many other
            functions.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
               <IoMdCheckmark />
                
              </span>
              <span>Stage, sound system and seating for school and college programs.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
<IoMdCheckmark />
              </span>
              <span>Projector, mic and neat setup for office meetings and trainings.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
<IoMdCheckmark />
              </span>
              <span>Decorated halls for weddings, receptions and family gatherings.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-500 flex items-center justify-center text-xs">
           <IoMdCheckmark />
              </span>
              <span>Support for food, seating plan and basic event coordination.</span>
            </li>
          </ul>

          <div className="flex gap-4 pt-2">
            <Link to="/eventform" className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 transition">
              Book  Now
            </Link>
            <Link to="/contact" className="rounded-full border border-slate-400 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:border-red-400 hover:text-red-500 transition">
              Ask for queries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
