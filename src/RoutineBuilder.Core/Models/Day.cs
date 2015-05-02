using System.Collections.Generic;

namespace RoutineBuilder.Core.Models
{
    public class Day
    {
        public Day(IEnumerable<Exercise> exercises)
        {
            Exercises = exercises;
        }

        public IEnumerable<Exercise> Exercises { get; set; }
    }
}
