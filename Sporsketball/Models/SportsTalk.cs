using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{
    public class SportsTalk
    {
        [Key]
        public int PostId { get; set; }
        public string PostBody { get; set; }
        public int UserId { get; set; }

        public User User { get; set; }
    }
}
