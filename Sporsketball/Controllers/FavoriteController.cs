using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sporsketball.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        FavoriteDAL favoriteDB = new FavoriteDAL();

        //localhost/api/favorite/create
        [HttpPost("create/{userId}")]
        public void CreateFavorite(Favorite f, int userId)
        {
            favoriteDB.CreateFavorite(f, userId);

        }

        //localhost/api/favorite/delete
        [HttpDelete("delete/{userId}/{faveId}")]
        public void DeleteFavorite(int userId,  int faveId)
        {
            favoriteDB.DeleteFavorite(faveId, userId);
        }
    }
}
