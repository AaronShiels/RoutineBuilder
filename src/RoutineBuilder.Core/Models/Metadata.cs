using System.Collections.Generic;

namespace RoutineBuilder.Core.Models
{
    public class Metadata
    {
        public Metadata(IDictionary<string, string> colours)
        {
            Colours = colours;
        }

        public IDictionary<string, string> Colours { get; set; }
    }
}
