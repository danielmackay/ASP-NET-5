using System.Collections.Generic;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IList<Trip> GetAllTrips();
        IList<Trip> GetAllTripsWithStops();
    }
}