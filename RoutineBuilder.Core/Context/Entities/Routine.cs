using RoutineBuilder.Core.Context;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context.Entities
{
    [Table("Routines")]
    public partial class Routine
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Week> Weeks { get; set; }
        public string ColoursSerialized { get; set; }
    }
}
