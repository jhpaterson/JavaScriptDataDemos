//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BreezeApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Album
    {
        public Album()
        {
            this.Tracks = new HashSet<Track>();
        }
    
        public int AlbumId { get; set; }
        public string Title { get; set; }
        public int ArtistId { get; set; }
    
        public virtual Artist Artist { get; set; }
        public virtual ICollection<Track> Tracks { get; set; }
    }
}
