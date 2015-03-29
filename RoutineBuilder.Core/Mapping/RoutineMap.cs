using RoutineBuilder.Core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mapping
{
    public class RoutineMap : EntityTypeConfiguration<Routine>
    {
        public RoutineMap()
        {
            ToTable("Routines");
            HasKey(e => e.Id);
        }
    }
}
