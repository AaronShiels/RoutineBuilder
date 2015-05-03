using System.Collections.Generic;
using System.Linq;

namespace RoutineBuilder.Core.Models
{
    public class Routine
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Body Body { get; set; }
        public Metadata Metadata { get; set; }
        public Dictionary<string, decimal> Variables
        {
            get
            {
                return Body.Weeks
                            .SelectMany(w => w.Days.SelectMany(d => d.Exercises.Select(e => e?.WeightFormula?.Variable)))
                            .Where(v => !string.IsNullOrEmpty(v))
                            .Distinct()
                            .ToDictionary(v => v, v => 0m);
            }
        }
    }
}
