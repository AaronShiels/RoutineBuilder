namespace RoutineBuilder.Core.Models
{
    public class Routine
    {
        public string Id { get; set; }
        public string Name { get; set;}
        public string Description { get; set; }
        public Body Body { get; set; }
        public Metadata Metadata { get; set; }
    }
}
