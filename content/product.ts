import type { Feature } from "@/types/content";

export const productHero = {
  eyebrow: "Product",
  headline: "Everything you need to take bookings on your own website.",
  subhead:
    "GuestFlow handles the whole reservation journey, from the moment a guest lands on your site to the moment they come back to book again.",
};

export const features: Feature[] = [
  {
    icon: "widget",
    title: "A widget designed into your site",
    body: "Typography, colors, copy, and flow tailored to your venue by people who build websites for a living. It's a designed part of your site, not a themed iframe, with availability, capacity, and blackout dates updating in real time.",
  },
  {
    icon: "compass",
    title: "Booked from Google, Instagram, and WhatsApp",
    body: "Reserve with Google lets people book straight from your Google listing and Maps, booking links go on Instagram and Facebook, and WhatsApp reaches guests in the conversations they already have open.",
  },
  {
    icon: "data",
    title: "Guest CRM & export",
    body: "Every booking builds your guest book with visits, preferences, and notes. It's yours to keep and export as a CSV any day, and we never use it for anything else.",
  },
  {
    icon: "shield",
    title: "Deposits & no-show protection",
    body: "Card guarantees and deposits for the bookings that hurt most to lose, paid into your own Stripe account, with policies you control per service and party size. Deposits show up on the final bill, not in a side spreadsheet.",
  },
  {
    icon: "bell",
    title: "Confirmations & reminders",
    body: "Branded confirmations and well-timed reminders go out automatically by email and WhatsApp, which makes a real dent in no-shows.",
  },
  {
    icon: "chart",
    title: "Booking analytics",
    body: "See where bookings come from, when demand peaks, and which slots underperform, so your decisions are backed by your own numbers.",
  },
];

export const ownYourData = {
  eyebrow: "The principle",
  title: "Your guest data is yours, and it stays that way.",
  body: "Marketplace platforms built very large businesses on data that restaurants and hotels generated for them. GuestFlow is set up so that can't happen here: your bookings and your guests live in your account, and you can export everything at any time. We charge for the software, nothing more.",
  points: [
    "Full data export, any time, no questions",
    "No marketing to your guests, ever",
    "No cross-venue marketplace, so your guests only ever see you",
    "Guest data on EU servers, under a Portuguese-law contract, GDPR by design",
  ],
};
