using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Model
{
    public class Routine
    {
        public string Id { get; set; }
        public string Name { get; set;}
        public string Description { get; set; }
        public Body Body { get; set; }
        public Metadata Metadata { get; set; }
    }
}
