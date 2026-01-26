import React, { useState } from "react";
import video from "../../../assets/vid1.mp4";
import program from "../../../assets/program.jpg";
import celebration from "../../../assets/celebrate.jpg";
import wed from "../../../assets/wedding.jpg";
import fest from "../../../assets/festival.jpg";
import { CalendarDays, PartyPopper, Users, Music } from "lucide-react";
import { BsQuestionSquare } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"; // Fixed import
import { eventDetailsData } from "../../../data/eventDetailsData";
import Searchbox from "../../Searchbox";
function Highlight({eventCategory, setEventCategory}) {
  const navigate = useNavigate();
const category =[
  {key:"all", label:"All Events"},
  {key:"Ongoing", label:"Ongoing"},
  {key:"Complete", label:"Complete"},
  {key:"Upcoming", label:"Upcoming"},
]
  const [search, setSearch] = useState("");


const allEvents= Object.values(eventDetailsData);
 const activeCategory = eventCategory||"all";

 const filteredEvents = allEvents.filter((item)=>{
  const matchCategory= activeCategory==="all"|| item.category===activeCategory;
  
  const matchSearch =item.title.toLowerCase().includes(search.toLowerCase())||
  item.title.toLowerCase().includes(search.toLowerCase)||
  item.tagline.toLowerCase().includes(search.toLowerCase)||
  item.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
 });
  return (
    <section className="w-full py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"> 
        <div className="text-center space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold font-heading text-sky-600">
            Resort <span className="text-red-600">Highlights</span>
          </p>
          <h2 className="md:text-4xl font-bold font-heading text-blue-950 leading-tight">
            Celebrate Life's <span>Beautiful</span> Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From intimate birthdays to grand weddings and vibrant festivals, Arambha Resort transforms every occasion into cherished memories.
          </p>
        </div>

        <div className="space-y-16">
          {/* Video Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-linear-to-r from-red-600/10 to-sky-600/10 z-10 pointer-events-none" />
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[500px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8 z-20">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Experience Unforgettable Moments
                </h3>
                <p className="text-gray-200 text-sm">
                  Professional event planning, stunning venues, and impeccable service for your special occasions.
                </p>
              </div>
            </div>
          </div>

          {/* Events Grid */}

       

       
<div className="w-full">
  {setEventCategory && (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
     

      <div className="flex flex-wrap gap-3">
        {category.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setEventCategory(cat.key)}
            className={`px-5 py-1.5 rounded-2xl  text-sm font-semibold cursor-pointer  border transition-all
              ${
                activeCategory === cat.key
                  ? "bg-red-600 text-white border-red-600 shadow-sm hover:bg-red-700"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

       <div className="">
        <Searchbox
          value={search}
          onChange={setSearch}
          placeholder="Search events by title or category..."
        />
      </div>
    </div>
  )}
</div>

       


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{filteredEvents.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/events/${item.slug}`)}
              >


                {/* <div>{item.category}</div> */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                   <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.category.toUpperCase()}
                  </div>
                  <div className="absolute bg-black/20 z-20 left-0 right-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-100 text-sm">{item.tagline}</p>
                    <button className="border bg-black/20 rounded-2xl text-gray-300 px-2 py-2 mt-2 text-sm cursor-pointer group-hover:bg-red-600 group-hover:text-white transition-all">
                      View more →
                    </button>
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
          <div>
              {filteredEvents.length===0 && (
            <p className='text-center text-sm text-slate-400 mt-6'>No content found in this category</p>
          )}
          </div>

          {/* Booking Section */}
          <div className="relative rounded-3xl mt-10 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
            <div className="relative z-10 my-9 text-center">
              <div className="mx-auto space-y-5">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-sky-600/20 border border-red-500/30 mb-6">
                  <CalendarDays className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Are You Planning To Book An Event?
                  </h3>
                </div>
                
                <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Let us help you create unforgettable memories. Our expert team is ready to bring your vision to life with perfect planning and execution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/eventform" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
                    <CalendarDays className="w-5 h-5" />
                    Book Your Event Now
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold rounded-xl hover:from-sky-700 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
                    <BsQuestionSquare className="w-5 h-5" />
                    Ask your queries
                  </Link>
                </div>
                
                <p className="text-gray-400 text-sm">
                  Limited slots available. Contact us today for special packages!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlight;

