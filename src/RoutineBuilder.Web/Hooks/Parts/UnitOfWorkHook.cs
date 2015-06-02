using System.Threading.Tasks;
using Nancy;
using System.Transactions;
using RoutineBuilder.Core.Context;
using System;
using Alt.Composition;
using System.Composition;

namespace RoutineBuilder.Web.Hooks.Parts
{
    [Shared(Boundaries.DataConsistency)]
    public class UnitOfWorkHook : IBeforeHook, IAfterHook
    {
        private readonly IRoutineBuilderDbContext _db;
        private TransactionScope _ts;

        public Guid MyId { get; set; } 

        public UnitOfWorkHook(IRoutineBuilderDbContext db)
        {
            _db = db;
            MyId = Guid.NewGuid();
        }

        public Task<Response> Before(NancyContext ctx)
        {
            _ts = new TransactionScope(TransactionScopeOption.Required, TransactionScopeAsyncFlowOption.Enabled);
            return null;
        }

        public async Task<Response> After(NancyContext ctx)
        {
            await _db.SaveChangesAsync();
            _ts.Complete();
            _ts.Dispose();
            return null;
        }
    }
}