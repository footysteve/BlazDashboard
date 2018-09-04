using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlazorDash.Shared;
using Microsoft.AspNetCore.Mvc;

namespace BlazorDash.Server.Controllers
{
    [Route("api/[controller]")]
    public class CompetitionController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<FootballLeagueCompetition> Competitions()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new FootballLeagueCompetition
            {
                Id = 1,
                Name = "English Premier League",
                TeamCount = 20,
                PlayerCount = 100,
                MatchCount = 380,
                Weeks = 38,
                CurrentWeek = 4,
                GoverningBody = "FA",
                Country = "England",
            });
        }
    }
}