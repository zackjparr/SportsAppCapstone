using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{
    public class Favorite
    {
        [Key]
        public int FaveId { get; set; }
        public int TeamId { get; set; }
        public string Thumbnail { get; set; }
        public string TeamName { get; set; }

        //this was bogging down the loading
        //and all we were using was thumbnail and Team Name 
        //so i just adjusted the DB to have these things
        //public TeamData? Data { get; set; }
    }
}
