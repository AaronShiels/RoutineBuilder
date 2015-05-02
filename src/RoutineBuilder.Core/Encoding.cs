using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core
{
    public static class Encoding
    {
        public static string EncodeGuid(Guid guid)
        {
            return Convert.ToBase64String(guid.ToByteArray())
            .Substring(0, 22)
            .Replace("/", "_")
            .Replace("+", "-");
        }

        public static Guid DecodeGuid(string encodedGuid)
        {
            if (encodedGuid == null)
            {
                throw new ArgumentNullException("encodedGuid");
            }
            else if (encodedGuid.Length != 22)
            {
                throw new FormatException("Input string was not in a correct format.");
            }

            return new Guid(Convert.FromBase64String(encodedGuid.Replace("_", "/").Replace("-", "+") + "=="));
        }
    }
}
