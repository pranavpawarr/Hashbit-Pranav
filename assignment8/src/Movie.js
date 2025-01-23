import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Movie Data
const movies = [
  {
    id: 1,
    title: "Inception",
    poster: "/api/placeholder/200/300",
    rating: "8.8",
  },
  {
    id: 2,
    title: "The Matrix",
    poster: "/api/placeholder/200/300",
    rating: "8.7",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "/api/placeholder/200/300",
    rating: "8.6",
  },
  { id: 4, title: "Avatar", poster: "/api/placeholder/200/300", rating: "7.8" },
  {
    id: 5,
    title: "Avengers",
    poster: "/api/placeholder/200/300",
    rating: "8.0",
  },
  {
    id: 6,
    title: "Star Wars",
    poster: "/api/placeholder/200/300",
    rating: "8.2",
  },
  {
    id: 7,
    title: "Jurassic Park",
    poster: "/api/placeholder/200/300",
    rating: "8.1",
  },
  {
    id: 8,
    title: "The Dark Knight",
    poster: "/api/placeholder/200/300",
    rating: "9.0",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    poster: "/api/placeholder/200/300",
    rating: "8.9",
  },
  {
    id: 10,
    title: "Fight Club",
    poster: "/api/placeholder/200/300",
    rating: "8.8",
  },
  {
    id: 11,
    title: "Gladiator",
    poster: "/api/placeholder/200/300",
    rating: "8.5",
  },
  {
    id: 12,
    title: "The Godfather",
    poster: "/api/placeholder/200/300",
    rating: "9.2",
  },
  {
    id: 13,
    title: "Forrest Gump",
    poster: "/api/placeholder/200/300",
    rating: "8.8",
  },
  {
    id: 14,
    title: "The Shawshank Redemption",
    poster: "/api/placeholder/200/300",
    rating: "9.3",
  },
  {
    id: 15,
    title: "The Lord of the Rings",
    poster: "/api/placeholder/200/300",
    rating: "8.9",
  },
  {
    id: 16,
    title: "The Lion King",
    poster: "/api/placeholder/200/300",
    rating: "8.5",
  },
];

// Main App Component
const MovieBookingApp = () => {
  const [currentPage, setCurrentPage] = useState("movies");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [bookedTicket, setBookedTicket] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage("movie-details");
  };

  const handleBookSeats = () => {
    setCurrentPage("booking-form");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookingId = `MB${Math.floor(Math.random() * 100000)}`;
    setBookedTicket({
      ...bookingDetails,
      movieTitle: selectedMovie.title,
      bookingId,
    });
    setCurrentPage("booking-confirmed");
  };

  const renderMoviesPage = () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleMovieSelect(movie)}
        >
          <CardHeader>
            <CardTitle>{movie.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <p>Rating: {movie.rating}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMovieDetailsPage = () => (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
      <img
        src={selectedMovie.poster}
        alt={selectedMovie.title}
        className="w-64 h-96 object-cover mb-4"
      />
      <Button onClick={handleBookSeats}>Book Seats</Button>
    </div>
  );

  const renderBookingFormPage = () => (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Booking for {selectedMovie.title}
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input
            required
            value={bookingDetails.name}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            required
            value={bookingDetails.email}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <Label>Mobile</Label>
          <Input
            type="tel"
            required
            value={bookingDetails.mobile}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                mobile: e.target.value,
              })
            }
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Booking
        </Button>
      </form>
    </div>
  );

  const renderBookingConfirmedPage = () => (
    <Dialog open={true} onOpenChange={() => setCurrentPage("movies")}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Booking Confirmed!</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <p>
            <strong>Booking ID:</strong> {bookedTicket.bookingId}
          </p>
          <p>
            <strong>Movie:</strong> {bookedTicket.movieTitle}
          </p>
          <p>
            <strong>Name:</strong> {bookedTicket.name}
          </p>
          <p>
            <strong>Email:</strong> {bookedTicket.email}
          </p>
          <p>
            <strong>Mobile:</strong> {bookedTicket.mobile}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="container mx-auto">
      {currentPage === "movies" && renderMoviesPage()}
      {currentPage === "movie-details" && renderMovieDetailsPage()}
      {currentPage === "booking-form" && renderBookingFormPage()}
      {currentPage === "booking-confirmed" && renderBookingConfirmedPage()}
    </div>
  );
};

export default MovieBookingApp;
