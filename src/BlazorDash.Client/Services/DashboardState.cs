using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using BlazorDash.Shared;

namespace BlazorDash.Client.Services
{
    public class DashboardState
    {
        private readonly HttpClient _http;
        private readonly List<FootballLeagueCompetition> _competitions = new List<FootballLeagueCompetition>();

        public IReadOnlyList<FootballLeagueCompetition> SearchResults { get; private set; }
        public IReadOnlyList<FootballLeagueCompetition> Competitions { get; private set; }
        public bool Searching { get; private set; }

        public event Action OnChange;

        public DashboardState(HttpClient http)
        {
            _http = http;
        }

        public void AddFootballLeagueComptetion(FootballLeagueCompetition league)
        {
            _competitions.Add(league);
        }

        private void NotifyStateChanged() => OnChange?.Invoke();
    }
}
