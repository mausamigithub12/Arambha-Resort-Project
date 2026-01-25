import {
  FaBirthdayCake,
  FaUtensils,
  FaMusic,
  FaCameraRetro,
  FaChild,
  FaCar,
  FaHotel,
  FaPalette,
  FaUsers,
  FaMicrophoneAlt,
  FaSpa,
  FaBaby,
} from "react-icons/fa";

export const eventDetailsData = {
  celebration: {
    id: 1,
    slug: "celebration",
    title: "Birthday Celebration",
    subtitle: " Celebrations",
    category:"Ongoing",
    tagline: "Make Every Birthday Unforgettable",
    description:
      "Turn birthdays into magical memories with personalized celebrations at Arambha Resort. Our scenic venues and tailored packages create perfect moments for all ages amid mountain serenity.",
    fullDescription: `Celebrate life's joyful milestones at Arambha Resort where every birthday becomes extraordinary. Our event experts craft bespoke experiences from intimate family gatherings to lavish surprise parties.

Choose from themed decorations, custom cakes, and entertainment options that match your vision perfectly. Enjoy our lush gardens, poolside areas, and indoor halls designed for fun and comfort.

Relax knowing our team manages every detail, allowing you to focus on creating lasting memories with loved ones.`,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrewHcflU3JSx7h9aMBL3f1dql9NXiULULzw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtqfdE_QI_SnjrVQb3YCOXrHprYW8lGH5LQ&s",
      "https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHx8MHx8fDA%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5XiJQj3Wy1bd6hDnE4mBsj0nqR4p1rerjw&s",
      "https://plus.unsplash.com/premium_photo-1698529232838-bf2cc8bd35ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNlbGVicmF0aW9ufGVufDB8fDB8fHww",
    ],
    quickFacts: {
      capacity: "Up to 300 guests",
      venue: "Garden Lawn & Poolside",
      duration: "Half or full day packages",
      parking: "Available for 150+ cars",
    },
    amenities: [
      {
        icon: FaBirthdayCake,
        title: "Themed Decor",
        desc: "Custom balloons, backdrops & lighting",
      },
      {
        icon: FaUtensils,
        title: "Buffet & Cake",
        desc: "Kid-friendly menu & special cakes",
      },
      {
        icon: FaMusic,
        title: "Entertainment",
        desc: "Games, DJ, magician or live band",
      },
      {
        icon: FaCameraRetro,
        title: "Photo Booth",
        desc: "Professional photographer included",
      },
      {
        icon: FaChild,
        title: "Kids Zone",
        desc: "Play area & supervised activities",
      },
      {
        icon: FaCar,
        title: "Valet Parking",
        desc: "Ample parking for all guests",
      },
      {
        icon: FaHotel,
        title: "Stay Packages",
        desc: "Discounted rooms for overnight",
      },
    ],
    testimonials: [
      {
        name: "Sharma Family",
        event: "Son's 10th Birthday, June 2024",
        text: "The kids had the time of their lives! The pool party setup and games were perfect. Food was delicious and staff super friendly.",
        rating: 5,
      },
      {
        name: "Priya Reddy",
        event: "Surprise Birthday, March 2025",
        text: "Everything exceeded expectations. The decorations were stunning and the surprise reveal was magical. Highly recommend!",
        rating: 5,
      },
    ],
  },

  wedding: {
    id: 2,
    slug: "wedding",
    title: " Wedding Celebration",
    subtitle: "Weddings",
        category:"Complete",

    tagline: "Where Dreams Become Forever",
    description:
      "Transform your wedding day into a fairy tale at Arambha Resort. Nestled in the serene mountains, our venue provides the perfect backdrop for your special day. Our expert wedding planners work closely with you to create a bespoke celebration that reflects your unique love story.",
    fullDescription: `At Arambha Resort, we believe every wedding is a unique story waiting to be told. Our dedicated team of wedding specialists ensures that every detail - from the floral arrangements to the culinary experience - is executed with precision and care.

Our wedding packages include comprehensive services that can be customized to match your vision. Whether you dream of an intimate ceremony with close family or a grand celebration with hundreds of guests, we have the perfect space and expertise to make it happen.

We handle everything so you can focus on what truly matters - celebrating your love with family and friends.`,
    images: [
      "/src/assets/mar1.jpg",
      "/src/assets/mar2.jpg",
      "/src/assets/mar3.jpg",
      "/src/assets/mar4.jpg",
      "/src/assets/mar4.jpg",
    ],
    quickFacts: {
      capacity: "Up to 500 guests",
      venue: "Garden Lawn & Banquet Hall",
      bestSeason: "October - March",
      parking: "Available for 200+ cars",
    },
    amenities: [
      {
        icon: FaMicrophoneAlt,
        title: "Stage Setup",
        desc: "Designed stage with floral backdrop",
      },
      {
        icon: FaSpa,
        title: "Floral Decor",
        desc: "Fresh flowers from our gardens",
      },
      {
        icon: FaUtensils,
        title: "Dining Setup",
        desc: "Elegant table arrangements",
      },
      {
        icon: FaMusic,
        title: "Entertainment",
        desc: "DJ, live music, cultural performances",
      },
      {
        icon: FaCameraRetro,
        title: "Photography",
        desc: "Professional team with editing",
      },
      {
        icon: FaCar,
        title: "Vehicle Parking",
        desc: "Available for all guests",
      },
      {
        icon: FaHotel,
        title: "Accommodation",
        desc: "Special rates for guests",
      },
      {
        icon: FaBaby,
        title: "Child Care",
        desc: "Supervised play area",
      },
    ],
    testimonials: [
      {
        name: "Priya & Raj Mehta",
        event: "Wedding, December 2023",
        text: "Arambha Resort made our wedding dreams come true! The team was incredibly professional and took care of every single detail. Our guests are still talking about the beautiful venue and amazing food!",
        rating: 5,
      },
      {
        name: "Anjali Sharma",
        event: "Daughter's Wedding, February 2024",
        text: "From the initial planning to the final goodbye, everything was perfect. The mountain backdrop for the ceremony was breathtaking. Highly recommended!",
        rating: 5,
      },
    ],
  },

  program: {
    id: 3,
    slug: "program",
    title: "Welcome Program",
    subtitle: "Corporate Events",
        category:"Ongoing",

    tagline: "Impress with Grand Arrivals",
    description:
      "Host memorable welcome programs and corporate receptions at Arambha Resort. Our versatile venues and professional setup ensure seamless events for VIP arrivals, team welcomes, and client receptions.",
    fullDescription: `Make powerful first impressions with welcome programs at Arambha Resort. Our experienced event team creates professional yet warm atmospheres perfect for corporate arrivals, client meets, and team celebrations.

From red carpet welcomes to elegant cocktail receptions, we customize every element to reflect your brand. State-of-the-art AV systems, flexible seating, and gourmet catering ensure flawless execution.

Focus on building relationships while we handle the details with precision and hospitality.`,
    images: [
      "/src/assets/prog1.jpg",
      "/src/assets/prog2.jpg",
      "/src/assets/prog3.jpg",
      "/src/assets/prog4.jpg",
      "/src/assets/prog5.jpg",
    ],
    quickFacts: {
      capacity: "Up to 400 guests",
      venue: "Banquet Hall & Outdoor Terrace",
      bestSeason: "Year-round",
      parking: " service available",
    },
    amenities: [
      {
        icon: FaUsers,
        title: "Welcome Desk",
        desc: "Professional registration setup",
      },
      {
        icon: FaUtensils,
        title: "Cocktail Reception",
        desc: "Premium beverages & canapes",
      },
      {
        icon: FaMusic,
        title: "AV Systems",
        desc: "Projector, sound, lighting",
      },
      {
        icon: FaCameraRetro,
        title: "Event Coverage",
        desc: "Candid photography team",
      },
      {
        icon: FaMicrophoneAlt,
        title: "Stage & Podium",
        desc: "Branded backdrop available",
      },
      {
        icon: FaCar,
        title: "VIP Transfers",
        desc: "Shuttle service optional",
      },
      {
        icon: FaHotel,
        title: "Executive Rooms",
        desc: "Preferred guest packages",
      },
    ],
    testimonials: [
      {
        name: "TechCorp India",
        event: "Annual Client Meet, August 2024",
        text: "Flawless execution from welcome to farewell. The terrace reception was stunning and food exceptional. Perfect first impression!",
        rating: 5,
      },
      {
        name: "Global Partners Ltd",
        event: "Team Welcome, January 2025",
        text: "Professional setup exceeded expectations. AV worked perfectly and staff handled 200+ guests seamlessly.",
        rating: 5,
      },
    ],
  },

  festival: {
    id: 4,
    slug: "festival",
    title: "Festivals & Events",
    subtitle: "Cultural Celebrations",
        category:"Upcoming",

    tagline: "Vibrant Traditions in Luxury",
    description:
      "Celebrate festivals with cultural richness at Arambha Resort. From Dashain to Diwali, our venues blend tradition with modern luxury for unforgettable family and community gatherings.",
    fullDescription: `Experience authentic festival celebrations elevated by luxury at Arambha Resort. Our spacious lawns and halls host vibrant cultural events with traditional decor and festive menus.

Perfect for Dashain tika ceremonies, Diwali rangoli contests, Holi color parties, or family poojas. Live cultural performances, traditional games, and festive catering create joyful atmospheres.

Our team specializes in blending cultural traditions with resort comfort, creating memories that honor heritage while celebrating togetherness.`,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-DAy07mtapXLyT7l_p5DxZMZ2wwey5eEow&s",
      "/src/assets/fes2.jpg",
      "/src/assets/fes3.jpg",
      "/src/assets/fes4.jpg",
      "/src/assets/fes5.jpg",
    ],
    quickFacts: {
      capacity: "Up to 600 guests",
      venue: "Grand Lawn & Cultural Stage",
      bestSeason: "Festival seasons",
      parking: "Extensive parking facilities",
    },
    amenities: [
      {
        icon: FaPalette,
        title: "Traditional Decor",
        desc: "Rangoli, torans, lighting",
      },
      {
        icon: FaUtensils,
        title: "Festive Menu",
        desc: "Authentic regional cuisine",
      },
      {
        icon: FaMusic,
        title: "Cultural Shows",
        desc: "Folk dance, music, performances",
      },
      {
        icon: FaCameraRetro,
        title: "Event Photography",
        desc: "Candid festival moments",
      },
      {
        icon: FaSpa,
        title: "Mehendi Station",
        desc: "Professional artists available",
      },
      {
        icon: FaCar,
        title: "Coach Parking",
        desc: "Large vehicle accommodation",
      },
      {
        icon: FaHotel,
        title: "Group Stays",
        desc: "Bulk booking discounts",
      },
    ],
    testimonials: [
      {
        name: "Gupta Family",
        event: "Dashain Celebration, 2024",
        text: "The festival celebration felt like home but with 5-star luxury. Perfect blend of tradition and comfort!",
        rating: 5,
      },
      {
        name: "Nepali Community",
        event: "Teej Festival, September 2024",
        text: "Beautiful cultural stage and authentic food. Everyone danced till midnight. Unforgettable!",
        rating: 5,
      },
    ],
  },
};

export const allEventTestimonials = Object.values(eventDetailsData).flatMap(
  (event) =>
    event.testimonials.map((t) => ({
      ...t,
      eventSlug: event.slug,
      eventTitle: event.title,
      category: event.category,
    }))
);
