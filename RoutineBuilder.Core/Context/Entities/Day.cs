using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace RoutineBuilder.Core.Context.Entities
{
    [Table("Days")]
    public class Day
    {
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Week")]
        private Guid WeekId { get; set; }
        public virtual ICollection<Exercise> Exercises { get; set; }
        public virtual Week Week { get; set; }
    }
}
