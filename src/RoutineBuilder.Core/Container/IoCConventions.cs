using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace RoutineBuilder.Core.Container
{
    public static class IoCConventions
    {
        public static IEnumerable<ContainerDefinition> FromAssemblies(IEnumerable<Assembly> assemblies, Func<Type, bool> selectionPredicate)
        {
            return assemblies.SelectMany(assembly => assembly.GetTypes())
                             .Where(IsConcreteType)
                             .Where(selectionPredicate)
                             .SelectMany(t => t.GetInterfaces()
                                               .Select(i => new ContainerDefinition(i, t, ResolveLifeTime(t))));
        }

        private static bool IsConcreteType(Type type)
        {
            return type.IsClass && !type.IsAbstract;
        }

        private static LifeTime ResolveLifeTime(Type t)
        {
            var attribute = t.GetCustomAttributes<LifeTimeAttribute>()
                             .SingleOrDefault();

            return attribute != null
                            ? attribute.Lifetime
                            : LifeTime.PerInstance;
        }
    }
}
