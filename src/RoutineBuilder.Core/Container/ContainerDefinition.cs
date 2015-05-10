using System;

namespace RoutineBuilder.Core.Container
{
    public class ContainerDefinition
    {
        public Type RegistrationType { get; set; } 
        public Type ImplementationType { get; set; }
        public LifeTime LifeTime { get; set; }

        public ContainerDefinition(Type registrationType, Type implementationType, LifeTime lifeTime)
        {
            RegistrationType = registrationType;
            ImplementationType = implementationType;
            LifeTime = lifeTime;
        }
    }
}
