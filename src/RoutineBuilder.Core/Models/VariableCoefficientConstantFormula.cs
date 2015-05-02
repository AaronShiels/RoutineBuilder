namespace RoutineBuilder.Core.Models
{
    public class VariableCoefficientConstantFormula : IWeightFormula
    {
        public string Descriminator { get { return "VariableCoefficientConstant"; } }
        public string Variable { get; set; }
        public decimal Fraction { get; set; }
        public decimal Additional { get; set; }

        public VariableCoefficientConstantFormula(string variable, decimal fraction, decimal additional = 0m)
        {
            Variable = variable;
            Fraction = fraction;
            Additional = additional;
        }
    }
}
