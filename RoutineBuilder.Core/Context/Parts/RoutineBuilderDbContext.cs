using RoutineBuilder.Core.Context.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context.Parts
{
    public class RoutineBuilderDbContext : DbContext, IRoutineBuilderDbContext
    {
        private IDbSet<Routine> Routines { get; set; }

        static RoutineBuilderDbContext()
        {
            Database.SetInitializer<RoutineBuilderDbContext>(null);
        }

        public RoutineBuilderDbContext() : base("RoutineBuilderDatabase") { }

        public IQueryable<T> Query<T>(IQuery<T> query) where T : class
        {
            return query.Filter(Set<T>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Types()
                        .Configure(c =>
                        {
                            var nonPublicProperties = c.ClrType.GetProperties(BindingFlags.NonPublic | BindingFlags.Instance);

                            foreach (var p in nonPublicProperties)
                            {
                                c.Property(p).HasColumnName(p.Name);
                            }
                        });
            //modelBuilder.Conventions.Add(new PrivateMappingConventions());
            //modelBuilder.Configurations.Add(new RoutineMap());
            //modelBuilder.Configurations.Add(new DisplayMetadataMap());
        }
    }
}
