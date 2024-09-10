using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Gifter.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        public List<Post> Posts { get; set; }
    }
}
