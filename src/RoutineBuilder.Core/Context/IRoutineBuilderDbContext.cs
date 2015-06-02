using System.Linq;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context
{
    public interface IRoutineBuilderDbContext
    {
        IQueryable<T> Query<T>(IQuery<T> query) where T : class;
        void Insert<TEntity>(params TEntity[] entities) where TEntity : class;
        int SaveChanges();
        Task<int> SaveChangesAsync();
    }
}
