import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { Link } from 'react-router-dom'
function Resturant() {
  return (
    <div>
        <section className="bg-slate-950 py-20 " id="resturant">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row">
    <div className="w-full lg:w-5/12 space-y-6">
      <p className=" font-bold uppercase text-sky-600  font-heading tracking-[0.2em] ">
        Restaurant & <span className='text-red-600'>Dining</span> 
      </p>
      <h2 className="text-3xl font-bold text-white  font-heading">
        Taste the flavors of Lumbini at Arambha Resort
      </h2>
      <p className="text-slate-300">
        Enjoy farm-fresh ingredients, Nepali specialties, and international favorites in a warm,
        intimate ambience overlooking the garden and pool.
      </p>
      <ul className="space-y-3 text-slate-200">
        <li className="flex gap-3">
          <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
            <IoMdCheckmark />

          </span>
          <span>All‑day dining with curated breakfast, lunch, and candle‑light dinner menus.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
            <IoMdCheckmark />

          </span>
          <span>Indoor lounge & outdoor terrace seating for couples, families, and groups.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/10 text-red-400 flex items-center justify-center text-xs">
<IoMdCheckmark />
          </span>
          <span>Freshly brewed coffee, mocktails, and handcrafted desserts from our in‑house chef.</span>
        </li>
      </ul>
      <div className="flex gap-4 pt-2">
        <Link to="/menu" className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 transition">
          View menu
        </Link>
        <button className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-red-400 hover:text-red-300 transition">
          Reserve a table
        </button>
      </div>
    </div>

    <div className="w-full lg:w-7/12">
      <div className="grid grid-cols-6 grid-rows-4 gap-4">
        <div className="col-span-3 row-span-4 overflow-hidden rounded-3xl bg-slate-900">
          <img
            src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Signature plated dishes at Arambha Resort restaurant"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl bg-slate-900">
          <img
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
            alt="Cozy cafe corner with coffee and friends"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl bg-slate-900">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            alt="Outdoor candle‑light dinner setup"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl bg-slate-900">
          <img
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
            alt="Colorful dessert and mocktails"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Resturant