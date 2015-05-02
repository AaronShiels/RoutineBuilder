namespace RoutineBuilder.Core.Models
{
    public class Exercise
    {
        public Exercise(string name, string description, VariableCoefficientConstantFormula formula = null)
        {
            Name = name;
            Description = description;
            WeightForumla = formula;
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public /*IWeightFormula*/ VariableCoefficientConstantFormula WeightForumla { get; set; }
    }
}