using Alt.Composition;
using Magnum.Extensions;
using RoutineBuilder.Core.Context.Entities;
using System.Composition;
using System.Data.Entity;
using System.Linq;
using System.Reflection;

namespace RoutineBuilder.Core.Context.Parts
{
    [Shared(Boundaries.DataConsistency)]
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
        }

        public void Insert<TEntity>(params TEntity[] entities) where TEntity : class
        {
            var set = Set<TEntity>();

            entities.Each(e => set.Add(e));
        }
    }
}
