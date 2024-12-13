import { Plane, Hotel, Train, Bus, Car, FileCheck } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Flight Bookings",
    description: "Corporate fares & exclusive coupon deals",
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: "Hotel Bookings",
    description: "B2B rates for premium stays",
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: "Train Tickets",
    description: "Confirmed & Tatkal bookings",
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Bus Tickets",
    description: "Nationwide bus booking service",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Cab Transfers",
    description: "Intercity & local transfers",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Visa Services",
    description: "Hassle-free visa processing",
  },
];