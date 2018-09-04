using System;
using System.Collections.Generic;

namespace BlazorDash.Shared
{
    public partial class FootballLeagueCompetition : CompetitionBase
    {
        public int TeamCount { get; set; }
        public int PlayerCount { get; set; }
        public int MatchCount { get; set; }
        public int Weeks { get; set; }
        public int CurrentWeek { get; set; }
        public string GoverningBody { get; set; }
        public string Country { get; set; }
        
    }
}
