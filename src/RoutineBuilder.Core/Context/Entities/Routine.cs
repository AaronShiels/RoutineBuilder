using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoutineBuilder.Core.Context.Entities
{
    [Table("Routines")]
    public partial class Routine
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string BodySerialized { get; set; }
        public string MetadataSerialized { get; set; }
    }
}
