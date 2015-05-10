using System;

namespace RoutineBuilder.Core.Container
{
    public class LifeTimeAttribute : Attribute
    {
        public LifeTimeAttribute(LifeTime lifeTime)
        {
            lifeTime = Lifetime;
        }

        public LifeTime Lifetime { get; set; }
    }
}
