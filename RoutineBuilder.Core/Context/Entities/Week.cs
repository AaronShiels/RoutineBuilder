using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context.Entities
{
    [Table("Weeks")]
    public class Week
    {
        [Key]
        public Guid Id { get; set; }
        [ForeignKey("Routine")]
        private Guid RoutineId { get; set; }
        public virtual ICollection<Day> Days { get; set; }
        public virtual Routine Routine { get; set; }
    }
}
