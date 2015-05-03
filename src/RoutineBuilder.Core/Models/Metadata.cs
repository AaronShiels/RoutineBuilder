using System.Collections.Generic;

namespace RoutineBuilder.Core.Models
{
    public class Metadata
    {
        public Metadata(Dictionary<string, string> colours)
        {
            Colours = colours;
        }

        public Dictionary<string, string> Colours { get; set; }
    }
}
