using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace RoutineBuilder.Core.Context.Entities
{
    [Table("Exercises")]
    public class Exercise
    {
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Day")]
        private Guid DayId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        //public IWeightFormula WeightForumla { get; set; }
        public virtual Day Day { get; set; }
    }
}
