using Breeze.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using BreezeApplication.Models;
using Newtonsoft.Json.Linq;

namespace BreezeApplication.Controllers
{
    [BreezeController]
    public class ChinookController : ApiController
    {
        readonly EFContextProvider<ChinookEntities> _contextProvider =
            new EFContextProvider<ChinookEntities>();

        // ~/api/chinook/Metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        // ~/api/chinook/artists
        // ~/api/chinool/artists?$filter=Name%20startswith%20L&$orderby=LastName 
        [HttpGet]
        public IQueryable<Artist> Artists()
        {
            return _contextProvider.Context.Artists;
        }

        // ~/api/breezydevices/devices
        [HttpGet]
        public IQueryable<Album> Albums()
        {
            return _contextProvider.Context.Albums;
        }

        // ~/api/chinook/SaveChanges
        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }
    }
}
