﻿using System;

namespace TheWorld.Models
{
    public class Stop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        // todo: Change to geography?
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public DateTime Arrival { get; set; }
        public int Order { get; set; }

        public int TripId { get; set; }
        public virtual Trip Trip { get; set; }
    }
}