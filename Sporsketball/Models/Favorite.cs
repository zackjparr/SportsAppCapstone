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
        //public TeamData? Data { get; set; }
    }
}
