using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorDash.Shared
{
    public class CompetitionBase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Abbreviation { get; set; }
        public long UtcStartDate { get; set; }
        public long UtcEndDate { get; set; }
        public long LocalStartDate { get; set; }
        public long LocalEndDate { get; set; }
        
    }
}
