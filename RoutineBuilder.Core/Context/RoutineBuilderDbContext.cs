using RoutineBuilder.Core.Mapping;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context
{
    public class RoutineBuilderDbContext : DbContext, IRoutineBuilderDbContext
    {
        static RoutineBuilderDbContext()
        {
            Database.SetInitializer<RoutineBuilderDbContext>(null);
        }

        public RoutineBuilderDbContext() : base("RoutineBuilderDatabase") {}

        public IQueryable<T> Query<T>(IQuery<T> query) where T : class
        {
            return query.Filter(Set<T>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new RoutineMap());
        }
    }
}
