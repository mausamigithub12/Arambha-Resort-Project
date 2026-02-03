import React, { useState } from "react";
import { Link } from "react-router-dom";
import Highlight from "../components/PageComponent/Home/Highlight";
import Venuessection from "../components/PageComponent/Events/Venuesection";
import { MdHome } from "react-icons/md";
import { allEventTestimonials } from "../data/eventDetailsData";
import { Star } from "lucide-react";
import EventBanner from "../components/PageComponent/Banner/EventBanner";

function Events() {
  const [eventCategory, setEventCategory] = useState("all");

  return (
    <div className="mt-16">
      <EventBanner />

      <Highlight
        eventCategory={eventCategory}
        setEventCategory={setEventCategory}
      />

      <Venuessection />

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 italic mb-6">
            What Our <span className="text-red-600">Guests</span> Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allEventTestimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="relative h-full rounded-2xl border border-gray-100 bg-linear-to-br from-slate-50 to-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-4 right-4 h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-xl">
                  “
                </div>

                {t.rating && (
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_2px_rgba(250,204,21,0.6)]"
                      />
                    ))}
                  </div>
                )}

                <p className="text-gray-700 italic leading-relaxed mb-4">
                  “{t.text}”
                </p>

                <div className="h-px w-12 bg-linear-to-r from-sky-400 to-transparent mb-4" />

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sm font-semibold text-sky-700">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-xs text-slate-500">
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div>{t.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-5 px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-heading capitalize font-bold text-blue-950 mb-4">
              Frequently asked questions
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-blue-900">
                  How early should we book?
                </p>
                <p>
                  For weddings and large events, booking 1–3 months in advance
                  is recommended, especially during peak season.
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Do you provide decoration and sound?
                </p>
                <p>
                  Yes, we can arrange standard décor, sound system, and
                  lighting, or work with your preferred vendors.
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Is there parking for guests?
                </p>
                <p>
                  Yes, Arambha Resort offers parking facilities for event
                  guests.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-red-600 to-sky-600 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-white/95 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-heading font-bold text-blue-950 mb-2">
                  Plan your event at Arambha
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Share your event details and our team will contact you with
                  suitable venues, packages, and pricing.
                </p>
                <p className="text-sm text-gray-800">
                  Call / WhatsApp:{" "}
                  <span className="font-semibold text-red-600">
                    +977-98XXXXXXXX
                  </span>
                  <br />
                  Email:{" "}
                  <span className="font-semibold text-sky-700">
                    events@arambharesort.com
                  </span>
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/eventform"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
                >
                  Book Event Online
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center px-5 py-3 rounded-xl border border-red-200 text-red-700 text-sm font-semibold hover:bg-red-50 transition"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
